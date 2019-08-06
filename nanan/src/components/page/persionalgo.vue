<template>
	<div class="mes">
    <img v-bind:src="persional.avatar"/>
        <div class="con">
        <h2>个人中心</h2>
        <router-link class="link" :to="{name:'update',params:{persional}}">{{message}}</router-link>
        <p class="name">姓名:  {{persional.name}}</p>
	</div>      
            <div class="left">
        <ul>
            <!-- <li><p>id:  {{persional.id}}</p></li> -->
            <li><p>性别:  {{persional.sex}}</p></li>
            <li><p>账户类型:  {{persional.role}}</p></li>
            <li><p>生日:  {{persional.brth}}</p></li>
            <li><p>工作:  {{persional.job}}</p></li>            
        </ul>
            </div>
            <div class="right">
        <ul>
            <li><p>地址:  {{persional.address}}</p></li>
            <li><p>电话:  {{persional.telphone}}</p></li>
            <li><p>爱好:  {{persional.hobby}}</p></li>
            <button class="out" @click="out">登出</button>
        </ul>
        </div>
        <div class="clear"></div>
        <button @click="update">修改信息</button>
	</div>
</template>


<script>
import axios from "axios";
export default {
  name: "persionalgo",
  data() {
    return {
      persional: null,
      message:null,
      status:null,
      logout:null
    };
  },
  mounted() {
    // alert(document.cookie);
    axios
      .post("http://www.xerus.cn/nanan/public/userinfo")
      .then(response => {
        console.log(response);
        this.persional = response.data.data;
        this.status = response.data.status;
        console.log(this.persional);
        if(this.status == 0){
        if (this.persional.sex == "male") {
          this.persional.sex = "男";
        } else{
          this.persional.sex = "女";
        }
        if(this.persional.name == null || this.persional.sex == null|| this.persional.role == null ||this.persional.brth == null|| this.persional.job == null|| this.persional.address == null ||this.persional.telphone==null||this.persional.hobby==null)
        {
            this.message = "您的账户信息不完善请完善信息";
        }
        }
        else{
          this.$router.push('/landed');
        }
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  methods:{
    update:function(){
      this.$router.push('/update');
    },
    out:function(){
      axios
      .post("http://www.xerus.cn/nanan/public/logout")
      .then(response => {
        console.log(response);
        this.persional = response.data.data;
         this.logout = response.data.status;
        // console.log(this.persional);
    })
    this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/perisonalgo.scss";
@import "../../style/pages.scss";
button{
    width: 900px;
}
p{
  color: #fff;
}
.out{
  width: 300px;
}
</style>
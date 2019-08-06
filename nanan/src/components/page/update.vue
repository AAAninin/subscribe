<template>
	<div class="mes">
        <div class="box">
        <input name="avatar" type="file" class="img" accept="image/png,image/gif" @change="getFiles($event)" id="importFile">
        <img id="img" v-bind:src="persional.avatar"/>
        </div>
        <div class="con">
        <h2>个人中心</h2>
        <div class="name">
        姓名:  <input name="name" type="text" v-model="persional.name">
        </div>   
            <div class="left">
        <ul>
            <!-- <li>id: &nbsp&nbsp&nbsp <input type="text" v-model="this.$route.params.persional.id"></li> -->
            <li>性别:  <input name="sex" type="text" v-model="persional.sex"></li>
            <li>类型:  <input name="role" type="text" v-model="persional.role"></li>
            <li>生日:  <input name="brth" type="date" v-model="persional.brth"></li>
            <li>工作:  <input name="job" type="text" v-model="persional.job"></li>            
        </ul>
            </div>
            <div class="right">
        <ul>
            <li>地址:  <input name="address" type="text" v-model="persional.address"></li>
            <li>电话:  <input name="telphone" type="text" v-model="persional.telphone"></li>
            <li>爱好: <input name="hobby" type="text" v-model="persional.hobby"></li>
        </ul>
        </div>
        <div class="clear"></div>
        <button @click="sure">确定</button>
	</div>
	</div>
</template>


<script>
import axios from "axios";
export default {
  name: "update",
  data() {
    return {
      updates: null,
      persional: null
    };
  },
  mounted() {
    axios
      .post("http://www.xerus.cn/nanan/public/userinfo")
      .then(response => {
        console.log(response);
        this.persional = response.data.data;
        // console.log(this.persional);
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  methods: {
    sure: function() {
      let formData = new FormData();
      var elem = document.getElementById("importFile");
      var telephone = document.getElementById("telephone");
      let file = elem.files[0];
      console.log(telephone.value);
      if(elem.files[0] != undefined){formData.append("avatar", file);}
      formData.append("id", this.persional.id);
      formData.append("sex", this.persional.sex);
      formData.append("name", this.persional.name);
      formData.append("brth", this.persional.brth);
      formData.append("job", this.persional.job);
      formData.append("role", this.persional.role);
      formData.append("address", this.persional.address);
      formData.append("telphone", this.persional.telphone);
      formData.append("hobby", this.persional.hobby);
      // console.log(this.persional.name);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      axios
        .post(
          "http://www.xerus.cn/nanan/public/userinfo/update",
          formData,
          config
        )
        .then(response => {
          console.log(response);
          this.updates = response.data.status;
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },
    getFiles(e) {
      //图片实时显示
      var elem = document.getElementById("importFile");
      var img = document.getElementById("img");
      var files = elem.files,
        reader = new FileReader();
      if (files && files[0]) {
        reader.onload = function(ev) {
          img.src = ev.target.result;
        };
        reader.readAsDataURL(files[0]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/perisonalgo.scss";
@import "../../style/pages.scss";
li {
  margin-bottom: 50px;
}
.name {
  margin-bottom: 50px;
}
button {
  width: 900px;
}
</style>
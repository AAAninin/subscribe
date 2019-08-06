<template>
  <div id="centern">
    <!-- <router-link to='/about'>about</router-link> -->
    <div class="header">
      <div class="left">
        <div class="list">
          <!-- 写v-for -->
          <ul v-for="it in its">
            <li @click="list()">{{it.message1}} /</li>
            <li @click="list()">{{it.message2}} /</li>
            <li @click="list()">{{it.message3}} /</li>
            <li @click="list()">{{it.message4}} /</li>
            <div class="clear"></div>
          </ul>
          
        </div>
      </div>
      <div class="right">
        <el-carousel :interval="5000" arrow="always">
          <!-- v-for -->
          <el-carousel-item>
            <img src="../assets/1.webp" alt>
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/2.jpg" alt>
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/3.jpg" alt>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="footer">
      
      <div class="shop" v-for="item in titles" >
        <el-row>
          <el-col>
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://img.alicdn.com/imgextra/i2/2585780740/O1CN011HKxYBjGug0VPwX_!!2585780740-0-beehive-scenes.jpg_300x300.jpg" class="image pointer" @click="single()">
              <div style="padding: 14px;">
                <span class="pointer" @click="single()">{{item.message}}</span>
                <div class="bottom clearfix">
                  <time class="time"></time>
                  <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      
      
    </div>
  </div>
</template>

<script>
export default {
  name: "centern",
  data() {
    return {
      titles:[
        {message:'冲锋衣'},
        {message:'大衣'},
        {message:'长衣服'},
      ],
      its:[
        {message1:'大衣',message2:'大衣',message3:'大衣',message4:'大衣'},
        {message1:'冲锋衣',message2:'冲锋衣',message3:'冲锋衣',message4:'冲锋衣'},
        {message1:'运动衣',message2:'运动衣',message3:'运动衣',message4:'运动衣'},
        {message1:'半截袖',message2:'半截袖',message3:'半截袖',message4:'半截袖'},
        {message1:'内衣',message2:'内衣',message3:'内衣',message4:'内衣'},
      ],
      currentDate: new Date()
    };
  },
  methods:{
    single(){
      this.$router.push('/single');
    },
    list(){
      this.$router.push('/list');
    }
  }
};
</script>

<style scoped>
#centern {
  display: flex;
  margin: 0 150px;
  flex-direction: column;
}
ul {
  list-style: none;
  margin-left: 10px;
  display: inline-block;
}
li {
  float: left;
  cursor: pointer;
}
.header {
  display: flex;
  margin-bottom: 50px;
}
.left {
  flex: 1;
  /* background: #e6a23c; */
}
.list {
  width: 75%;
  border: 1px solid #e6a23c;
}
.right {
  flex: 1.2;
}
.clear {
  clear: both;
}
img {
  width: 100%;
  height: 100%;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 50%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.footer{
    display: flex;
    flex-wrap:wrap;
}
.shop{
    margin: 10px 10px;
}
.pointer{
  cursor: pointer;
}
</style>

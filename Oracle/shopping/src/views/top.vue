<template>
  <div id="top">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <p align='center' @click="index()">首页</p>
        </div>
      </el-col>
      <el-col :span="16">
        <el-input placeholder="请输入内容" v-model="item" class="input-with-select top">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="change()"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <p align='center' @click="lead()">个人中心</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "top",
  data() {
    return {
      item: "",
      select: ""
    };
  },
  methods:{
    index:function(){
      this.$router.push('/');
    },
    lead:function(){
      //用cookie判断是否已经登陆
      this.$router.push('/lead');
    },
    change:function(){
      //this.item是要搜索的东西发送ajax

      this.$router.push('/list');
    }
  }
};
</script>
<style scoped>
#top {
  width: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.top{
  margin-top: 13px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
p{
  display: inline-block;
  width: 100%;
  padding-bottom: 10px;
  padding-top: 22px;
  color: #909399;
  margin: 0;
}
.bg-purple{
  cursor: pointer;
}
</style>

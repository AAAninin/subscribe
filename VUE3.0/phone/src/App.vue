<template>
  <div id="app">
    <van-nav-bar title="标题" left-text="返回" @click-left="onClickLeft" left-arrow>
  <van-icon name="search" slot="right" />
</van-nav-bar>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
    
    <router-view/>
  </div>
</template>
<script>
export default {
  methods:{
    onClickLeft(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

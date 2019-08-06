<template>
  <div id="app">
    <div id="nav">
      <el-container direction="vertical">
        <top></top>
        <router-view/>
        <last></last>
      </el-container>
    </div>
  </div>
</template>
<script>
import top from "./views/top.vue";
// import centern from "./views/centern";
import last from "./views/footer";
export default {
  name: "app",
  components: {
    top,
    last
  }
};
</script>


<style>

</style>

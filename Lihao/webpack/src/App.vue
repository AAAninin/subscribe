<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import login from './components/login.vue'

export default {
  name: 'app',
  components: {
    login
  }
}
</script>

<style>
#app {
}
*{
  margin: 0;
  padding: 0;
}
</style>

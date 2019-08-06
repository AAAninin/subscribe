<template>
  <div id="Layout">
    <div class="app-header">header</div>
    <div class="app-content">content</div>
    <div class="app-footer">footer</div>
  
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

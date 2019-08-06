<template>
  <div><h1>{{msg}}</h1></hr>
  <h2>{{count}}</h2>
  <button @click="add(3)">+</button>
  <button @click="reduce">-</button>
  <button @click="addAction">+</button>
  <button @click="reduceAction">-</button>
  </div>
</template>

<script>
import store from "@/Vuex/store";
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
export default {
  data() {
    return {
      msg: 'Hello Vuex',
    }
  },
  computed:{
      ...mapState(['count']),
      ...mapGetters(['count'])
  },
  methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])
  },
  store
};
</script>

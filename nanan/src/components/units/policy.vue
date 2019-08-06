<template>
	<div class="content">
		<div class="title">政策展示</div>
		<div class="detail">
			<ul>
				<li v-for="policy in policies" @click="go_policy(policy.id)" class="item">
              <div class="item-title">{{ policy.title }}</div>
              <!-- <div class="item-content">{{ policy.content }}</div> -->
            </li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: 'policy',
  data () {
    return {
			policies:null
    }
	},
	mounted() {
    this.axios.post("http://www.xerus.cn/nanan/public/policies")
    .then(res => {this.policies=res.data.data})
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/unit.scss';
#content{
	background-color:#108001;
}
</style>
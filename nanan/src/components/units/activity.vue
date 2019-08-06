<template>
	<div class="content">
		<div class="title">活动空间</div>
		<div class="detail">
			<ul>
				<li v-for="activity in activities" @click="go_activity(activity.id)" class="item">
              <div class="item-title">{{ activity.title }}</div>
              <!-- <div class="item-content">{{ activity.content }}</div> -->
            </li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: 'activity',
  data () {
    return {
			activities:null
    }
	},
	 mounted() {
    this.axios.post("http://www.xerus.cn/nanan/public/activities")
    .then(res => {this.activities=res.data.data})
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/unit.scss';
#content{
	background-color:#7F7F7F;
}
</style>
<template>
	<div class="content">
		<div class="title">消息</div>
		<div class="detail">
			<!-- <ul>
				<li>暂无消息</li>
				<li>暂无消息</li>
				<li>暂无消息</li>
				<li>暂无消息</li>
				<li>暂无消息</li>
			</ul> -->
			<div class="open"><p>暂无消息</p></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/unit.scss';
#content{
	background-color:#7F7F7F;
}
.open{
	text-align: center;
	margin-top: 120px;
}
</style>
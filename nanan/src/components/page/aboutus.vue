<template>
	<div class="content">
        <div class="msg">
		<h1 class="con">关于我们</h1>
        <div class="blank"></div>
        <ul>
            <li class="con">关于我们关于我们关于我们关于我们于我们关于我们于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们于我们关于我们于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们于我们关于我们于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们于我们关于我们于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们于我们关于我们于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们于我们关于我们于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们于我们关于我们于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们于我们关于我们于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们于我们关于我们于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们于我们关于我们于我们关于我们</li>            
        </ul>
        </div>
	</div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/unit.scss';
@import '../../style/rectangle.scss';
#content{
    @include rectangle(1136px,680px);
}
.con{
    text-align: center;
}
.blank{
    height: 100px;
}
li{
    margin-bottom: 10px;
    font-size: 18px;
}
.msg{
    width: 1136px;
    height: 680px;
    background-color: #fff;
}
</style>
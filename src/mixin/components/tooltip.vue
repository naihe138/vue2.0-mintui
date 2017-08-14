/**
* @file
* @author 何文林
* @date 2017/7/10
*/
<template>
	<div class="tooltip-demo">
		<h3 @click="toggleShow">
			<span v-if="isShowing">Click Me Again</span>
			<span v-else>Click Me Please</span>
		</h3>
		<app-child v-if="isShowing" class="tooltip">
			<p>I'm a tooltip this time</p>
		</app-child>
	</div>
</template>

<script>
  import Child from './childarea.vue'
  import {toggle} from '../mixin/toggle'
  export default{
    mixins: [toggle],
    components: {
      appChild: Child
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>

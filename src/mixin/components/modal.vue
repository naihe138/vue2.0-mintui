/**
* @file
* @author 何文林
* @date 2017/7/10
*/
<template>
	<div id="">
		<h3>Let's trigger this here modal!</h3>
		<button @click="toggleShow">
			<span v-if="isShowing">Hide child</span>
			<span v-else>Show child</span>
		</button>
		<app-child v-if="isShowing" class="modal">
			<button @click="toggleShow">Close</button>
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

/**
* @file
* @author 何文林
* @date 2017/7/10
*/
<template>
	<div id="">
		<app-modal></app-modal>
		<hr/>
		<app-tooltip></app-tooltip>
	</div>
</template>

<script>
  import AppModal from './modal.vue'
  import AppTootip from './tooltip.vue'
  export default{
    components: {
      'app-modal': AppModal,
      'app-tooltip': AppTootip
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>

/**
* @file
* @author 何文林
* @date 2017/7/10
*/
<template>
	<div id="zoomImage">
		<div class="box" :style="{width: imageConfig.width, height: imageConfig.height}">
			<img :src="imageConfig.url"
					 :style="{width: imageConfig.width, height: imageConfig.height}"
					 alt="url is nofind">
		</div>
	</div>
</template>

<script>
  export default{
    props: {
      imageConfig: {
        type: Object,
        default: {}
      }
    },
    data () {
    }
  }
</script>

<style scoped>
	.box {
		width: 400px;
		height: 400px;
		border: 1px solid #ccc;
		position: relative;
	}
</style>

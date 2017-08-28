/**
* @file
* @author 何文林
* @date 2017/8/18
*/
<template>
	<div id="">
		<zoom-image :imageConfig="zoomeConfig"></zoom-image>
	</div>
</template>

<script>
  import ZoomImage from './components/zoomImage.vue'
  export default{
    components: {
      ZoomImage
    },
    data () {
      return {
        zoomeConfig: {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503047778607&di=2252deb3ec8bfb8d9a4fc14f9e8298ca&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3693414843%2C1505898903%26fm%3D214%26gp%3D0.jpg',
          width: '300px',
          height: '300px'
        }
      }
    }
  }
</script>

<style scoped>

</style>

/**
* @file
* @author 何文林
* @date 2017/9/25
*/
<template>
	<div id="">
		<table-one></table-one>
	</div>
</template>

<script>
  import tableOne from './table1.vue'
  export default{
    components: {
      tableOne
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
	@font-face {
		font-family: 'iconfont';  /* project id 421852 */
		src: url('//at.alicdn.com/t/font_421852_6k6rtn39zwha1yvi.eot');
		src: url('//at.alicdn.com/t/font_421852_6k6rtn39zwha1yvi.eot?#iefix') format('embedded-opentype'),
		url('//at.alicdn.com/t/font_421852_6k6rtn39zwha1yvi.woff') format('woff'),
		url('//at.alicdn.com/t/font_421852_6k6rtn39zwha1yvi.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_421852_6k6rtn39zwha1yvi.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: .16rem;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
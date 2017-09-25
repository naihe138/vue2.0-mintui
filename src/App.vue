<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
	body{
		margin: 0;
		padding: 0;
	}
	img {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-user-drag: none;
		user-drag: none;
		-webkit-touch-callout: none;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		position: absolute;
		width: 100%;
		top: 0;
		bottom: 0;
		overflow: hidden;
	}


</style>

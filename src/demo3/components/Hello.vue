<template>
	<div class="hello">
		<transition name="slide-fade" class="fadeView">
			<div v-if="show">
				<image-view :imgArr="imgArr"
										:showImageView="true"
										v-on:hideImage="hideImageView"
										:imageIndex="imageIndex"></image-view>
			</div>
		</transition>
		<h1 @click="showImgView">显示隐藏</h1>
		<img v-for="(item, index) in imgArr" :src="item" @click="selectImg(index)">
	</div>
</template>

<script>
  import imageView from './imageView.vue'
  export default {
    name: 'hello',
    components: {
      'image-view': imageView
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        imgArr: ['../public/img/1.jpeg', '../public/img/2.jpeg', '../public/img/2.jpeg', '../public/img/3.jpeg', '../public/img/4.jpeg', '../public/img/5.jpeg', '../public/img/6.jpeg'],
        show: false,
        imageIndex: 0
      }
    },
    methods: {
      showImgView () {
        this.show = true
      },
      hideImageView () {
        this.show = false
      },
      selectImg (index) {
        this.show = true
        this.imageIndex = index
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.slide-fade-enter-active {
		transition: opacity .5s ease;
	}

	.slide-fade-leave-active {
		transition: opacity .5s ease;
	}

	.slide-fade-enter, .slide-fade-leave-active {
		opacity: 0;
	}
	h1, h2 {
		margin: 0;
		padding: 0;
	}
	img {
		display: block;
		margin: 10px auto;
		max-width: 400px;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>

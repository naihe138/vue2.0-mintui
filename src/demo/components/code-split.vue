<template>
	<div class="hello">
		<h1 @click="showImgView">显示隐藏</h1>
		<img v-for="(item, index) in imgArr" :src="item" @click="selectImg(index)">
		<transition name="slide-fade" class="fadeView">
			<div v-if="show">
				<image-view :imgArr="imgArr"
										:showImageView="true"
										v-on:hideImage="hideImageView"
										:imageIndex="imageIndex"></image-view>
			</div>
		</transition>
	</div>
</template>

<script>
  import vueImageView from 'vue-imageview'
  export default {
    name: 'hello',
    components: {
      'image-view': vueImageView
    },
    data () {
      return {
        imgArr: ['/public/img/1.jpeg'],
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
	h1, h2 {
		font-weight: normal;
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

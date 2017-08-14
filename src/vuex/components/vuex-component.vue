/**
* @file
* @author 何文林
* @date 2017/7/10
*/
<template>
	<div id="">
		<h2>vuex example </h2>
		<div>
			商品 id:<input v-model="shopId"/>
			<br/>
			商品 名称:<input v-model="shopName"/>
			<h4 @click="addShop">添加商品</h4>
		</div>
		<hr/>
		商品列表
		<ul class="shopList">
			<li v-for="item in shopCar">
				商品 id:{{item.id}}-----------商品名称：{{item.name}}
				<span class="delete" @click="del(item.id)">X</span>
			</li>
		</ul>
		<hr/>
		<router-link to="/vuex2">to vuex 2</router-link>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        shopId: '',
        shopName: ''
      }
    },
    computed: {
      shopCar () {
        return this.$store.getters.shopCar
      }
    },
    methods: {
      addShop () {
        this.$store.dispatch('addShop', {
          id: this.shopId,
          name: this.shopName
        })
      },
      del (id) {
        this.$store.dispatch('deleShop', id).then((data) => {
          console.log(data)
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
	.shopList li {
		border-bottom: 1px dashed #ccc;
		line-height: 1.8;
		margin: 10px 0;
	}

	.delete {
		text-decoration: underline;
		padding-left: 30px;
		color: red;
		cursor: pointer;
	}
</style>

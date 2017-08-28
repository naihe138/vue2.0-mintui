/**
* @file
* @author 何文林
* @date 2017/7/10
*/
<template>
	<div slot="content" class="scroll-content">
		<div class="tabNav">
			<span v-for="(item,index) in tab" @click="selectTab(index)">{{item}}</span>
		</div>
		<div class="scrollBox">
			<scroll :listenScroll="true"
							:pullup="true"
							:pullUpLoad="pullUpLoads"
							:pullDownRefresh="true"
							@scrollToEnd="scrollToEndd"
							@pullingDown="pullingDowng"
							ref="useScroll"
							class="list-wrapper">
				<ul class="list-content">
					<li @click="clickItem($event,item)" class="list-item" v-for="item in items">{{item}}</li>
				</ul>
			</scroll>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
  import Page from './page/page.vue'
  import Scroll from './scroll-list/scrollList1.vue'
  var data0 = [
    '我是第一行',
    '我是第二行',
    '我是第三行',
    '我是第四行',
    '我是第五行',
    '我是第六行',
    '我是第七行',
    '我是第八行',
    '我是第九行',
    '我是第十行',
    '我是第十一行',
    '我是第十二行',
    '我是第十三行',
    '我是第十四行',
    '我是第十五行',
    '我是第十六行',
    '我是第十七行',
    '我是第十八行',
    '我是第十九行',
    '我是第二十行',
    '我是第二十一行',
    '我是第二十二行',
    '我是第二十三行',
    '我是第二十四行',
    '我是第二十五行',
    '我是第二十六行',
    '我是第二十七行',
    '我是第二十八行',
    '我是第二十九行'
  ];
  var data1 = [
    '我是第一行',
    '我是第二行',
    '我是第三行',
    '我是第四行',
    '我是第五行'
  ];
  var data2 = [
    '我是第二十三行',
    '我是第二十四行',
    '我是第二十五行',
    '我是第二十六行',
    '我是第二十七行',
    '我是第二十八行',
    '我是第二十九行',
    '我是第十一行',
    '我是第十二行',
    '我是第十三行',
    '我是第十四行',
    '我是第十五行',
    '我是第十六行',
    '我是第十七行',
    '我是第十八行',
    '我是第十九行',
    '我是第二十行',
    '我是第二十一行',
    '我是第二十二行',
    '我是第二十三行',
    '我是第二十四行',
    '我是第二十五行',
    '我是第二十六行',
    '我是第二十七行',
    '我是第二十八行',
    '我是第二十九行'
  ]
  export default {
    data() {
      return {
        items: data0,
        tab: ['tree', 'qweqwe', 'asdasd'],
				noData: false,
        pullUpLoads: true
      }
    },
    methods: {
      clickItem(e, item) {
        console.log(`${item} is clicked}`, e)
      },
      pullingDowng(done) {
        const _this = this
        if (this.noData) {
          _this.$refs.useScroll.noMore = true
          return
        }
        setTimeout(function () {
          _this.items.unshift(`我是${Math.random() * 10000}行`)
          _this.$refs.useScroll.updataPushDown()
        }, 1000)
      },
      scrollToEndd() {
        const _this = this
				if (this.noData) {
          _this.$refs.useScroll.noMore = true
          return
				}
        setTimeout(function () {
          _this.items.push(`我是${Math.random() * 10000}行`)
          _this.$refs.useScroll.updataPullUpLoad()
          _this.noData = true
        }, 1000)
      },
      selectTab(index) {
        var data = []
        switch (index) {
          case 0:
            data = data0;
            break;
          case 1:
            data = data1;
            break;
          case 2:
            data = data2;
            break;
        }
        this.items = data
        this.$refs.useScroll.noMore = true
        setTimeout(() => {
          this.$refs.useScroll._initScroll()
          this.$refs.useScroll.noMore = true
          this.noData = true
        }, 20)
      }
    },
    components: {
      Page,
      Scroll
    }
  }
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.scroll-content {
		height: 100%
	}

	.tabNav {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 40px;
		overflow: hidden;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid red;
	}

	.tabNav span {
		flex: 1;
		border-right: 1px solid red;
	}

	.scrollBox {
		position: absolute;
		left: 0;
		top: 41px;
		right: 0;
		bottom: 0;
		overflow: hidden;
		background: #fff
	}

	.list-wrapper {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		background: #fff
	}

	.list-content {
		position: relative;
		z-index: 10;
		background: #fff
	}

	.list-item {
		height: 60px;
		line-height: 60px;
		font-size: 18px;
		padding-left: 20px;
		border-bottom: 1px solid #e5e5e5
	}
</style>

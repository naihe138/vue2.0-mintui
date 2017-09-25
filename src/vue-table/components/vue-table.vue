/**
* @file
* @author 何文林
* @date 2017/9/20
*/
<template>
	<div id="tableComponent" ref="tableScroll">
		<!--内容 -->
		<div class="content" :style="titleFixed == 'fixed' ? {overflow: 'auto', height: scrollHight + 'px'} : {}"
				 ref="aScroll">
			<!--左边固定-->
			<div class="table-fixed-left" v-if="showSelect">
				<div class="table-header" :style="titleFixed == 'fixed' ? {width: tableContentWith + 'px', position: 'fixed',
				overflow:'hidden', zIndex: 1}: {}">
					<table cellpadding="0px" cellspacing="0px">
						<colgroup>
							<col style="width: 50px; min-width: 50px;"/>
						</colgroup>
						<thead>
						<tr :style="{height: titleHeight + 'px'}">
							<th><input type="checkbox"></th>
						</tr>
						</thead>
					</table>
				</div>
				<div class="table-body" :style="titleFixed == 'fixed' ? {paddingTop: titleHeight + 'px'} : ''">
					<table cellpadding="0px" cellspacing="0px">
						<colgroup>
							<col style="width: 50px; min-width: 50px;"/>
						</colgroup>
						<tbody>
						<tr v-for="(item, index) in tdata"
								@mouseenter="mouseEnter(index)"
								@mouseout="mouseOut(index)"
								:class="toTrClass(index)"
								:style="{height: tdHeight + 'px'}">
							<td><input type="checkbox" :value="index" v-model="checkedItem" :disabled="isDisAbled(index)"></td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!--中间滚动内容-->
			<div class="table-scroll" :class="contentClass()" ref="cScroll">
				<div class="table-header"
						 :style="titleFixed == 'fixed' ? {width: tableContentWith + 'px', position: 'fixed',overflow:'hidden'}: {}">
					<table :style="{width: setWithd}" ref="cHead">
						<colgroup>
							<col v-for="item in tcolumns" :style="{width: item.width+'px', minWidth: item.width + 'px'}"/>
						</colgroup>
						<thead>
						<tr :style="{height: titleHeight + 'px'}">
							<th v-for="item in tcolumns">{{item.title}}</th>
						</tr>
						</thead>
					</table>
				</div>
				<div class="table-body" :style="titleFixed == 'fixed' ? {paddingTop: titleHeight + 'px'} : ''">
					<table :style="{width: setWithd}">
						<colgroup>
							<col v-for="item in tcolumns" :style="{width: item.width+'px', minWidth: item.width + 'px'}"/>
						</colgroup>
						<tbody>
						<tr v-for="(dataItem, index) in tdata"
								@mouseenter="mouseEnter(index)"
								@mouseout="mouseOut(index)"
								@click="tItamClick(dataItem)"
								:class="toTrClass(index)"
								:style="{height: tdHeight + 'px'}"
						>
							<td v-for="item in tcolumns"
									:class="'text' + item.textAlign"
									v-ellipsis="dataItem[item.key] + ',' +item.textLine">{{dataItem[item.key]}}</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!--右边固定-->
			<div class="table-fixed-right" v-if="showHandle">
				<div class="table-header" :style="titleFixed == 'fixed' ? {width: tableContentWith + 'px', position: 'fixed',overflow:'hidden'}: {}">
					<table>
						<colgroup>
							<col style="width: 150px"/>
						</colgroup>
						<thead>
						<tr :style="{height: titleHeight + 'px'}">
							<th>操作</th>
						</tr>
						</thead>
					</table>
				</div>
				<div class="table-body" :style="titleFixed == 'fixed' ? {paddingTop: titleHeight + 'px'} : ''">
					<table>
						<colgroup>
							<col style="width: 150px"/>
						</colgroup>
						<tbody>
						<tr v-for="(item, index) in tdata"
								@mouseenter="mouseEnter(index)"
								@mouseout="mouseOut(index)"
								:class="toTrClass(index)"
								:style="{height: tdHeight + 'px'}"
						>
							<td :class="isDisAbled(index) ? 'textDisable' : ''">
								<slot name="operations" :item="item">
									<span>编辑</span>
									<span>删除</span>
									<span>禁用1</span>
								</slot>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<!--分页-->
		<div class="page">
			<pagination :total-page="50"
									:size="'md'"
									v-model="currentPage"
									@change="changePage"
									:max-size="5"></pagination>
		</div>

	</div>
</template>

<script>
  import Pagination from './vue-page.vue'
  export default{
    components: {
      Pagination
    },
    props: {
      tcolumns: {
        type: Array,
        default: []
      },
      tdata: {
        type: Array,
        default: []
      },
			// 显示选择空间
      showSelect: {
        type: Boolean,
        default: false
			},
			// 显示操作列表
			showHandle: {
        type: Boolean,
        default: false
			},
			// 头部是否固定
      titleFixed: {
        type: String,
        default: 'auto'
			},
      titleHeight: {
        type: Number,
        default: 40
      },
      tdHeight: {
        type: Number,
        default: 60
      },
      scrollHight: {
        type: Number,
        default: 400
			}
    },
    data() {
      return {
        hoverIndex: -1,
        checkedItem: [],
        setWithd: '1000px',
        currentPage: 1,
				// 宽度配置
				checkBoxWidth: 50,
				tableContentWith: 600,
				handleWith: 150
      }
    },
    directives: {
      ellipsis: {
        bind(el, binding) {
          let line = 1
          if (binding.value) {
            let val = (binding.value).split(',')
						line = val[1]
					}
          setTimeout(() => {
						let max = el.offsetWidth
            max = max * line
            let text = (binding.value).trim().replace(' ','　') //for fix white-space bug
            let ellipsisChar = '...'
            let clone = el.cloneNode(true)
            clone.style.visibility = 'hidden'
            clone.style.whiteSpace = 'nowrap'
            clone.style.width = 'auto'
						document.body.appendChild(clone)
            let width = clone.offsetWidth
            if(width > max){
              let stop =  Math.floor(text.length * max / width);
              let temp_str = text.substring(0,stop) + ellipsisChar;
              clone.innerHTML = temp_str
              width = clone.offsetWidth
              if(width > max){
                while (width > max && stop > 1) {
                  stop--;
                  temp_str = text.substring(0, stop) + ellipsisChar;
                  clone.innerHTML = temp_str
                  width = clone.offsetWidth
                }
              }
              else if(width < max){
                while (width < max && stop < text.length) {
                  stop++;
                  temp_str = text.substring(0, stop) + ellipsisChar;
                  clone.innerHTML = temp_str
                  width = clone.offsetWidth
                }
                if(width > max){
                  temp_str = text.substring(0,stop -1) + ellipsisChar;
                }
              }
              el.innerHTML = temp_str
            }
            document.body.removeChild(clone);
          }, 0)
				}
      }
    },
    methods: {
      mouseEnter(index) {
        this.hoverIndex = index
      },
      mouseOut(e) {
        this.hoverIndex = -1
      },
      tItamClick(item) {
        if (item.disable) {
          return
        }
        this.$emit('clickItem', item)
      },
      toTrClass(index) {
        if (this.tdata[index] && this.tdata[index].disable) {
          return 'trDisable'
        }
        if (this.hoverIndex === index) {
          return 'mouseover'
        } else {
          return ''
        }
      },
      initTableWidth() {
        const tableScroll = this.$refs.tableScroll
        let AllWidth = 0
				if (!this.showSelect) {
          this.checkBoxWidth = 0
				}
        if (!this.showHandle) {
          this.handleWith = 0
        }
        this.tableContentWith = tableScroll.offsetWidth - this.checkBoxWidth - this.handleWith
        this.tcolumns.forEach(item => {
          AllWidth += item.width
        })
				if (AllWidth > tableScroll.offsetWidth) {
          this.setWithd = AllWidth + 'px'
        } else {
          this.setWithd = '100%'
        }
      },
      isDisAbled(index) {
        return this.tdata[index] ? this.tdata[index].disable : false
      },
      changePage(page) {
        this.$emit('chagePage', page)
      },
			contentClass() {
        let str = ''
				if (this.showSelect) {
          str += 'showSelect'
				}
        if (this.showHandle) {
          str += ' showHandle '
        }
        return str
			}
    },
    mounted() {
      const _this = this
      if (this.$refs.tableScroll) {
        this.initTableWidth()
        window.addEventListener('resize', this.initTableWidth)
			} else {
        window.removeEventListener('resize', this.initTableWidth)
			}
      this.$refs.cScroll.addEventListener('scroll', (e) => {
        // console.log(e.target.scrollLeft)
				if (this.titleFixed === 'fixed') {
          _this.$refs.cHead.style.transform = 'translateX('+-(e.target.scrollLeft)+'px)'
				}
      })
    },
    destroyed() {
      window.removeEventListener('resize', this.initTableWidth)
		},
    watch: {
      checkedItem: function (val) {
        console.log(val)
      }
    }
  }
</script>

<style lang="less" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	table{
		border-collapse: collapse
	}
	td, th {
		border: 1px solid #ccc;
		box-sizing: border-box;
		background: #ffffff;
	}

	th {
		border-bottom: 0;
		text-align: center;
	}

	tr {
		box-sizing: border-box;
		overflow: hidden;
		border-right: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}

	td {
		overflow: hidden;
	}

	#tableComponent {
		width: 100%;
		overflow: hidden;
		position: relative;
		font-size: 14px;
	}

	.content {
		position: relative;
	}
	.table-fixed-left {
		position: absolute;
		left: 0;
		top: 0;
		td {
			text-align: center;
		}
	}
	.showSelect{
		margin-left: 50px;
	}
	.showHandle{
		margin-right: 150px;
	}
	.table-scroll {
		overflow: scroll;
		overflow-y: hidden;
		td, th {
			border-right: 0;
		}
		tr.textDisable {
			color: #ccc;
		}
	}

	.table-fixed-right {
		position: absolute;
		right: 0;
		top: 0;
		.table-body {
			background: #ffffff;
			td {
				text-align: center;
			}
			span {
				color: blue;
				padding: 0 5px;
				cursor: pointer;
			}
			span:hover {
				text-decoration: underline;
			}
			td.textDisable {
				color: #ccc;
				span {
					color: #ccc;
				}
			}
		}
	}

	.mouseover {
		background: #fffa00;
		color: #333;
	}

	.trDisable {
		background: #fcfcfc;
		color: #ccc;
	}

	.textleft {
		text-align: left;
	}

	.textright {
		text-align: right;
	}

	.textcenter {
		text-align: center;
	}

	.page {
		display: flex;
		justify-content: flex-end;
	}
</style>
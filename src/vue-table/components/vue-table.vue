/**
* @file
* @author 何文林
* @date 2017/9/20
*/
<template>
	<div id="tableComponent" ref="tableScroll">
		<!--内容 -->
		<div style="position: relative; overflow: auto; height: 300px" ref="aScroll">
			<!--左边固定-->
			<div class="table-fixed-left">
				<div class="table-header">
					<table cellpadding="0px" cellspacing="0px">
						<colgroup>
							<col style="width: 50px; min-width: 50px;"/>
						</colgroup>
						<thead>
						<tr>
							<th><input type="checkbox"></th>
						</tr>
						</thead>
					</table>
				</div>
				<div class="table-body">
					<table cellpadding="0px" cellspacing="0px">
						<colgroup>
							<col style="width: 50px; min-width: 50px;"/>
						</colgroup>
						<tbody>
						<tr v-for="(item, index) in tdata"
								@mouseenter="mouseEnter(index)"
								@mouseout="mouseOut(index)"
								:class="toTrClass(index)">
							<td><input type="checkbox" :value="index" v-model="checkedItem" :disabled="isDisAbled(index)"></td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!--中间滚动内容-->
			<div class="table-scroll" ref="cScroll">
				<div class="table-header" :style="{width: tableContentWith + 'px', position: 'fixed', overflow:
				'hidden'}">
					<table :style="{width: setWithd}" ref="cHead">
						<colgroup>
							<col v-for="item in tcolumns" :style="{width: item.width+'px', minWidth: item.width + 'px'}"/>
						</colgroup>
						<thead>
						<tr>
							<th v-for="item in tcolumns">{{item.title}}</th>
						</tr>
						</thead>
					</table>
				</div>
				<div class="table-body" style="padding-top: 60px">
					<table :style="{width: setWithd}">
						<colgroup>
							<col v-for="item in tcolumns" :style="{width: item.width+'px', minWidth: item.width + 'px'}"/>
						</colgroup>
						<tbody>
						<tr v-for="(dataItem, index) in tdata"
								@mouseenter="mouseEnter(index)"
								@mouseout="mouseOut(index)"
								@click="tItamClick(dataItem)"
								:class="toTrClass(index)">
							<td v-for="item in tcolumns"
									:class="'text' + item.textAlign"
									v-ellipsis="dataItem[item.key] + ',' +item.textLine">{{dataItem[item.key]}}</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!--右边固定-->
			<div class="table-fixed-right">
				<div class="table-header">
					<table>
						<colgroup>
							<col style="width: 150px"/>
						</colgroup>
						<thead>
						<tr>
							<th>操作</th>
						</tr>
						</thead>
					</table>
				</div>
				<div class="table-body">
					<table>
						<colgroup>
							<col style="width: 150px"/>
						</colgroup>
						<tbody>
						<tr v-for="(item, index) in tdata"
								@mouseenter="mouseEnter(index)"
								@mouseout="mouseOut(index)"
								:class="toTrClass(index)">
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
        this.tableContentWith = tableScroll.offsetWidth - this.checkBoxWidth - this.handleWith
				console.log(this.tableContentWith)
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
        console.log(e.target.scrollLeft)
        _this.$refs.cHead.style.transform = 'translateX('+-(e.target.scrollLeft)+'px)'
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
	}

	th {
		border-bottom: 0;
		text-align: center;
	}

	tr {
		height: 60px;
		box-sizing: border-box;
		overflow: hidden;
	}

	td {
		height: 60px;
		overflow: hidden;
	}

	#tableComponent {
		width: 100%;
		overflow: hidden;
		position: relative;
		font-size: 14px;
	}

	.table-fixed-left {
		position: absolute;
		left: 0;
		top: 0;
		td {
			text-align: center;
		}
	}

	.table-scroll {
		margin-left: 50px;
		margin-right: 150px;
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
/**
* @file
* @author 何文林
* @date 2017/8/18
*/
<template>
	<div id="">
		<!--<aear-select :show="show"-->
								 <!--v-on:cancel="close"-->
								 <!--v-on:confirm="confirmFn"></aear-select>-->
		<!--<time-select :show="timeShow"-->
								 <!--:timeDate="time"-->
								 <!--v-on:cancel="close"-->
								 <!--v-on:confirm="confirmFn"></time-select>-->
		<p class="btn" @click="example1">单列picker</p>
		<p class="btn" @click="example2">双列 picker</p>
		<p class="btn" @click="example3">联动picker</p>
		<p class="btn" @click="example4">地区联动picker</p>
		<all-select :show="show1"
								 :selectData="pickData1"
								 v-on:cancel="close"
								 v-on:confirm="confirmFn"></all-select>
	</div>
</template>

<script>
//  import AearSelect from './components/aearSelect.vue'
//  import TimeSelect from './components/timeSelect.vue'
  import AllSelect from './components/allSelect.vue'
  import {provs_data, citys_data, dists_data} from './components/LAreaData2'
  export default{
    components: {
//      AearSelect,
//      TimeSelect,
      AllSelect
    },
    data () {
      return {
        show: false,
        show1: false,
        timeShow: true,
        pickData: {},
        pickData1: {
          columns: 1,
          pData1: [
            {
              text: 1999,
              value: 1999
            },
            {
              text: 2001,
              value: 2001
            },
            {
              text: 2002,
              value: 2002
            },
            {
              text: 2003,
              value: 2003
            },
            {
              text: 2004,
              value: 2004
            },
            {
              text: 2005,
              value: 2005
            },
          ]
        },
				pickData2: {
          columns: 2,
					link: true,
          pData1: [
            {
              text: '数码',
              value: 1999
            },
            {
              text: '水果',
              value: 2001
            },
            {
              text: '衣服',
              value: 2002
            }
          ],
          pData2: {
            '1999': [
							{
                text: '相机',
                value: 101
							},
              {
                text: '手机',
                value: 102
              },
              {
                text: '音箱',
                value: 103
              }
						],
            '2001': [
              {
                text: '苹果',
                value: 104
              },
              {
                text: '香蕉',
                value: 105
              },
              {
                text: '西红柿',
                value: 106
              }
            ],
            '2002': [
              {
                text: '衬衫',
                value: 107
              },
              {
                text: '短裤',
                value: 108
              },
              {
                text: '上衣',
                value: 109
              }
            ]
					}
				},
        pickData3: {
          columns: 3,
          link: true,
					pData1: provs_data,
          pData2: citys_data,
          pData3: dists_data,
				},
        pickData4: {
          columns: 2,
          pData1: [
            {
              text: '上午',
              value: 1999
            },
            {
              text: '下午',
              value: 2001
            }
          ],
          pData2: [
            {
              text: '1',
              value: 1
            },
            {
              text: '2',
              value: 2
            },
            {
              text: '3',
              value: 3
            },
            {
              text: '4',
              value: 4
            },
            {
              text: '5',
              value: 5
            },
            {
              text: '6',
              value: 6
            }
          ]
        },
        pickData5: {
          columns: 3,
          pData1: [
            {
              text: 1999,
              value: 1999
            },
            {
              text: 2001,
              value: 2001
            },
            {
              text: 2002,
              value: 2002
            },
            {
              text: 2003,
              value: 2003
            },
            {
              text: 2004,
              value: 2004
            },
            {
              text: 2005,
              value: 2005
            },
          ],
          pData2: [
            {
              text: 1,
              value: 1
            },
            {
              text: 2,
              value: 2
            },
            {
              text: 3,
              value: 3
            },
            {
              text: 4,
              value: 4
            },
            {
              text: 5,
              value: 5
            },
            {
              text: 6,
              value: 6
            },
          ],
          pData3: [
            {
              text: 1,
              value: 1
            },
            {
              text: 2,
              value: 2
            },
            {
              text: 3,
              value: 3
            },
            {
              text: 4,
              value: 4
            },
            {
              text: 5,
              value: 5
            },
            {
              text: 6,
              value: 6
            },
          ]
        },
      }
    },
    methods: {
      open() {
        this.timeShow = true
      },
      close() {
        this.timeShow = false
      },
      confirmFn(data) {
        console.log(data)
      },
      example1() {
        this.pickData = this.pickData1
      },
      example2() {
        this.pickData = this.pickData2
      },
      example3() {
        this.pickData = this.pickData3
      },
      example4() {
        this.pickData = this.pickData4
      }
    }
  }
</script>

<style scoped>

</style>

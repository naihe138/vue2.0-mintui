/**
* @file
* @author 何文林
* @date 2017/9/22
*/
<template>
	<div style="width: 1000px; margin: 100px auto">
		<vue-table :tdata="tableData" :tcolumns="tableColumns" v-on:clickItem="tableSelectItem">
			<template slot="operations" scope="scope">
				<span @click="edit(scope.item)">编辑</span>
				<span @click="edit(scope.item)">删除</span>
				<span @click="edit(scope.item)">禁用1</span>
			</template>
		</vue-table>
	</div>
</template>

<script>
	import vueTable from './components/vue-table.vue'
  const tabledata = [
    {
      number: Math.ceil(Math.random() * 10000) * Math.ceil(Math.random() * 10000),
      name: '张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三',
      type: '杀虫剂',
      brand: '田田云',
      disable: false
    },
    {
      number: Math.ceil(Math.random() * 10000) * Math.ceil(Math.random() * 10000),
      name: '张三',
      type: '杀虫剂',
      brand: '田田云',
      disable: false
    },
    {
      number: Math.ceil(Math.random() * 10000) * Math.ceil(Math.random() * 10000),
      name: '张三',
      type: '杀虫剂',
      brand: '田田云',
      disable: false
    },
    {
      number: Math.ceil(Math.random() * 10000) * Math.ceil(Math.random() * 10000),
      name: '张三',
      type: '杀虫剂',
      brand: '田田云',
      disable: true
    },
    {
      number: Math.ceil(Math.random() * 10000) * Math.ceil(Math.random() * 10000),
      name: '张三',
      type: '杀虫剂',
      brand: '田田云',
      disable: true
    },
    {
      number: Math.ceil(Math.random() * 10000) * Math.ceil(Math.random() * 10000),
      name: '张三',
      type: '杀虫剂',
      brand: '田田云',
      disable: true
    },
    {
      number: Math.ceil(Math.random() * 10000) * Math.ceil(Math.random() * 10000),
      name: '张三',
      type: '杀虫剂',
      brand: '田田云',
      disable: true
    }
  ]
  const columns = [
    {
      title: '商品编号',
      key: 'number',
      width: 150,
      textAlign: 'center'
    },
    {
      title: '商品名称',
      key: 'name',
      width: 250,
      textAlign: 'left',
      textLine: 2
    },
    {
      title: '商品类别',
      key: 'type',
      width: 150,
      textAlign: 'right'
    },
    {
      title: '品牌',
      key: 'brand',
      width: 150,
      textAlign: 'center'
    },
    {
      title: '规格',
      key: 'brand',
      width: 150,
      textAlign: 'left'
    },
    {
      title: '零售价',
      key: 'brand',
      width: 150,
      textAlign: 'left'
    },
    {
      title: '基本单位',
      key: 'brand',
      width: 150,
      textAlign: 'left'
    },
    {
      title: '测试测试',
      key: 'brand',
      width: 150,
      textAlign: 'left'
    }
  ]
  export default{
	  components: {
      vueTable
		},
		data() {
	    return {
        tableData: tabledata,
        tableColumns: columns
			}
		},
		methods: {
      tableSelectItem(e) {
        console.log(e)
			},
      edit(data) {
        console.log(data)
			}
		}
	};
</script>

<style lang="less" rel="stylesheet/less">

</style>
/**
* @file
* @author 何文林
* @date 2017/9/22
*/
<template>
	<div style="width: 800px; margin: 100px auto; overflow: hidden; position: relative">
		<vue-table :tdata="tableData"
							 :tcolumns="tableColumns"
							 :showSelect="tableSelect"
							 :showHandle="tableHandle"
							 :titleFixed="titleFixed"
							 :titleHeight="titleHeight"
							 :tdHeight="tdHeight"
							 :scrollHight="scrollHight"
							 :selectFixed="selectFixed"
							 :handleFixed="handleFixed"
							 :page="page"
							 v-on:clickItem="tableSelectItem"
							 v-on:changePage="changePage">
			<template slot="operations" scope="scope">
				<span @click="edit(scope.item)">编辑</span>
				<span @click="edit(scope.item)">删除</span>
				<span @click="edit(scope.item)">禁用</span>
			</template>
		</vue-table>
	</div>
</template>

<script>
  import vueTable from './components/vue-table.vue'
	import checkBox from './components/checkbox.vue'
  import tabledata from './data'
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
      textLine: 2,
			selectText: true
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
      vueTable,
      checkBox
    },
    data() {
      return {
        tableData: tabledata,
        tableColumns: columns,
				tableSelect: true,
        tableHandle: true,
        titleFixed: 'auto',
				titleHeight: 32,
				tdHeight: 50,
				scrollHight: 400,
				selectFixed: true,
        handleFixed: true,
				page: {
          totalPage: 50,
          maxSize: 5
				}
      }
    },
    methods: {
      tableSelectItem(e) {
        console.log(e)
      },
      edit(data) {
        console.log(data)
      },
      changePage(index) {
        console.log(index)
			}
    }
  };
</script>

<style lang="less" rel="stylesheet/less">

</style>
/**
* @file 表格组件 应用实例
* @author 何文林
* @date 2017/9/27
*/
<template>
	<div class="container-fluid">
		<div class="vue-table">vue-table</div>
		<section class="panel panel-default">
			<div class="panel-heading">最基础形态小表格</div>
			<div class="panel-body">
				<div style="width: 800px">
					<tty-table :tdata="tableData"
										 :tcolumns="tableColumns"
										 :showHandle="true"
										 :tdHeight="40"
										 v-on:clickItem="tableSelectItem">
						<template slot="operations" scope="scope">
							<span @click="edit(scope.item)">编辑</span>
							<span @click="edit(scope.item)">删除</span>
							<span @click="edit(scope.item)">禁用</span>
						</template>
					</tty-table>
				</div>
			</div>
		</section>
		<!--左右固定-->
		<section class="panel panel-default">
			<div class="panel-heading">左右固定形态表格</div>
			<div class="panel-body">
				<div>
					<tty-table :tdata="tableData2"
										 :tcolumns="tableColumns2"
										 :showSelect="true"
										 :showHandle="true"
										 :selectFixed="true"
										 :handleFixed="true"
										 :page="page"
										 v-on:clickItem="tableSelectItem"
										 v-on:changePage="changePage">
						<template slot="operations" scope="scope">
							<span @click="edit(scope.item)">编辑</span>
							<span @click="edit(scope.item)">删除</span>
							<span @click="edit(scope.item)">禁用</span>
						</template>
					</tty-table>
				</div>
			</div>
		</section>
		<!--左边选择固定-->
		<section class="panel panel-default">
			<div class="panel-heading">左边选择固定</div>
			<div class="panel-body">
				<div>
					<tty-table :tdata="tableData2"
										 :tcolumns="tableColumns2"
										 :showSelect="true"
										 :showHandle="true"
										 :selectFixed="true"
										 :handleFixed="false"
										 :page="page"
										 v-on:clickItem="tableSelectItem"
										 v-on:changePage="changePage">
						<template slot="operations" scope="scope">
							<span @click="edit(scope.item)">编辑</span>
							<span @click="edit(scope.item)">删除</span>
							<span @click="edit(scope.item)">禁用</span>
						</template>
					</tty-table>
				</div>
			</div>
		</section>
		<!--右边操作固定,右边不固定-->
		<section class="panel panel-default">
			<div class="panel-heading">右边操作固定,左边不固定</div>
			<div class="panel-body">
				<div>
					<tty-table :tdata="tableData2"
										 :tcolumns="tableColumns2"
										 :showSelect="true"
										 :showHandle="true"
										 :selectFixed="false"
										 :handleFixed="true"
										 :page="page"
										 v-on:clickItem="tableSelectItem"
										 v-on:changePage="changePage">
						<template slot="operations" scope="scope">
							<span @click="edit(scope.item)">编辑</span>
							<span @click="edit(scope.item)">删除</span>
							<span @click="edit(scope.item)">禁用</span>
						</template>
					</tty-table>
				</div>
			</div>
		</section>
		<!--左右不固定 上下固定-->
		<section class="panel panel-default">
			<div class="panel-heading">左右不固定 头部固定</div>
			<div class="panel-body">
				<div>
					<tty-table :tdata="tableData2"
										 :tcolumns="tableColumns2"
										 :showSelect="true"
										 :showHandle="false"
										 :titleFixed="'fixed'"
										 :scrollHight="300"
										 :selectFixed="false"
										 :handleFixed="false"
										 :page="page"
										 v-on:clickItem="tableSelectItem"
										 v-on:changePage="changePage">
						<template slot="operations" scope="scope">
							<span @click="edit(scope.item)">编辑</span>
							<span @click="edit(scope.item)">删除</span>
							<span @click="edit(scope.item)">禁用</span>
						</template>
					</tty-table>
				</div>
			</div>
		</section>
		<!--左边固定 上下固定-->
		<section class="panel panel-default">
			<div class="panel-heading">左边固定 头部固定</div>
			<div class="panel-body">
				<div>
					<tty-table :tdata="tableData2"
										 :tcolumns="tableColumns2"
										 :showSelect="true"
										 :showHandle="false"
										 :titleFixed="'fixed'"
										 :scrollHight="300"
										 :selectFixed="true"
										 :handleFixed="false"
										 :page="page"
										 v-on:clickItem="tableSelectItem"
										 v-on:changePage="changePage">
						<template slot="operations" scope="scope">
							<span @click="edit(scope.item)">编辑</span>
							<span @click="edit(scope.item)">删除</span>
							<span @click="edit(scope.item)">禁用</span>
						</template>
					</tty-table>
				</div>
			</div>
		</section>
		<!--右边边固定 上下固定-->
		<section class="panel panel-default">
			<div class="panel-heading">右边固定 头部固定</div>
			<div class="panel-body">
				<div>
					<tty-table :tdata="tableData2"
										 :tcolumns="tableColumns2"
										 :showSelect="false"
										 :showHandle="true"
										 :titleFixed="'fixed'"
										 :scrollHight="300"
										 :selectFixed="false"
										 :handleFixed="true"
										 :page="page"
										 v-on:clickItem="tableSelectItem"
										 v-on:changePage="changePage">
						<template slot="operations" scope="scope">
							<span @click="edit(scope.item)">编辑</span>
							<span @click="edit(scope.item)">删除</span>
							<span @click="edit(scope.item)">禁用</span>
						</template>
					</tty-table>
				</div>
			</div>
		</section>
		<!--右边边固定 上下固定-->
		<section class="panel panel-default">
			<div class="panel-heading">左右固定 头部固定</div>
			<div class="panel-body">
				<div>
					<tty-table :tdata="tableData2"
										 :tcolumns="tableColumns2"
										 :showSelect="true"
										 :showHandle="true"
										 :titleFixed="'fixed'"
										 :scrollHight="300"
										 :selectFixed="true"
										 :handleFixed="true"
										 :page="page"
										 v-on:clickItem="tableSelectItem"
										 v-on:changePage="changePage">
						<template slot="operations" scope="scope">
							<span @click="edit(scope.item)">编辑</span>
							<span @click="edit(scope.item)">删除</span>
							<span @click="edit(scope.item)">禁用</span>
						</template>
					</tty-table>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ttyTable from './components/vue-table.vue'
  import tableData from './data'
  const columns1 = [
    {
      title: '机构编号',
      key: 'number',
      width: 85,
      textAlign: 'left'
    },
    {
      title: '机构名称',
      key: 'name',
      width: 292,
      textAlign: 'left',
      textLine: 2,
      selectText: true
    },
    {
      title: '类型',
      key: 'type',
      width: 180,
      textAlign: 'center'
    },
    {
      title: '状态',
      key: 'brand',
      width: 82,
      textAlign: 'center'
    }
  ]
  const columns2 = [
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
      width: 180,
      textAlign: 'center'
    },
    {
      title: '规格',
      key: 'specifications',
      width: 150,
      textAlign: 'left'
    },
    {
      title: '零售价',
      key: 'retailPrice',
      width: 150,
      textAlign: 'left'
    },
    {
      title: '基本单位',
      key: 'unit',
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
      ttyTable
    },
    data() {
      return {
        tableData: tableData.data1,
        tableColumns: columns1,
        tableColumns2: columns2,
        tableData2: tableData.data2,
        page: {
          totalPage: 50,
          maxSize: 5
        }
      }
    },
    methods: {
      tableSelectItem() {
        console.log(123)
      },
      edit(e) {
        console.log(e)
      },
      changePage(e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="less" scoped>
	.vue-table{
		width: 100%;
		height: 200px;
		line-height: 200px;
		background: #2fc6ff;
		font-size: 40px;
		color: #fff;
	}
	.panel{
		width: 1200px;
		margin: 20px auto;
		border: 1px solid #ddd;
		border-radius: 4px;
	}
	.panel-heading{
		background: #f5f5f5;
		height: 40px;
		line-height: 40px;
		text-align: left;
		text-indent: 20px;
		font-weight: bold;
	}
	.panel-body{
		box-sizing: border-box;
		padding: 20px;
	}
</style>
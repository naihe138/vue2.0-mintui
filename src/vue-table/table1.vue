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
			<div class="panel-heading">左右不固定 头部固定</div>
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
		<a href="https://your-url" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
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
	.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
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
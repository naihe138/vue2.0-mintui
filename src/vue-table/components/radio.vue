/**
* @file
* @author 何文林
* @date 2017/9/26
*/
<template>
	<div class="checkwramp" :class="isTrue ? 'active' : ''">
		<i class="checkbox iconfont"></i>
		<slot></slot>
	</div>
</template>

<script>
  export default{
    props: {
      isTrue: {
        type: Boolean,
				default: false
			},
      isDisable: {
        type: Boolean,
        default: false
      }
		}
	}
</script>

<style lang="less" scoped>
	.checkwramp{
		display: flex;
		align-items: center;
	}
	.checkwramp.active{
		color: #1caf4c;
		i{
			border-color: #1caf4c;
			display: flex;
			justify-content: center;
			align-items: center;
			&:after{
				content: '';
				display: block;
				width: 8px;
				height: 8px;
				background: #1caf4c;
				border-radius: 8px;
			}
		}
	}
	.checkbox{
		width: 16px;
		height: 16px;
		border: 1px solid #7b7b7b;
		text-align: center;
		line-height: 15px;
		font-size: 12px;
		border-radius: 10px;
		cursor: pointer;
		display: inline-block;
		overflow: hidden;
		box-sizing: border-box;
		background: #ffffff;
		margin-right: 5px;
	}
	.checkbox:hover{
		color: #1caf4c;
		border-color: #1caf4c;
	}
</style>
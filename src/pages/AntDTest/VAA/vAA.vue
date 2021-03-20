<template>

	<div>
		<h4>全局状态管理</h4>
		<p />第一步：在src/store/modules建立一个模型
		<p />第二步 index.js统一暴露
		<p />第三步 引用
		<p />1引入mapGetters和mapMutations
		<p />2在computed中引入getter用于读取状态数据
		<p />3在methods中引入mutations用于改变状态数据
		<p />4在需要的地方使用
		<p />
		<a-button @click="btn1">Mutations</a-button>{{test}}
	</div>
</template>

<script>
	//1引入mapGetters和mapMutations
	import {
		mapGetters,
		mapMutations
	} from 'vuex'

	export default {
		name: 'vAA',
		data() {
			return {
				testList:[]
			}
		},
		//2在computed中引入getter用于读取状态数据
		computed: {
			...mapGetters("testModel", ["test"]),
		},
		methods: {
			//3在methods中引入mutations用于改变状态数据
			...mapMutations("testModel", ["setTest"]),
			//4在需要的地方使用
			btn1() {
				//用mutations设定值
				this.testList.push("aaa")
				this.setTest(this.testList)
				console.log(this.test)
			}
		}
	}
</script>

<style scoped lang="less">

</style>

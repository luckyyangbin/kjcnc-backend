<template>

	<div>

		<a-button @click="btn1">读取数据库</a-button>
		<a-button @click="btn2">Axios测试</a-button>
	</div>
</template>

<script>
	import {
		testAxio
	} from '@/services/test'
	const BASE_URL = "https://ytkjcnc-3gpkm1l22fe42211-1255597613.ap-shanghai.service.tcloudbase.com/api/v1.0/";
	export default {
		name: 'tCB',
		data() {
			return {
				testList: [],
				testString: "",
				BASE_URL,
			}
		},

		computed: {},
		methods: {
			//读取数据库
			btn1() {
				console.log("读取数据库")
				this.$cloudbase.database().collection('d_latheTypeAll')
					.get().then(res => {
						console.log(res)
					})
			},
			//Axios测试
			btn2() {
				console.log("Axios测试")
				testAxio().then(res=>{console.log(res.data)})
			},
		},
		created() {
			//TCB登录
			this.$cloudbase
				.auth()
				.signInWithEmailAndPassword("330339830@qq.com", "Aa6715443")
				.then((loginState) => {
					console.log("登录成功", loginState.user)
				}).catch(err => {
					console.log("登录失败", err)
				})
		}
	}
</script>

<style scoped lang="less">

</style>

<template>
	<div>

		<a-radio-group button-style="solid" v-model="type">
			<a-radio-button v-for="item in buttonList" :value="item">
				{{item}}
			</a-radio-button>

		</a-radio-group>
		<a-button @click="btn1">button</a-button>
	</div>
</template>

<script>
	export default {
		name: 'javaScript',
		data() {
			return {
				buttonList: ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'a', 'b', 'e', ],
				type: "e"
			}
		},
		computed: {

		},
		methods: {
			btn1() {
				console.log('444')
			}
		}
	}
</script>

<style scoped lang="less">
	@import "index";
</style>

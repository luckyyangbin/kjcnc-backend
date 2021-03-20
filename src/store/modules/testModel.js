export default {
	namespaced: true,
	state: {
		test: []
	},
	getters: {
		test: state => {
			return state.test
		}
	},
	mutations: {
		setTest(state, value) {
			state.test = value
		}
	}
}

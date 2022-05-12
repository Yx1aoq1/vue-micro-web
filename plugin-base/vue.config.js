const { defineConfig } = require('@vue/cli-service')

const PROXY = {
	'^/module-one': {
		target: 'http://127.0.0.1:8090'
	}
}

module.exports = defineConfig({
	transpileDependencies: true,

	devServer: {
		port: 8080,
		proxy: PROXY
	}
})

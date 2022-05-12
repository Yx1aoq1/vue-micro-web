const { defineConfig } = require('@vue/cli-service')
const APP_NAME = require('./package.json').name
const NODE_ENV = process.env.NODE_ENV || 'development'
const path = require('path')

function resolve (dir) {
	return path.join(__dirname, dir)
}

module.exports = defineConfig({
	productionSourceMap: false,

	publicPath: `${NODE_ENV === 'development' ? '' : '.'}/${APP_NAME}/`,

	css: {
		extract: false
	},

	chainWebpack: config => {
		config.resolve.alias.set('@', resolve('src'))

		config.externals({
			vue: 'Vue'
		})

		config.output
			.filename('main.js')
			.chunkFilename('[name].[chunkhash:8].js')
			.library(`app-${APP_NAME}`)
			.libraryExport('default')
			.libraryTarget('umd')

		config.optimization.splitChunks(false)

		config.plugins.delete('html').delete('preload').delete('prefetch')
	},

	devServer: {
		port: 8090,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	}
})

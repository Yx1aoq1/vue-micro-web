import VueRouter from 'vue-router'
import ControlMainLayout from '../layout/ControlMainLayout'
import { modules } from './modules'

const routes = [
	{
		path: '/',
		redirect: 'console'
	},
	{
		path: '/console',
		name: 'CONTROL',
		component: ControlMainLayout,
		children: [
			{
				path: '',
				redirect: 'module-one'
			}
		]
	}
]

const routerInstance = new VueRouter({
	mode: 'history',
	routes
})

const cachedModules = new Set()
// 拦截处理
routerInstance.beforeEach(async (to, from, next) => {
	console.log('entry:', to.path, from.path)

	const [ , , module ] = to.path.split('/')

	console.log(modules[module])

	if (!modules[module]) {
		return next()
	}

	if (cachedModules.has(module)) {
		return next()
	}
	const { default: application } = await window.System.import(modules[module])
	if (application && application.routes && application.routes.length) {
		const routes = routerInstance.options.routes || []
		const rootRoutes = routes.find(r => r.name === application.type)
		if (rootRoutes) {
			!rootRoutes.children && (rootRoutes.children = [])
			if (!rootRoutes.children.length) {
				const route = application.routes[0]
				rootRoutes.children.push({
					path: '',
					redirect: route.name
				})
			}
			application.routes.forEach(route => rootRoutes.children.push(route))
			routerInstance.addRoutes([ rootRoutes ]) // 动态添加子项目的 routes
		}
	}

	application && application.init && (await application.init({})) // 子项目初始化

	cachedModules.add(module)

	console.log(application)
	next(to.path)
})

export default routerInstance

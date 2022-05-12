const App = () => import('@/App.vue')
const HelloWorld = () => import('@/components/HelloWorld.vue')

export default [
	{
		path: 'module-one',
		name: 'module-one',
		component: App,
		children: [
			{
				path: '',
				redirect: 'hello'
			},
			{
				path: 'hello',
				name: 'module-one.HELLO',
				component: HelloWorld
			}
		]
	}
]

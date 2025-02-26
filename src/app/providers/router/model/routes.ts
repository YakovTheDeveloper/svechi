import { CleanLayout } from '@/app/layouts'
import { AppRoutes } from './types.ts'

let routes = [
	{
		path: AppRoutes.HOME,
		name: 'home',
		component: () => import('@/pages/home-page'),
		meta: {
			layout: CleanLayout,
		},
	},

	{
		path: '/:pathMatch(.*)',
		component: () => import('@/pages/not-found'),
		meta: {
			layout: CleanLayout,
		},
	},
]

if (window.MODE === 'DEV') {
	//@ts-ignore
	routes = [...routes]
}

export { routes }


import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'

import { useAuth } from 'src/composables/auth';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */


function passRouteToProps(route){
	return {
		queryParams: route.query,
		fieldName: route.params.fieldName, 
		fieldValue: route.params.fieldValue
	}
}


let routes = [{
	name: 'main',
	path: '/',
	component: () => import('layouts/MainLayout.vue'),
	children: [
		//Dashboard routes


//permissions routes
		{
			path: '/permissions/:fieldName?/:fieldValue?',
			name: 'permissionslist',
			component: () => import('pages/permissions/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/permissions/view/:id', 
			name: 'permissionsview', 
			component: () => import('pages/permissions/view.vue'), 
			props: true 
		},
		{ 
			path: '/permissions/add', 
			name: 'permissionsadd', 
			component: () => import('pages/permissions/add.vue'), 
			props: true 
		},
		{ 
			path: '/permissions/edit/:id', 
			name: 'permissionsedit', 
			component: () => import('pages/permissions/edit.vue'), 
			props: true 
		},

//productos routes
		{
			path: '/productos/:fieldName?/:fieldValue?',
			name: 'productoslist',
			component: () => import('pages/productos/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/productos/view/:id', 
			name: 'productosview', 
			component: () => import('pages/productos/view.vue'), 
			props: true 
		},
		{ 
			path: '/productos/add', 
			name: 'productosadd', 
			component: () => import('pages/productos/add.vue'), 
			props: true 
		},
		{ 
			path: '/productos/edit/:id', 
			name: 'productosedit', 
			component: () => import('pages/productos/edit.vue'), 
			props: true 
		},

//proveedores routes
		{
			path: '/proveedores/:fieldName?/:fieldValue?',
			name: 'proveedoreslist',
			component: () => import('pages/proveedores/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/proveedores/view/:id', 
			name: 'proveedoresview', 
			component: () => import('pages/proveedores/view.vue'), 
			props: true 
		},
		{ 
			path: '/proveedores/add', 
			name: 'proveedoresadd', 
			component: () => import('pages/proveedores/add.vue'), 
			props: true 
		},
		{ 
			path: '/proveedores/edit/:id', 
			name: 'proveedoresedit', 
			component: () => import('pages/proveedores/edit.vue'), 
			props: true 
		},

//roles routes
		{
			path: '/roles/:fieldName?/:fieldValue?',
			name: 'roleslist',
			component: () => import('pages/roles/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/roles/view/:id', 
			name: 'rolesview', 
			component: () => import('pages/roles/view.vue'), 
			props: true 
		},
		{ 
			path: '/roles/add', 
			name: 'rolesadd', 
			component: () => import('pages/roles/add.vue'), 
			props: true 
		},
		{ 
			path: '/roles/edit/:id', 
			name: 'rolesedit', 
			component: () => import('pages/roles/edit.vue'), 
			props: true 
		},

//tallas routes
		{
			path: '/tallas/:fieldName?/:fieldValue?',
			name: 'tallaslist',
			component: () => import('pages/tallas/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/tallas/view/:id', 
			name: 'tallasview', 
			component: () => import('pages/tallas/view.vue'), 
			props: true 
		},
		{ 
			path: '/tallas/add', 
			name: 'tallasadd', 
			component: () => import('pages/tallas/add.vue'), 
			props: true 
		},
		{ 
			path: '/tallas/edit/:id', 
			name: 'tallasedit', 
			component: () => import('pages/tallas/edit.vue'), 
			props: true 
		},

//users routes
		{
			path: '/users/:fieldName?/:fieldValue?',
			name: 'userslist',
			component: () => import('pages/users/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/users/view/:id', 
			name: 'usersview', 
			component: () => import('pages/users/view.vue'), 
			props: true 
		},
		{ 
			path: '/index/register', 
			name: 'usersuserregister', 
			component: () => import('pages/index/userregister.vue'), 
			props: true 
		},
		{ 
			path: '/account/edit', 
			name: 'usersaccountedit', 
			component: () => import('pages/account/accountedit.vue'), 
			props: true 
		},
		{ 
			path: '/account', 
			name: 'usersaccountview', 
			component: () => import('pages/account/accountview.vue'), 
			props: true 
		},
		{ 
			path: '/users/add', 
			name: 'usersadd', 
			component: () => import('pages/users/add.vue'), 
			props: true 
		},
		{ 
			path: '/users/edit/:id', 
			name: 'usersedit', 
			component: () => import('pages/users/edit.vue'), 
			props: true 
		},

		
		
//Password reset routes
		{ 
			path: '/index/forgotpassword', 
			name: 'forgotpassword', 
			component: () => import('pages/index/forgotpassword.vue') 
		},
		{ 
			path: '/index/resetpassword', 
			name: 'resetpassword', 
			component: () => import('pages/index/resetpassword.vue') 
		},
		{ 
			path: '/index/resetpassword_completed', 
			name: 'resetpassword_completed', 
			component: () => import('pages/index/resetpassword_completed.vue') 
		},
		
		

		//Error pages
		{ path:  '/error/forbidden', name: 'forbidden',  component: () => import('pages/errors/forbidden.vue') },
		{ path: '/error/notfound',  name: 'notfound', component: () => import('pages/errors/pagenotfound.vue') }
	],
	
	},
	{ path: '/:catchAll(.*)*', component: () => import('pages/errors/pagenotfound.vue') }
];

export default route(async function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE == 'history' ? createWebHistory : createWebHashHistory)
	
	const mainRoute = routes.find(x => x.name = "main");
	
	const auth = useAuth();

	
	//get current user data from api on first load
	const { user } = await auth.getUserData();
	if(user){
		const homeRoute = {
			path: '/', 
			alias: '/home', 
			name: 'home', 
			component: () => import('pages/home/home.vue') 
		}
		mainRoute.children.push(homeRoute);
	}
	else{
		const indexRoute = { 
			path: '/',  
			alias: '/home', 
			name: 'index', 
			component: () => import('pages/index/index.vue') 
		}
		mainRoute.children.push(indexRoute);
	}

	const Router = createRouter({
	scrollBehavior(to, from, savedPostion){
		if(savedPostion) return savedPostion;
		return { top:0 }
	},
    routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  return Router
})


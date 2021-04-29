import { ComponentType, lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from '@ant-design/pro-layout/lib/typings';
import type {RouteProps} from 'react-router-dom';
import { SmileOutlined } from '@ant-design/icons';
export interface RouteConfig extends Route{
	auth?: boolean
	permissionKey?: string
    component: ComponentType<{
		routes?: RouteConfig[]
	}>
}

const routes:(RouteConfig & Omit<RouteProps,'component'>)[]= [
	{
		path:'/',
		auth:true,
		component: () => <Redirect from="/" to="/article" />
	},
	{
		path:'/article',
		name:'文章管理',
		auth:true,
		icon: <SmileOutlined/>,
		component:lazy(()=>import('@/pages/article')),
		exact:true,
		children:[
			{
				path:'detail',
				name:'文章详情',
				auth:true,
				component:lazy(()=>import('@/pages/article/detail'))
			},
			{
				path:'edit',
				name:'文章编辑',
				auth:true,
				component:lazy(()=>import('@/pages/article/edit'))
			}
		]
	},
	{
		path:'/user',
		name:'用户管理',
		auth:true,
		icon: <SmileOutlined/>,
		component:lazy(()=>import('@/pages/user')),
		exact:true,
	},
	{
		auth:true,
		path:'/login',
		name:'登陆',
		hideInMenu:true,
		exact:true,
		component:lazy(()=>import('@/pages/login')),
	},
	
];
export default routes;
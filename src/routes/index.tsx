import { ComponentType, lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from '@ant-design/pro-layout/lib/typings';
import { SmileOutlined } from '@ant-design/icons';
interface RouteConfig extends Route{
	auth?: boolean
	permissionKey?: string
    component: ComponentType<{
		routes?: RouteConfig[]
	}>
}

const routes:RouteConfig[]= [
	{
		path:'/',
		component: () => <Redirect from="/" to="/article" />
	},
	{
		path:'/article',
		name:'文章管理',
		icon: <SmileOutlined/>,
		component:lazy(()=>import('@/pages/article')),
		exact:true
	},
	{
		path:'/login',
		name:'登陆',
		hideInMenu:true,
		exact:true,
		component:lazy(()=>import('@/pages/login')),
	}
];
export default routes;
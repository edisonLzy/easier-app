import BasicLayout from './basicLayout';
import { Button, Result } from 'antd';
import routes from '@/routes';
import { flatten } from '@/helpers';
import { Suspense, useMemo,useContext } from 'react';
import { Route, Switch,Redirect, useLocation } from 'react-router-dom';
import Fallback from '@/components/layout/Fallback';
import {loginCtx} from '@/components/permission/withLogin';
import { LOGIN_PATH } from '@/constant';
function useRenderRoute() {
	const flattenRoutes = flatten(routes, 'children');
	const {isLogin} = useContext(loginCtx);
	const routesRender = useMemo(() => {
		const withAuth = flattenRoutes.filter(route => route.auth);
		return withAuth.map(({ component: Component, path, exact = true, sensitive = true }) => {
			return <Route
				key={path}
				path={path}
				exact={exact}
				sensitive={sensitive}
				render={({location}) => {
					console.log(isLogin);
					
					return (isLogin || path === LOGIN_PATH) ? <Component/>:<Redirect
						to={{
							pathname:LOGIN_PATH,
							state:location.pathname
						}}/>;
				}}
			></Route>;
		});
	}, [flattenRoutes,isLogin]);

	const NotFound = <Route
		key='*'
		component={() => <Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={<Button type="primary">Back Home</Button>}
		/>}></Route>;

	return routesRender.concat(NotFound);
}
export default () => {
	const routesRender = useRenderRoute();	
	return <Suspense fallback={<Fallback/>}>
		<Switch>
			{routesRender}
		</Switch>
	</Suspense>;
};
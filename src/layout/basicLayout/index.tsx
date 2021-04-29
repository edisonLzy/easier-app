import ProLayout  from '@ant-design/pro-layout';
import MenuHeaderRender from '@/components/layout/MenuHeaderRender';
import RigthContentRender from '@/components/layout/RightContentRender';
import { Link, useHistory} from 'react-router-dom';
import type {PropsWithChildren} from 'react'
import type {RouteConfig} from '@/routes';
import { useState } from 'react';

//TODO add SettingDrawer

function useHeaderTitle(){
	const [title, setTitle] = useState('EasierApp');
	return [title, setTitle] as const;
}

export default ({children,routes}:PropsWithChildren<{
  routes:RouteConfig[]
}>) => {
	const [title, setTitle] = useHeaderTitle();
	const history = useHistory();
	return (
		<ProLayout
			fixedHeader
			fixSiderbar
			menuHeaderRender={MenuHeaderRender}
			onMenuHeaderClick={() => history.push('/')}
			menuItemRender={({name,path}) => {
				return <Link 
					onClick={()=>{
						setTitle(name!);
					}}
					to={path!}>
					{name}
				</Link>;
			}}
			rightContentRender={RigthContentRender}
			route={{
				path:'/',
				routes:routes
			}}
		>
           {children}
		</ProLayout>
	);
};

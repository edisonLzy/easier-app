import { LikeOutlined } from '@ant-design/icons';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import ProSkeleton from '@ant-design/pro-skeleton';
import MenuHeaderRender from '@/components/layout/MenuHeaderRender';
import RigthContentRender from '@/components/layout/RightContentRender';
import { Link, useHistory,Route,Switch} from 'react-router-dom';
import routes from '@/routes';
import { useState,Suspense,useMemo, lazy } from 'react';

//TODO add SettingDrawer

function useHeaderTitle(){
	const [title, setTitle] = useState('EasierApp');
	return [title, setTitle] as const;
}
export default () => {
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
			<Switch>
				<Route path='/login' render={()=>{
					return <div>hah</div>;
				}}></Route>;
			</Switch>
			{/* <PageContainer
				header={{
					title:title,
				}}
			
			>
				<Suspense fallback={<ProSkeleton />}>
					<Switch>
						<Route path='/login' render={()=>{
							return <div>hah</div>;
						}}></Route>;
					</Switch>
				</Suspense>
			</PageContainer> */}
		</ProLayout>
	);
};

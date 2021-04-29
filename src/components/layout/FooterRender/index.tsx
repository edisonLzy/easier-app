
import { GithubOutlined } from '@ant-design/icons';
import {Footer} from '@ant-design/pro-layout';
export default ()=><Footer
	copyright="@2019 蚂蚁金服体验技术部出品"
	links={[
		{
			key: 'Ant Design Pro',
			title: 'Ant Design Pro',
			href: 'https://pro.ant.design',
			blankTarget: true,
		},
		{
			key: 'github',
			title: <GithubOutlined />,
			href: 'https://github.com/ant-design/ant-design-pro',
			blankTarget: true,
		},
		{
			key: 'Ant Design',
			title: 'Ant Design',
			href: 'https://ant.design',
			blankTarget: true,
		},
	]}
/>;
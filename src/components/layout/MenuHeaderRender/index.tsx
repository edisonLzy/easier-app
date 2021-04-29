import styles from './index.module.less';
import Logo from '@/assets/logo.png';
import { Space } from 'antd';
export default ()=>{
	return <Space>
		<img 
			className={styles['logo']}
			src={Logo} alt="logo"/>
		<span className={styles['title']}>Easier</span>
	</Space>;
};
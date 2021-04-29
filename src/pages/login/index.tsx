import { useContext, useState,useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { loginCtx } from '@/components/permission/withLogin';
import LoginIn from './component/loginIn';
import SignUp from './component/signUp';
import styles from './index.module.less';
export default () => {
	const [isLoginIn, setIsLoginIn] = useState(true);
	const { isLogin, setIsLogin } = useContext(loginCtx);
	const location = useLocation();	
	const history = useHistory();
	console.log(isLogin);
	
	const handleSubmit  = useCallback(async ()=>{
		setIsLogin(true);
		if(location.state){
			history.push(location.state as string);
		}else{
			history.push('/');
		}
	},[]);
	return <div className={styles['container']}>
		{isLoginIn ? <LoginIn onSubmit={handleSubmit}/> : <SignUp/>}
	</div>;
};
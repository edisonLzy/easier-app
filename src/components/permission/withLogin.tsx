import {createContext, useState} from 'react';
import type {PropsWithChildren,Dispatch,SetStateAction} from 'react';
import { noop } from '@/helpers';
// TODO 添加用户信息
export interface LoginCtx {
    isLogin:boolean
    setIsLogin:Dispatch<SetStateAction<this['isLogin']>>
}
export const loginCtx = createContext<LoginCtx>({
	isLogin:false,
	setIsLogin:noop
});
export default function WithLogin({children}:PropsWithChildren<{
 
}>){
	const [isLogin, setIsLogin] = useState(false);
	return <loginCtx.Provider value={{isLogin,setIsLogin}}>
		{children}
	</loginCtx.Provider>;
}
import {lazy} from 'react'
const login = ()=>import('@/pages/login');

const routes = [{
    path:'/',
    children:[
        {
            path:'/login'
        }
    ]
}]

export default routes
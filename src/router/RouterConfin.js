import Shoop from '../view/shop'
import Home from '../view/Home'
import Sj from '../view/Sj'
import Pj from '../view/pj'
import My from '../view/my'
import Login from '../view/Login'
export default [
    {
        path:'/home',
        com:Home,
        children:[
            {
                path:'/home/shop',
                title:'点菜',
                com:Shoop
            },{
                path:'/home/pj',
                title:'评价',
                com:Pj
            },{
                path:'/home/sj',
                title:"商家",
                com:Sj

            }
        ]
    },{
        path:'/login',
        com:Login
    },{
        path:'/my',
        com:My
    },{
        path:'/detail',
        com:'Detail'
    },{
        path:'/login',
        com:Login
    }
]
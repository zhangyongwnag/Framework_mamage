const Index = () => import("@/pages/Index.vue")
const Login = () => import("@/pages/Login.vue")
const Home = () => import("@/pages/Home.vue")
const Main  = () => import("@/components/main")

const OrderManage  = () => import("@/pages/OrderManage")
const MemberManage  = () => import("@/pages/MemberManage")
const RechargeManage  = () => import("@/pages/RechargeManage")
const WithdrawManage  = () => import("@/pages/WithdrawManage")
const OrderOther  = () => import("@/pages/OrderOther")
const UserManage  = () => import("@/pages/UserManage")

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 *
 */

export default [
  {
    path: '/',
    redirect: {
      name:'Home'
    },
    meta:{
      hideInMenu:true
    }
  },
  {
    path: '/Home',
    name:'home',
    component: Main,
    meta:{
      title:'首页',
      hideInMenu:true,
      icon: 'md-home'
    },
    children:[
      {
        path: '/Home',
        name:'Home',
        component: Home,
        meta:{
          title:'首页',
          icon: 'md-home',
          hideInMenu:true
        }
      }
    ]
  },
  {
    path: '/Login',
    name:'Login',
    component:Login,
    meta:{
      title:'登录',
      icon: 'md-home',
      hideInMenu:true
    }
  },
  {
    path: '/order',
    name:'order',
    component: Main,
    meta:{
      title:'订单管理',
      icon: 'md-home',
      notCache:true
    },
    children:[
      {
        path:'/order/OrderManage',
        name:'OrderManageSend',
        component:OrderManage,
        meta:{
          title:'待发货',
          icon:'md-home',
          componentId:1,
          notCache:true
        }
      },
      {
        path:'/order/OrderOther',
        name:'OrderOther',
        component:OrderOther,
        meta:{
          title:'待收货',
          icon:'md-home',
          componentId:1,
          notCache:true
        }
      },
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: Main,
    meta: {
      title: '用户管理',
      icon: 'md-home'
    },
    children: [
      {
        path:'/user/MemberManage',
        name:'MemberManage',
        component:MemberManage,
        meta:{
          title:'经销商管理',
          icon: 'md-home'
        }
      },
      {
        path:'/user/UserManage',
        name:'UserManage',
        component:UserManage,
        meta:{
          title:'用户管理',
          icon: 'md-home'
        }
      },
    ],
  },
  {
    path: '/finance',
    name: 'finance',
    component: Main,
    meta: {
      title: '财务管理',
      icon: 'md-home'
    },
    children: [
      {
        path:'/finance/RechargeManage',
        name:'RechargeManage',
        component:RechargeManage,
        meta:{
          title:'充值管理',
          icon: 'md-home'
        }
      },
      {
        path:'/finance/WithdrawManage',
        name:'WithdrawManage',
        component:WithdrawManage,
        meta:{
          title:'提现管理',
          icon: 'md-home'
        }
      }
    ],
  },
]

// const R_INDEX = r => require.ensure([], () => r(require('./pages/index')), '')
import store from '../../store'
export default [
  {
    path: '/',
    component:resolve => require(['./pages/layout'], resolve),
    redirect:'/home',
    children: [
      {
        path: 'home',
        component:resolve => require(['./pages/index'], resolve),
      }
    ]
  }/*,
  {
    //将OPENID注入session
    path: '/home/:id/:redirectUrl/', redirect: to => {
      store.dispatch({
        type: 'setSession',
        amount: to.params.id
      })
      return `/${to.params.redirectUrl}/`
    }
  }*/
]

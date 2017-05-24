/*const R_LOGIN_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/login')
const R_LOGIN = r => require.ensure([], () => r(require('./pages/login')), '/login/')
const R_LOGIN_INFO = r => require.ensure([], () => r(require('./pages/info')), '/login/info')*/


import modules from './modules/store'
import store from 'src/store'

export default  {
  path: '/login',
  component:resolve => require(['./pages/layout'], resolve),
  redirect:'/login/',
  children: [
    {
      path: '/',
      component: resolve => require(['./pages/login'], resolve)
    }/*,
    {
      path: 'info/',
      component: R_LOGIN_INFO
    },
*/
  ]
}

store.registerModule('user', {
  ...modules
});

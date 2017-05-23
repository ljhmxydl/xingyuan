/*const R_PERSONAL = r => require.ensure([], () => r(require('./pages/index')), '/personal/')
const R_PERSONAL_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/personal')
const R_PERSONAL_CART = r => require.ensure([], () => r(require('./pages/cart')), '/personal/cart/')*/

import modules from './modules/store'
import store from 'src/store'

export default  {
  path: '/patient',
  redirect:'/patient/',
  component:resolve => require(['./pages/layout'], resolve),
  children: [
    {
      path: '/',
      component: resolve => require(['./pages/index'], resolve)
    },
    {
      path: 'cart/',
      component: resolve => require(['./pages/cart'], resolve)
    }
  ]
}

store.registerModule('personal', {
  ...modules
})

/*const R_ORDER_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/order')
const R_ORDER_LIST = r => require.ensure([], () => r(require('./pages/list')), '/order/list/')
const R_ORDER_DETAIL = r => require.ensure([], () => r(require('./pages/detail')), '/order/detail/')
const R_ORDER_OFFILINE = r => require.ensure([], () => r(require('./pages/offiline')), '/order/offiline/')*/

import modules from './modules/store'
import store from 'src/store'
export default  {
  path: '/order',
  component:resolve => require(['./pages/layout'], resolve),
  children: [
    {path: '', redirect: '/order/askOrders'},
    {
      path: 'askOrders',//咨询订单
      component: resolve => require(['./pages/askOrders'], resolve)
    },
    {
      path: 'medicalCard',//功能管理
      component: resolve => require(['./pages/medicalCard'], resolve)
    }
  ]
}

store.registerModule('order', {
  ...modules
});

/*const R_RECORD_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/record')
const R_RECORD = r => require.ensure([], () => r(require('./pages/index')), '/record/')
const R_RECORD_DETAIL = r => require.ensure([], () => r(require('./pages/detail')), '/record/detail')*/

export default  {
  path: '/mine',
  component:resolve => require(['./pages/layout'], resolve),
  redirect:'/mine/',
  children: [
    {
      path: '/',
      component: resolve => require(['./pages/index'], resolve)
    },
     {
      path: 'doctorInfo',
      component: resolve => require(['./pages/doctorInfo'], resolve)
    }
  ]
}

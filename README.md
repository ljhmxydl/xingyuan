#前端开发bug和解决办法记录
##一、医生端：
1. B：tab组件实时选择bug。
	>组件路径：D:\0项目\杏缘医生\xingyuan_WX_Y\src\components\tabbar.vue
	>
	>解决办法：用**$route.path**获取当前路由对象的路径，跟想要的路径对比，相同则被选中。  

2. B：底部Tabbar组件实时选择。
	>组件路径：D:\0项目\杏缘医生\xingyuan_WX_Y\src\components\tabbar.vue
	>
	>解决办法：:selected="$route.path.indexOf('/home') != -1"
3. B：诊卡二维码。
	>组件路径：D:\0项目\杏缘医生\xingyuan_WX_Y\src\views\order\pages\medicalCardItem.vue
	>
	>解决办法：:selected="$route.path.indexOf('/home') != -1"

##二、患者端：
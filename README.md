# 前端开发bug和解决办法记录
## 一、医生端：
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

4. B：获取页面授权，获取openID和用户信息。
	>业务逻辑：微信公众号，获取用户微信openId，发给后台查询有没有注册；如果没有注册，默认只能进入注册页面，如果注册通过了则进入首页。
	>
	>解决办法：:selected="$route.path.indexOf('/home') != -1"

## 二、患者端：
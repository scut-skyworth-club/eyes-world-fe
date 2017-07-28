// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

// 不同平台统一样式
import 'normalize.css'
import './assets/reset.css'

import pic_like from './assets/like.png'
import pic_visited from './assets/visited.png'

Vue.config.productionTip = false

// 全局组件
import PictureDialog from './components/PictureDialog'

Vue.component('search', {
    template: '<div>搜索组件</div>'
})

//参数表如下：
//props:[
// 'title',		显示的标题
// 'like',		点赞数
// 'visited',	访问量
// 'pic_url',	背景图的url
// 'url'		用作路由的url
// ],
// 
// 另外其宽高没有定义，正常使用需要给该组件定义宽和高
Vue.component('picture-dialog',PictureDialog);

Vue.component('picture-detail', {
    template: '<div>景点详细情况，大图</div>'
})


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { 
    	App,
 	}
})
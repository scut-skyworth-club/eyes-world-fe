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
// 'date',		图片上传时间
// 'author',	作者
// 'isFoucs',	是否被选中，不选中下面的标题、作者等不会显示
// 'width',		宽度
// 'height'		高度
// ],
// 
// 参数表中宽高用于字体的自适应
// 使用时宽度勿小于250px，否则信息可能显示不下（你哪知道作者名字多长）
// 
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
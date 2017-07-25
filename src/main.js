// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 不同平台统一样式
import 'normalize.css'
import './assets/reset.css'

Vue.config.productionTip = false

// 全局组件
Vue.component('search', {
    template: '<div>搜索组件</div>'
})
Vue.component('picture-dialog', {
    template: '<div>图片框组件</div>'
})
Vue.component('picture-detail', {
    template: '<div>景点详细情况，大图</div>'
})


new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
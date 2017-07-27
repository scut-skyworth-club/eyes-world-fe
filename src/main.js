// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 不同平台统一样式
import 'normalize.css'
import './assets/reset.css'

import pic_like from './assets/like.png'
import pic_visited from './assets/visited.png'
import bg1 from './assets/bg1.jpg'

Vue.config.productionTip = false

// 全局组件
Vue.component('search', {
    template: '<div>搜索组件</div>'
})
Vue.component('picture-dialog', {
	props:[
		'title',
		'like',
		'visited',
		'pic_url',
		'url'
	],
    template: '<div>'+
        '<div :style="css_box"> '+
            '<div :style="css_text_bg">'+
                '<span :style="css_title">{{title}}</span>'+
                '<span :style="css_like"><img :style="css_img" :src="pic_like"/>{{like}}</span>'+
                '<span :style="css_visited"><img :style="css_img" :src="pic_visited"/>{{visited}}</span>'+
            '</div>'+
        '</div>'+
    '</div>',
    data(){
        return {
        	css_box:{
		        height:"100%",
		        width:"100%",
		        backgroundImage:"url("+bg1+")",
		        backgroundPosition:"center",
		        backgroundRepeat: "no-repeat",
		        position:"relative",
    		},
		    css_text_bg:{
		        width:"100%",
		        position:"absolute",
		        bottom:"0",
		        background:"rgba(255,255,255,0.5)",
		        paddingTop:"3vh",
		        paddingBottom:"3vh",
		        paddingLeft:"1vw",
		        paddingRight:"1vw",
		    },
		    css_title:{
		        fontSize:"1.5vw",
		        marginRight:"8%",
		    },
		    css_img:{
		        height:"30%",
		        width:"5%",
		        marginRight:"1%",
		    },
		    css_like:{
		        marginRight:"8%",
		        fontSize:"1.5vw",
		    },
		    css_visited:{
		        fontSize:"1.5vw",
		    },
		    pic_like:pic_like,
		    pic_visited:pic_visited,
		    bg1:bg1,
        }
    }		
})
Vue.component('picture-detail', {
    template: '<div>景点详细情况，大图</div>'
})


new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
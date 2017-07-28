<template> 
	<div id="picture-dialog" :style="bg" @click="link"> 
        <div class="text_bg" >
            <span class="title">{{title}}</span>
            <span class="like"><img :src="pic_like"/>{{like}}</span>
            <span class="visited"><img :src="pic_visited"/>{{visited}}</span>
        </div>
    </div>
</template>

<script>
	import pic_like from '../assets/like.png'
	import pic_visited from '../assets/visited.png'

  	import router from '../router/index'

	export default{
		name:'picture-dialog',
		props:[
		'title',
		'like',
		'visited',
		'pic_url',
		'url'
		],
		data(){
			return{
				bg:{
					backgroundImage:"url("+this.pic_url+")"
				},
				pic_like:pic_like,
				pic_visited:pic_visited,
			}
		},
		methods:{
			link:function(){
				if(this.url == undefined||this.url == ""){
					alert("url为空！");
				}else{
					router.push(url);
				}
			}
		}
	}
</script>

<style>
#picture-dialog{
/*	height: 80vh;
	width: 30vw;*/
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
}
#picture-dialog > .text_bg{
	width:100%;
	height:8vh;
	bottom: 0;
	position: absolute;
	background: rgba(255,255,255,0.5);
	padding-left: 0.5vw;
}

#picture-dialog > .text_bg:before{
	content: ".";
	height: 100%;
	display: inline-block;
	vertical-align: middle;
	visibility: hidden;
}

#picture-dialog > .text_bg > .title{
	height: 100%;
	font-size: 2vw;
	margin-right: 8%;
}

#picture-dialog > .text_bg > span > img{
	/*height: 30%;*/
	width: 6%;
	margin-right: 2%;
}

#picture-dialog > .text_bg > .like{
	margin-right: 8%;
	font-size: 1.8vw;
}

#picture-dialog > .text_bg > .visited{
	font-size: 1.8vw;
}
</style>
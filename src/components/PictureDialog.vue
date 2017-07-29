<template> 
	<div id="picture-dialog" :style="Adjust" @click="link"> 
        <div class="text_bg" v-if="isFoucs" >
            <div :style="fontAdjustBig" class="title">{{title}}</div>
            <span class="info_box">
				<span :style="fontAdjust">{{date}} &nbsp&nbsp</span><span :style="fontAdjust">@{{author}}</span>
            </span>
            <span class="ico_box">
            	<span :style="fontAdjust" class="visited"><img :src="pic_visited"/>{{visited}}</span>
            	<span :style="fontAdjust" class="like"><img :src="pic_like"/>{{like}}</span>
            </span>
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
			'url',
			'date',
			'author',
			'isFoucs',
			'width',
			'height'
		],
		data(){
			return{
				bg:{
					backgroundImage:"url("+this.pic_url+")",
					width:"75vh",
					height:"75vh"
				},
				pic_like:pic_like,
				pic_visited:pic_visited,
				test:{
					display:"none",
				},
				fontAdjust:{
					fontSize:"1.3vw",
				},
				fontAdjustBig:{
					fontSize:"3vw",
				},
			}
		},
		computed:{
			Adjust:function(){
				this.bg.width = this.width + "px";
				this.bg.height = this.height + "px";

				var x;
				if(this.width > this.height){
					x = this.height;
				}else{
					x = this.width;
				}

				let font_s = x * 0.025;
				let font_b = x * 0.055;

				//当图片框太小的时候，文字背景将固定高度
				//此时文字大小将不用再变小
				//
				//用电视分辨率算出来的数据，电脑上显示不对
				// if(font_s < 15.3){
				// 	font_s = 15.3;
				// }

				// if(font_b < 33.7){
				// 	font_b = 33.7;
				// }
				
				if(font_s < 12){
					font_s = 12;
				}

				if(font_b < 22){
					font_b = 22;
				}

				this.fontAdjust = {
					fontSize:font_s +"px"
				}

				this.fontAdjustBig = {
					fontSize:font_b +"px"
				}

				return this.bg;
			}
		},
		methods:{
			link:function(){
				if(this.url == undefined||this.url == ""){
					alert("url为空！");
				}else{
					router.push(url);
				}
			},
		}
	}
</script>

<style>
span,div{
	font-family: "小米兰亭";
	color: white;
}
#picture-dialog{
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
}
#picture-dialog > .text_bg{
	width:100%;
	min-height: 8.5vh;
	max-height: 11vh;
	height: 15%;
	bottom: 0;
	position: absolute;
	background: rgba(49,71,127,0.5);
	padding-left: 1.5%;
	padding-top: 0.8%;
}

#picture-dialog > .text_bg > .title{
	position: absolute;
	top:10%;
	font-size: 3vw;
	color: white;
}

#picture-dialog > .text_bg > .info_box{
	font-size: 1.3vw;
	position: absolute;
	bottom: 10%;
}


#picture-dialog > .text_bg > .ico_box{
	position: absolute;
	bottom: 10%;
	right:1vw;
	width: 100%;
	text-align: right;
}

/*#picture-dialog > .text_bg > .ico_box:before{
	content: ".";
	height: 100%;
	display: inline-block;
	vertical-align: middle;
	visibility: hidden;
}*/

#picture-dialog > .text_bg > .ico_box > .like{
	position:relative;
	font-size: 1.3vw;
}

#picture-dialog > .text_bg > .ico_box > .visited{
	position:relative;
	font-size: 1.3vw;
	margin-right: 2.6vw;
}

#picture-dialog > .text_bg > .ico_box >.like > img{
	width: 100%;
	/*height: 150%;*/
	position: absolute;
	bottom: 0;
	right:100%;
}

#picture-dialog > .text_bg > .ico_box > .visited > img{
	width: 100%;
	/*height: 150%;*/
	position: absolute;
	bottom: 0;
	right:100%;
}
</style>
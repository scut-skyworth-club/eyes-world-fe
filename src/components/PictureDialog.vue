<template> 
	<div id="picture-dialog" :style="Adjust" @click="link"> 
		<div v-if="type==5" class="middleTitle">{{title}}</div>
        <div class="text_bg" :style="text_bg" v-if="type==0?false:true" >
            <div v-if="type!=5" :style="fontAdjustBig" class="title">{{title}}</div>
            <transition name="fade" mode="out-in">
	            <span v-if="type==1||type==2||type==3?false:true" :style="fontAdjust" class="info_box">
					<!-- <span :style="fontAdjust">{{date}} &nbsp&nbsp</span><span :style="fontAdjust">@{{author}}</span> -->
					{{date}} &nbsp&nbsp@{{author}}
	            </span>
            </transition>
            <transition name="fade" mode="out-in">
	            <span v-if="type==1||type==2?false:true" :style="icoAdjust" class="ico_box">
	            	<span :style="fontAdjustMiddleWithMargin" class="visited"><img :src="pic_visited"/>{{visited}}</span>
	            	<span :style="fontAdjustMiddle" class="like"><img :src="pic_like"/>{{like}}</span>
	            </span>
            </transition>
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
			'width',
			'height',
			'type'
		],
		data(){
			return{
				bg:{
					backgroundImage:"url("+this.pic_url+")",
					width:"75vh",
					height:"75vh"
				},
				text_bg:{
					height: "15%",
				},
				pic_like:pic_like,
				pic_visited:pic_visited,
				test:{
					display:"none",
				},
				fontAdjust:{
					fontSize:"1.3vw",
				},
				fontAdjustMiddle:{
					fontSize:"1.35vw",
				},
				fontAdjustMiddleWithMargin:{
					fontSize:"1.35vw",
					marginRight:"2vw",
				},
				fontAdjustBig:{
					fontSize:"3vw",
				},
				icoAdjust:{},
				// hasLabel:true,
				// hasInfo:true,
				// hasIcon:true
			}
		},
		computed:{
			Adjust:function(){
				this.bg.width = this.width + "vw";
				this.bg.height = this.height + "vh";

				var x;
				//屏幕比例16:9
				// if(this.width*16 > this.height*9){
					x = this.height*9/16;
				// }else{
					// x = this.width;
				// }

				let font_s = x * 0.022;
				let font_m = x * 0.029;
				let font_b = x * 0.07;

				// //15px
				// if(font_s > 0.78){
				// 	font_s = 0.78;
				// }

				// //20px
				// if(font_m > 1.04){
				// 	font_m = 1.04;
				// }

				// //48px
				// if(font_b > 2.5){
				// 	font_b = 2.5;
				// }

				//11px
				if(font_s < 0.57){
					font_s = 0.57;
				}

				//15px
				if(font_m < 0.78){
					font_m = 0.78;
				}

				//30px
				if(font_b < 1.56){
					font_b = 1.56;
				}

				this.fontAdjust = {
					fontSize:font_s +"vw"
				}

				this.fontAdjustMiddle = {
					fontSize:font_m +"vw"
				}

				this.fontAdjustMiddleWithMargin = {
					fontSize:font_m +"vw",
					marginRight:(font_m+0.38)+"vw"
				}

				switch(this.type){
					case 0:
						break;
					case 1:
						this.fontAdjustBig = {
							fontSize:font_b +"vw",
							verticalAlign: "middle",
							top:"1.5vh",
							textAlign: "center"
						}
						break;
					case 2:
						this.fontAdjustBig = {
							fontSize:font_b*0.8 +"vw",
							verticalAlign: "middle",
							textAlign: "center",
							left:0
						}
						break;
					case 3:
						this.fontAdjustBig = {
							fontSize:font_b*1.1 +"vw",
							top:"15%",
							textAlign: "center",
							left:0
						}
						this.text_bg = {
							height:"20%"
						}
						break;
					case 4:
						this.fontAdjustBig = {
							fontSize:font_b +"vw",
							textAlign:"left",
							top:"1vh",
							left:"1vw",
						}
						this.fontAdjustMiddle = {
							fontSize:font_m*0.8 +"vw"
						}
						this.fontAdjustMiddleWithMargin = {
							fontSize:font_m*0.8 +"vw",
							marginRight:(font_m*0.8+0.38)+"vw"
						}
						break;
					case 5:
						this.text_bg = {
							minHeight:"4.5vh",
						}
						this.fontAdjust = {
							fontSize:font_s +"vw",
							bottom:"1.5vh",
						}
						this.icoAdjust = {
							bottom:"1.2vh",
						}
						break;
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
#picture-dialog span,#picture-dialog div{
	font-family: "小米兰亭";
	letter-spacing: 0.1vw;
	color: white;
/*	padding: 0;
	margin:0;*/
}
#picture-dialog{
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	display: inline-block;
	transition: all 0.4s ease;
	text-align:center;
}

/*#picture-dialog :before{
	content: ".";
	height: 100%;
	display: inline-block;
	vertical-align: middle;
	visibility: hidden;
}*/

.middleTitle{
	position: relative;
	font-size: 2vw;
	top:40%;
	width: 100%;
	background: -webkit-linear-gradient(0,rgba(49,71,127,0) 20%,rgba(49,71,127,0.5),rgba(49,71,127,0) 80%);
}

#picture-dialog > .text_bg{
	width:100%;
	min-height: 6.8vh;
	/*max-height: 9.26vh;*/
	bottom: 0;
	position: absolute;
	background: rgba(49,71,127,0.5);
	display: table;
}

#picture-dialog > .text_bg > .title{
	position: absolute;
	top:30%;
	/*left:1vw;*/
	width: 100%;
	text-align: center;
	display: table-cell;
	vertical-align: top;
	/*padding-top: 1vh;*/
	/*padding-left: 1vw;*/
	font-size: 3vw;
	color: white;
	transition: all 0.4s ease;
}

#picture-dialog > .text_bg > .info_box{
	font-size: 1.3vw;
	position: absolute;
	bottom: 0.74vh;
	left:1vw;
}


#picture-dialog > .text_bg > .ico_box{
	position: absolute;
	bottom: 0.74vh;
	right: 1vw;
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
	transition: all 0.4s ease;
}

#picture-dialog > .text_bg > .ico_box > .visited{
	position:relative;
	font-size: 1.3vw;
	margin-right: 2.6vw;
	transition: all 0.4s ease;
}

#picture-dialog > .text_bg > .ico_box >.like > img{
	width: 67%;
	/*height: 150%;*/
	position: absolute;
	bottom: 0;
	right:110%;
}

#picture-dialog > .text_bg > .ico_box > .visited > img{
	width: 67%;
	/*height: 150%;*/
	position: absolute;
	bottom: 0;
	right:110%;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.6s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
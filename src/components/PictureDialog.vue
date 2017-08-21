<template> 
	<div id="picture-dialog" :style="bg" @click="link"> 
		<div v-if="type==5" class="middleTitle">{{title}}</div>
        <div class="text_bg" :style="text_bg" v-if="type==0?false:true" >
            <div v-if="type!=5" :style="fontAdjustBig" class="title">{{title.split('-')[0]}}</div>
            <transition name="fade" mode="out-in">
	            <span v-if="type==1||type==2||type==3?false:true" :style="fontAdjust" class="info_box">
					<!-- <span :style="fontAdjust">{{date}} &nbsp&nbsp</span><span :style="fontAdjust">@{{author}}</span> -->
					{{getDate()}} &nbsp&nbsp@{{author}}
	            </span>
            </transition>
            <transition name="fade" mode="out-in">
	            <span v-if="type==1||type==2?false:true" :style="icoAdjust" class="ico_box">
	            	<span :style="fontAdjustMiddleWithMargin" class="visited"><img :src="pic_visited"/>{{visited}}</span>
	            	<span :style="fontAdjustMiddle" class="like"><img :src="pic_like"/>{{like}}</span>
	            </span>
            </transition>
            {{Adjust}}
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
			'type'
		],
		data(){
			return{
				bg:{
					backgroundImage:"url("+this.pic_url+")",
				},
				height:0,
				width:0,
				text_bg:{
					height: "15%",
				},
				pic_like:pic_like,
				pic_visited:pic_visited,
				test:{
					display:"none",
				},
				fontAdjust:{
					fontSize:"0.8vw",
				},
				fontAdjustMiddle:{
					fontSize:"0.7vw",
				},
				fontAdjustMiddleWithMargin:{
					fontSize:"0.6vw",
					marginRight:"1vw",
				},
				fontAdjustBig:{
					fontSize:"0.9vw",
				},
				icoAdjust:{},
				// hasLabel:true,
				// hasInfo:true,
				// hasIcon:true
			}
		},
		computed:{
			Adjust:function(){
				var x = this.height;
				var y = this.width;

				let font_s = x * 0.022;
				let font_m = x * 0.029;
				let font_b = x * 0.07;

				// if(font_s > 15){
				// 	font_s = 15;
				// }

				// if(font_m > 20){
				// 	font_m = 20;
				// }

				// if(font_b > 48){
				// 	font_b = 48;
				// }

				// if(font_s < 11){
				// 	font_s = 11;
				// }

				// if(font_m < 15){
				// 	font_m = 15;
				// }

				// if(font_b < 30){
				// 	font_b = 30;
				// }

				this.fontAdjust = {
					fontSize:font_s +"px"
				}

				this.fontAdjustMiddle = {
					fontSize:font_m +"px"
				}

				this.fontAdjustMiddleWithMargin = {
					fontSize:font_m +"px",
					marginRight:(font_m+x*0.03)+"px"
				}

				switch(this.type){
					case 0:
						break;
					case 1:
						this.fontAdjustBig = {
							fontSize:font_b +"px",
							textAlign: "center"
						}
						break;
					case 2:
						this.fontAdjustBig = {
							fontSize:font_b*0.8 +"px",
							textAlign: "center",
							left:0
						}
						this.text_bg = {
							height:"15%"
						}
						break;
					case 3:
						this.fontAdjustBig = {
							fontSize:font_b +"px",
							textAlign: "center",
							top: -x*0.001 +"vh",
							left:0
						}
						this.text_bg = {
							height:"20%"
						}
						break;
					case 4:
						this.text_bg = {
							display:"table",
							minHeight:"4.5vh",
						}
						this.fontAdjustBig = {
							position:"absolute",
							fontSize:font_b +"px",
							textAlign:"left",
							top: "5%",
							left:"2%",
						}
						this.fontAdjustMiddle = {
							fontSize:font_m*0.8 +"px"
						}
						this.fontAdjustMiddleWithMargin = {
							fontSize:font_m*0.8 +"px",
							marginRight:(font_m*0.8+x*0.03)+"px"
						}
						break;
					case 5:
						this.text_bg = {
							height:"10%"
						}
						this.fontAdjust = {
							fontSize:font_s +"px",
							position:"static",
							textAlign:"left",
							paddingLeft:"1vw"
						}
						this.icoAdjust = {
							bottom:"25%",
						}
						break;
				}
			}
		},
		methods:{
			link:function(){
				if(this.url == undefined||this.url == ""){
					console.log("url为空！");
				}else{
					router.push(url);
				}
			},
			setBg:function(){
				var urls = this.pic_url.split('/');
				if(urls.length>1 && urls[1]=="upload"){
					this.bg = {
						backgroundImage:"url(http://39.108.149.106"+this.pic_url+")",
					}
				}
			},
			getDate:function(){
				let newDate = new Date(parseInt(this.date));
                let year = newDate.getFullYear();
                let month = newDate.getMonth();
                let day = newDate.getDate();
                
                month = month + 1;

                if (month<10) {
                    month = '0'+month;
                }
                if (day<10) {
                    day = '0'+day;
                }
                
                return year+'/'+month+'/'+day;
			},
		},
		mounted:function(){
			this.setBg();
			// let el = this.$el; 
			// this.height = el.offsetHeight;
			// this.width = el.offsetWidth;
		},
		updated:function(){
			let el = this.$el; 
			this.height = el.offsetHeight;
			this.width = el.offsetWidth;
		}

	}
</script>

<style>
@font-face {
  font-family: font757;
  src: url("../assets/font/小米兰亭.ttf");
}

#picture-dialog span,#picture-dialog div{
	font-family: font757;
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
	/*min-height: 6.8vh;*/
	/*max-height: 11vh;*/
	height: 15%;
	bottom: 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	background: rgba(49,71,127,0.5);
	/*display: table;*/
	transition: all 0.4s ease;
}

#picture-dialog > .text_bg > .title{
	position: relative;
	top:0;
	width: 100%;
	text-align: center;
	display: table-cell;
	vertical-align: top;
	font-size: 3vw;
	color: white;
	transition: all 0.4s ease;
}

#picture-dialog > .text_bg > .info_box{
	font-size: 1.3vw;
	position: absolute;
	bottom: 10%;
	left:2%;
	transition: all 0.4s ease;
}


#picture-dialog > .text_bg > .ico_box{
	position: absolute;
	bottom: 10%;
	right: 2%;
	text-align: right;
}

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
	/*height: 150%;*/
	position: absolute;
	bottom: 0;
	right:110%;
	height:120%;
}

#picture-dialog > .text_bg > .ico_box > .visited > img{
	/*height: 150%;*/
	position: absolute;
	bottom: 0;
	right:110%;
	height:120%;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.6s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>

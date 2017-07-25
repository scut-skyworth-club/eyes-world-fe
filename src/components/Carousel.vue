<template>
    <div id="carousel">     
		<div class="item_carousel" id="first_item" @click="toLeft()">
			<img src="../assets/bg1.jpg" />
			<span>{{title.t1}}</span>
		</div>

		<div class="item_carousel" @click="select()">
				<img  src="../assets/bg2.jpg" />
				<span>{{title.t2}}</span>
		</div>

		<div class="item_carousel" @click="select()">
				<img  src="../assets/bg3.jpg" />
				<span>{{title.t3}}</span>
		</div>

		<div class="item_carousel" @click="select()">
				<img  src="../assets/bg4.jpg" />
				<span>{{title.t4}}</span>
		</div>

		<div class="item_carousel" id="last_item" @click="toRight()">
			<img src="../assets/bg5.jpg" />
			<span>{{title.t5}}</span>
		</div>
    </div>
</template>

<script>
	var animate = require('animate');
    export default {
        name:'carousel',
        data(){
            return {
            	msg:true,
                title:{
                	t1:"四字标题1",
                	t2:"四字标题2",
                	t3:"四字标题3",
                	t4:"四字标题4",
                	t5:"四字标题5",
                }
            }
        },
        methods:{
        	toLeft:function(){
        		
        	},
        	select:function(){

        	},
        	toRight:function(){

        	}
        }
    }
    // var animation = animate(function frame(){

    // },24);

</script>


<style>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body,html{
	width: 100vw;
	height: 100vh;
}

#carousel{
	border: 1px solid #44a5fc;
	overflow: hidden;
	position: relative;
	width: 100vw;
	height: 100vh;
	background: #000;
}

#first_item{
	width:30vw;
}
	

#first_item span{
	left:14vw;
}

#last_item{
	width:19vw;
	position: absolute;
	left:84.4vw;
	top:0vh;
}

/*#last_item img{
	height: 100vh;
}*/

.item_carousel{
	display: inline-block;
	position: relative;
	left: -7vw;
   	width: 20vw;
   	height:100vh;
    transform: skew(-7.5deg);
    overflow: hidden;
}

.item_carousel img{
	position: relative;
	left: -20%;
	top:0px;
	transform: skew(7.5deg);
	height: 100%;
}

.item_carousel span{
	position: relative;
	left:4.5vw;
	top:-15vh;

	color: #fff;
	font-size: 30px;
}

.slide-fade-enter-active {
	transition: all 1s ease;
}
.slide-fade-leave-active {
	transition: all 1s ease;
}

.slide-fade-enter, .slide-fade-leave-to{
	transform: translateX(20vw) skew(-7.5deg);
	opacity: 1;
}

</style>
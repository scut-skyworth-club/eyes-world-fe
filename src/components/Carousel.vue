<template>
    <div id="carousel">
        <!-- {{msg}} -->      
		<div class="item_carousel" id="first_item">
			<img src="../assets/bg1.jpg" />
		</div>

		<div class="item_carousel">
			<img src="../assets/bg2.jpg" />
		</div>

		<div class="item_carousel">
			<img src="../assets/bg3.jpg" />
		</div>

		<div class="item_carousel">
			<img src="../assets/bg4.jpg" />
		</div>

		<div class="item_carousel" id="last_item">
			<img src="../assets/bg5.jpg" />
		</div>
    </div>
</template>

<script>
    export default {
        name:'carousel',
        data(){
            return {
                msg:'标题'
            }
        }
    }


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
}

#first_item{
	width:30vw;
}
	

/*#first_item img{
	height: 100vh;
}*/

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
</style>
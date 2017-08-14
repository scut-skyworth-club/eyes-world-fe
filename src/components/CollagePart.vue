<template>
     <div id="CollagePart" class="picDialog">
         <ul class="collageDiv">
             <p class="collageName">{{collageName}}
             </p>  
                <li v-for="(item,itemIndex) in collage" :class="item.type==5?'select':'noSelect'" :key="itemIndex"> 
                <transition name="fade" mode="out-in">
                    <picture-dialog
                        v-if="toggle"
                        key="first"
                        :date="item.date"
                        :author="item.author"
                        :title="item.name"
                        :like="item.likeNum"
                        :visited="item.visited"
                        :pic_url="item.url"
                        :type="item.type"
                        :height="item.type==5?27.5:24"
                        :width="item.type==5?21.5:19.5">
                    </picture-dialog>

                    <picture-dialog
                        v-else
                        key="second"
                        :date="item.date"
                        :author="item.author"
                        :title="item.name"
                        :like="item.likeNum"
                        :visited="item.visited"
                        :pic_url="item.url"
                        :type="item.type"
                        :height="item.type==5?27.5:24"
                        :width="item.type==5?21.5:19.5"> 
                    </picture-dialog>
                </transition>
            </li>
         </ul>
      
     </div>
</template>

<script>
    import bg1 from '../assets/bg1.jpg'
    import bg2 from '../assets/bg2.jpg'
    import bg3 from '../assets/bg3.jpg'
    import bg4 from '../assets/bg4.jpg'

    import bg5 from '../assets/favorite/bg5.jpg'
    import bg6 from '../assets/favorite/bg6.jpg'
    import bg7 from '../assets/favorite/bg7.jpg'
    import bg8 from '../assets/favorite/bg8.jpg'

    export default {
        name:'CollagePart',
        data(){
            return {
                //toggle:true,
                //collages:[],
                // select:0,
                // offset:0,
            }
        },

        props:["collageName","collage","toggle"],

        // updated:function(){
        //         console.log(collage.type);
        // },

        methods:{

        //    select_ad:function(){
        //        //alert(1);
        //         (this.getCollage[this.select]).type = 2;
                
        //         this.select++;
        //         if(this.select>3||this.offset*4+this.select>=this.collage.length){
        //             if(this.offset*4+this.select>=this.collage.length){
        //                 this.select--;
        //             }else{
        //                 this.offset++;  
        //                 this.select = 0;
        //                 this.toggle = !this.toggle;
        //             }
        //         }
        //         (this.getCollage[this.select]).type = 5;
        //     },
        //     select_re:function(){
        //         (this.getCollage[this.select]).type = 2;
        //         this.select--;
        //         if(this.select<0){
        //             if(this.offset-1<0){
        //                 this.select++;
        //             }else{
        //                 this.offset--;
        //                 this.select = 3;
        //                 this.toggle = !this.toggle;
        //             }
        //         }
        //         (this.getCollage[this.select]).type = 5;
        //     },
        },
        computed:{
            //  getCollage:function(){
            //     let len = this.collage.length - this.osffsets*4;
            //     if(len >=4){
            //     len = 4;
            //     }else if(len<=0){
            //     return [];
            //     }

            //     let collages_part = Array(len);
            //     for(let i=0;i<len;i++){
            //     collages_part[i] = this.collage[this.osffsets*4+i];
            //     }

            //     return collages_part;
            // },
           
        },
    }
</script>


<style>

    .picDialog{
        position: relative;
        height: 36vh;
        /* width: 87.05vw; */
        font-size: 2.96vh;
        overflow: hidden; 
        border-bottom: 3px solid rebeccapurple;    
    }

    .collageDiv{
        position: relative;
        height: 36vh;
        /* background: rebeccapurple;             */
    }

    .collageName{
        position: absolute;
        top: 5px;
    }

    .collageDiv li{
       margin-top: 40px; 
       display: inline-block;  
       position: relative; 
    }

    .collageDiv > .noSelect{
        box-shadow: 0 0 0 rgba(0,0,0,0.7);
        width:19.5vw;
        height: 24vh;
        margin-right:1.7vw;
        vertical-align: top; 
        top:1.7vh;
        transition: all 0.4s
    }

    .collageDiv > .select{
        box-shadow: 0 0 5vw rgba(0,0,0,0.7);
        width:21.5vw;
        height: 27.5vh;
        margin-right: 1vw;
        top:0;
        vertical-align: top; 
        transition: all 0.4s
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 0.4s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    } 


</style>

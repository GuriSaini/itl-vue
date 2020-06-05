<template>
  <v-container :fluid=true grid-list-xs class="p-0">

      <carousel :responsive="{0:{items:1},600:{items:1},1000:{items:1}}" v-bind:nav="false" v-bind:margin=5 :autoplayHoverPause="true" v-bind:autoplay='true' v-bind:dots="true" v-bind:loop='true'>
        <div class="item">
           <h2 class="caption-heading text-primary backInLeft">"We Provide The Best
             <br>
             Care For Your Pets"
           </h2>
           <p>The best pets clinic at melbourne, more than 20.000+ customers happy.</p>
           <img src="images/silder1.jpg" alt="">
        </div>
         <div class="item">
           <img src="images/silder2.jpg" alt="">
        </div>
         <div class="item">
           <img src="images/silder3.jpg" alt="">
        </div>
      </carousel>
  </v-container>
    
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
    name:"silder",
    components:{carousel},
     data () {
      return {
      
        slides: [
          'First',
          'Second',
          'Third',
  
        ],
      }
    },
}
</script>
<style scoped>
.container {
    padding: 0px; 
}

.caption-heading{
  position: absolute;
  top: 10%;
  left: 10%;
  color: #ffffff;
  font-size: 40px;
  font-weight: 800;
}
.item p{
    font-size: 21px;
    color: #ffffff;
    padding: 0;
    position: absolute;
    top: 25%;
    left: 10%;
} 
@media only screen and (max-width: 600px) {
  .caption-heading{
  position: absolute;
  top: 10%;
  left: 10%;
  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
}
.item p{
    font-size: 18px;
    color: #ffffff;
    padding: 0;
    position: absolute;
    top: 32%;
    left: 10%;
} 

}
</style>
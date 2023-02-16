

<script>
import { defineComponent, reactive } from 'vue'
import CardsData from "../../cards.json"


export default {
  name: "Dice2",
  props: {
    randomval: Number,
  },
  data() {
    return {
      
    }
  },
  methods: {
    startDicing() {
      var cube2 = document.getElementById('cube2');
            
      if (this.randomval==1){
      cube2.style.transform = 'rotateX('+8*90+'deg) rotateY('+4*90+'deg)';
      }
      if (this.randomval==2){
      cube2.style.transform = 'rotateX('+2*90+'deg) rotateY('+16*90+'deg)';
      }
      
      if (this.randomval==3){
        cube2.style.transform = 'rotateX('+6*90+'deg) rotateY('+5*90+'deg)';
      }
      if (this.randomval==4){
        cube2.style.transform = 'rotateX('+8*90+'deg) rotateY('+5*90+'deg)';
      }
      if (this.randomval==5){
        cube2.style.transform = 'rotateX('+3*90+'deg) rotateY('+12*90+'deg)';
      }
      if (this.randomval==6){
        cube2.style.transform = 'rotateX('+5*90+'deg) rotateY('+16*90+'deg)';
      }
    }
  },
  mounted: function() {
    console.log("kör bara!")
    setTimeout(() => {
          this.startDicing()
        }, 100)

  }
}

</script>


<template>
<section class="container">
  <div id="cube2" @click="this.startDicing()">
    <div class="front">
      <span class="dot dot1"></span>
    </div>
    <div class="back">
      <span class="dot dot1"></span>
      <span class="dot dot2"></span>
    </div>
    <div class="right">
      <span class="dot dot1"></span>
      <span class="dot dot2"></span>  
      <span class="dot dot3"></span>
    </div>
    <div class="left">
      <span class="dot dot1"></span>
      <span class="dot dot2"></span>  
      <span class="dot dot3"></span>
      <span class="dot dot4"></span>
    </div>
    <div class="top">
      <span class="dot dot1"></span>
      <span class="dot dot2"></span>  
      <span class="dot dot3"></span>
      <span class="dot dot4"></span>
      <span class="dot dot5"></span>
    </div>
    <div class="bottom">
      <span class="dot dot1"></span>
      <span class="dot dot2"></span>  
      <span class="dot dot3"></span>
      <span class="dot dot4"></span>
      <span class="dot dot5"></span>
      <span class="dot dot6"></span>
    </div>
  </div>
</section>
</template>

<style scoped>
@import '../../assets/dice2.css';

</style>

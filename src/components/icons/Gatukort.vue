

<script>
import { defineComponent, reactive } from 'vue'
import CardsData from "../../cards.json"
import ChanceTexts from "../../chanceTexts.json"


export default {
  name: "Gatukort",
  props: {
    streetindex: Number,
    onClose: Function
  },
  data() {
    return {
      name: CardsData[this.streetindex].name.toUpperCase(),
      description: CardsData[this.streetindex].description,
      cardColor: CardsData[this.streetindex].color,
      symbol: CardsData[this.streetindex].symbol,
      price: CardsData[this.streetindex].price,
      trainStation: false,
      chance: false,
      chanceText: ''
    }
  },
  methods: {
    setColor() {
      let brown = "rgb(78, 10, 5)"
      let blue = "rgb(70, 157, 225)"
      let pink = "rgb(232, 51, 116)"
      let orange = "rgb(239, 137, 81)"
      let red = "rgb(233, 51, 48)"
      let yellow = "rgb(251, 230, 83)"
      let green = "rgb(46, 108, 39)"
      let darkblue = "rgb(0, 3, 82)"
      let elem = document.getElementById("topfield")

      if (this.cardColor == "brown") {
        document.getElementById("topfield").style.backgroundColor = brown}
      else if (this.cardColor == "blue") {
        document.getElementById("topfield").style.backgroundColor = blue  
      }
      else if (this.cardColor == "pink") {
        document.getElementById("topfield").style.backgroundColor = pink
      }
      else if (this.cardColor == "orange") {
        document.getElementById("topfield").style.backgroundColor = orange
      }
      else if (this.cardColor == "red") {
        document.getElementById("topfield").style.backgroundColor = red
      }
      else if (this.cardColor == "yellow") {
        document.getElementById("topfield").style.backgroundColor = yellow
      }
      else if (this.cardColor == "green") {
        document.getElementById("topfield").style.backgroundColor = green
      }
      else if (this.cardColor == "darkblue") {
        document.getElementById("topfield").style.backgroundColor = darkblue
      }
      
    },
    
    assignChanceText(){
      let index = Math.floor(Math.random()*ChanceTexts.length)
      this.chanceText = ChanceTexts[index].text
      this.price = ChanceTexts[index].points
    },

    prepareForClose(){
      var priceString = ''
      for (var i = 0; i < this.price.length; i++) {
        console.log(this.price.charAt(i));
        if (!isNaN(this.price.charAt(i))){
          priceString = priceString + this.price.charAt(i)
        }
      }
      this.onClose(parseInt(priceString))
    }
  },
  mounted: function() {
    this.setColor()
    console.log("symbol:",this.symbol);
    if (this.symbol == "train.png") {
      this.trainStation = true
    }
    else if (this.symbol == "questionmark.png") {
      this.chance = true
      this.assignChanceText()
    }

  }
}

</script>


<template>
  <div class="card">
    
    <div v-if="this.symbol=='none'" id="topfield">
    </div>
    <h1>{{this.name}}</h1>
    <img v-if="(this.trainStation)" style="width: 100px; margin: 5px auto;" src="../../assets/train.png">
    <h2 style="margin-top: 0px;" v-if="(this.chance != true) && (this.trainStation)">{{ description }}</h2>
    <h2 style="margin-top: 40px;" v-if="(this.chance != true) && (!this.trainStation)">{{ description }}</h2>
    
    <img v-if="this.chance" style="width: 50px; margin: 5px auto;" src="../../assets/questionmark.png">
    <h2 style="width: 160px; font-size: 11px; left:3px; top: 6px;" v-if="(this.chance)">{{ chanceText }}</h2>
    
    <h3 v-if="!this.chance"> {{price}}</h3>
    <button @click="prepareForClose()" style="position: absolute; margin: 210px 29px; text-align:center; width: 110px; border-radius: 4px; border-style: solid; border-color: black;" type="button" class="btn btn-success">Avklarat</button>    
  </div>
</template>

<style scoped>
.card {
  width: 180px;
  height:280px;
  border: 6px;
  border-style: solid;
  border-color: black;
  background-color: rgb(210, 233, 220);
  border-radius: 6px;
}
#topfield{
  min-height: 40px;
  border-bottom: solid;
  border-bottom-width: 6px;
  border-color: black;
  background-color: white;
}


h1 {
  margin-top: 20px;
  font-weight: 900;
  font-size: 13px;
}

h2 {
  
  font-weight: 500;
  font-size: 13px;
}

h3 {
  position: absolute;
  top: 178px;
  width: 168px;
  text-align: center;
  font-weight: 700;
  font-size: 13px;
}


.greetings h3 {
  text-align: center;
  color: saddlebrown;
}

</style>

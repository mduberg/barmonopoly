<script>
import { onMounted, ref } from 'vue'
import Gatukort from '../components/icons/Gatukort.vue'
import Minimap from '../components/Minimap.vue'
import Dice from '../components/icons/Dice.vue'
import Dice2 from '../components/icons/Dice2.vue'
import { db } from '@/firebase'
import { doc, getDoc, updateDoc, collection, addDoc, setDoc, getDocs, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";



export default {
    name: "GameView",
    props: {
        gameId: String,
    },
    data() {
      return {
        showCard: false,
        showMinimap: false,
        showDiceButton: true,                                      
        showDice: false,
        currentMove: 0,
        randomval1:0,           
        randomval2:0,
        team1coords: [],
        team2coords: [],
        team1Index: 0,
        team1IndexFinal: 0,                  
        team2Index: 0,
        team2IndexFinal: 0,
        team1Score: 0,
        team1ScoreDisplayed: 0,
        team2Score: 0,
        team2ScoreDisplayed: 0,
        playerInTeam: 0,
        inTeam: 0,
        endDate: '',
        timeLeft: '0:00:00',
        ended: false,
        showWinner: false,
        winner: ''
      }
    },
    methods: {
      async changeMove() {
        this.updateCoordinates()
        let randomval1 = (1+ Math.floor(Math.random() * 6))
        let randomval2 = (1+ Math.floor(Math.random() * 6))
        const forbiddenIndexes = [2,4,10,12,17,20,28,30,33,35,38]
        if (forbiddenIndexes.includes((this.currentMove + randomval1 + randomval2) % 40)){
          randomval1 -= 1
        }
        this.randomval1 = randomval1
        this.randomval2 = randomval2
        this.showDiceButton = false
        this.showDice = true
        let totalval = randomval1+randomval2
        
        if (this.inTeam == 1) {
          let newIndex = (totalval + this.team1Index) % 40
          const gameRef = doc(db, "games", this.gameId);
          await updateDoc(gameRef, {
          t1position: newIndex
          });
        } else if (this.inTeam == 2) {
          let newIndex = (totalval + this.team2Index) % 40
          const gameRef = doc(db, "games", this.gameId);
          await updateDoc(gameRef, {
          t2position: newIndex
          });
        }        
      },

      moveToIndex(team, index) {
        console.log("placera team", team, "på index", index);
        let teamIcon = document.getElementById("team"+team.toString());
        let newClassName = "square"+index.toString()
        teamIcon.setAttribute("class",newClassName);
      },

      animateMove(teamToMove, stepsToAdd){
        console.log("animatar move för team", teamToMove, " med antal steg:",stepsToAdd);
        if (teamToMove == 1) {
          setTimeout(() => {
            setTimeout(async () => {
              if (this.inTeam == 1){
                const gameRef = doc(db, "games", this.gameId);
                await updateDoc(gameRef, {
                  t1card: true
                });
              }
            
            }, 200*stepsToAdd)

            for (let step = 0; step < stepsToAdd; step++) {
              // Runs 5 times, with values of step 0 through 4.
              setTimeout(() => {
                this.team1Index = (this.team1Index + 1) % 40
                this.moveToIndex(1,this.team1Index)
                //last run we update final index indicator
                if (step == stepsToAdd -1){
                  this.team1IndexFinal = this.team1Index
                }
              }, step * 200)
            }
          }, 2000)
        } else if (teamToMove == 2) {
          setTimeout(() => {
            setTimeout( async () => {
              if (this.inTeam == 2){
                const gameRef = doc(db, "games", this.gameId);
                await updateDoc(gameRef, {
                  t2card: true
                });
              }
            }, 200*stepsToAdd)

            for (let step = 0; step < stepsToAdd; step++) {
              // Runs 5 times, with values of step 0 through 4.
              setTimeout(() => {
                this.team2Index = (this.team2Index + 1) % 40
                this.moveToIndex(2,this.team2Index)
                //last run we update final index indicator
                if (step == stepsToAdd -1){
                  this.team2IndexFinal = this.team2Index
                }
              }, step * 200)
            
            }
          }, 2000)
        }
      },

      animateScoreUpdate(team, newScore){
        if (team == 1){
          let scoreDiff = newScore-this.team1Score
          this.team1Score = newScore
          let steps = Math.abs(scoreDiff)
          document.getElementById("score1").style.fontSize = "22px";
          

          for (let step = 0; step < steps; step++) {
              setTimeout(() => {
                if (step < steps -1){
                  if (scoreDiff >0){
                    this.team1ScoreDisplayed = this.team1ScoreDisplayed + 1
                  } else {
                    this.team1ScoreDisplayed = this.team1ScoreDisplayed - 1
                  }

                } else{ // last round
                  if (scoreDiff >0){
                    this.team1ScoreDisplayed = this.team1ScoreDisplayed + 1
                  } else {
                    this.team1ScoreDisplayed = this.team1ScoreDisplayed - 1
                  }
                  this.t1score = this.team1ScoreDisplayed
                  document.getElementById("score1").style.fontSize = "15px";
                }
              }, step * 1)
            
            }
        }

        if (team == 2){
          let scoreDiff = newScore-this.team2Score
          this.team2Score = newScore
          let steps = Math.abs(scoreDiff)
          document.getElementById("score2").style.fontSize = "22px";
          for (let step = 0; step < steps; step++) {
              setTimeout(() => {
                if (scoreDiff >0){
                  this.team2ScoreDisplayed = this.team2ScoreDisplayed + 1
                } else {
                  this.team2ScoreDisplayed = this.team2ScoreDisplayed - 1
                }
                
                if (step == steps -1){
                  this.t2score = this.team2ScoreDisplayed
                  document.getElementById("score2").style.fontSize = "15px";
                }
              }, step * 1 )
            
            }
        }
      },

      async onCloseFunc(sum) {
        
        //uppdatera spelarens plats
        this.updateCoordinates()
        console.log("fick en summa",sum);
        if (this.inTeam == 1) {
          let newScore = this.team1Score + sum
          const gameRef = doc(db, "games", this.gameId);
          await updateDoc(gameRef, {
          t1card: false,
          t1score: newScore

          });
        } else if (this.inTeam == 2) {
          let newScore = this.team2Score + sum
          const gameRef = doc(db, "games", this.gameId);
          await updateDoc(gameRef, {
          t2card: false,
          t2score: newScore
          });
        }
      },

      async registerPosition(position){
        //updates the current position and retrieves other teams location from firestore
        console.log("position:",position.coords.latitude);
        console.log("position:",position.coords.longitude);
        let positionArray = [position.coords.latitude, position.coords.longitude]

        const gameRef = doc(db, "games", this.gameId);
          if (this.inTeam == 1){
            await updateDoc(gameRef, {
            t1coords: positionArray
            });
            this.team1coords = positionArray
            const gameRef2 = doc(db, "games", this.gameId);
            const gameSnap = await getDoc(gameRef2);
            if (gameSnap.exists()) {
              this.team2coords = gameSnap.data().t2coords
            }
          }
          if (this.inTeam == 2){
            await updateDoc(gameRef, {
            t2coords: positionArray
            });
            this.team2coords = positionArray
            const gameRef2 = doc(db, "games", this.gameId);
            const gameSnap = await getDoc(gameRef2);
            if (gameSnap.exists()) {
              this.team1coords = gameSnap.data().t1coords
            }
          }


        


        //TODO uppdatera i firebase under users vad de har för lat och long attribut
      },


      async setToEnded(){
        const gameRef = doc(db, "games", this.gameId);
          await updateDoc(gameRef, {
          ended: true
          });
      },

      displayEnded(){
        if (this.team1Score > this.team2Score){
          this.winner = 'STRYKJÄRNEN'
        } else{
          this.winner = 'FINGERBORGARNA'
        }
        this.showWinner = true

        this.$confetti.start({
        particlesPerFrame: 2.75,
        defaultDropRate: 9,
        windSpeedMax: 0.3
        });
        setTimeout(() => {
          this.$confetti.end()
        },2000)      
        this.showCard = false
        this.ended = true
      },

      goToHome(){
        this.$router.push('/home')
      },
      displayMinimap(){
        this.showMinimap = true
        this.updateCoordinates()
      },
      updateCoordinates(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.registerPosition);
        }
      },
      hideMinimap(){
        this.updateCoordinates()
        console.log("borde gömma");
        this.showMinimap = false
        console.log(this.showMinimap);
      }
    },

    async mounted() {
      




      let currentUser = getAuth().currentUser.uid
      const docRef = doc(db, "users", currentUser);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        if (docSnap.data().team == "1"){
          this.inTeam = 1
        } else if (docSnap.data().team == "2") {
          this.inTeam = 2
        }
      } else {
        console.log("No such document!");
      }

      //load starting positions and scores
      const gameRef = doc(db, "games", this.gameId);
      const gameSnap = await getDoc(gameRef);
      if (docSnap.exists()) {
        this.team1Index = gameSnap.data().t1position
        this.team1IndexFinal = this.team1Index
        this.team2Index = gameSnap.data().t2position
        this.team2IndexFinal = this.team2Index
        this.team1Score = gameSnap.data().t1score
        this.team1ScoreDisplayed = this.team1Score
        this.team2Score = gameSnap.data().t2score
        this.team2ScoreDisplayed = this.team2Score
        this.endDate = gameSnap.data().endDate
        this.ended = gameSnap.data().ended
        console.log(gameSnap.data());
      } else {
        console.log("No such document!");
      }
      console.log(this.team1Index);
      this.moveToIndex(1,this.team1Index)
      this.moveToIndex(2,this.team2Index)
      if (this.inTeam == 1){
        this.currentMove = this.team1Index
      } else if (this.inTeam == 2){
        this.currentMove = this.team2Index
      }

      
      //update Time left every second
      
      if (!this.ended) {
        let ending = new Date(this.endDate)
        let timeNow = new Date()
        if ((ending - timeNow) > 0) {
          let timeInterval = setInterval(() => {
          var now = new Date()
          var secs = Math.floor((ending - now)/1000)
          if (secs <= 0){
            this.setToEnded()
            clearInterval(timeInterval)
          }
          var hours = Math.floor(secs/3600)
          var mins = Math.floor((secs-(hours*3600))/60)
          secs = secs - (hours*3600) - (mins*60)
          if (mins<10){
            mins = "0"+ mins.toString()
          }
          if (secs<10){
            secs = "0"+ secs.toString()
          }
          this.timeLeft = hours.toString()+':'+mins.toString()+':'+secs.toString()
          }, 1000)
        }
      }else{
        this.displayEnded()
      }
      






      // look for updates in showCard and positions
      const unsub = onSnapshot(
        doc(db, "games", this.gameId), 
        (doc) => {
          //animateScoreUpdate if a score difference is noticed in firestore
          if (this.team1Score != doc.data().t1score){
            this.animateScoreUpdate(1,doc.data().t1score)
          }
          else if (this.team2Score != doc.data().t2score) {
            console.log("rimligt");
            this.animateScoreUpdate(2,doc.data().t2score)
          }
          
          // update coordinates
          console.log("nu ändrades coords!");
          this.team1coords = doc.data().t1coords
          this.team2coords = doc.data().t2coords




          if (this.inTeam == 1){
            if (this.showCard == false && doc.data().t1card == true) {
              this.showDice = false
            }
            this.showCard = doc.data().t1card
            this.showDiceButton = !doc.data().t1card
            //detection of new move in own team
            if (this.team1IndexFinal != doc.data().t1position){
              this.showDiceButton = false
              var stepsToMove
              if (doc.data().t1position > this.team1IndexFinal){
                stepsToMove = doc.data().t1position - this.team1IndexFinal
              } else {
                stepsToMove = doc.data().t1position + 40 - this.team1IndexFinal
              }
              this.team1IndexFinal = doc.data().t1position
              //this.team1Index = doc.data().t1position
              this.showDiceButton = false
              this.showDice = true
              this.animateMove(1, stepsToMove)
              this.currentMove = (this.team1Index + stepsToMove) % 40
            }
            //detection of new move in other team
            if (this.team2IndexFinal != doc.data().t2position){
              var stepsToMove
              if (doc.data().t2position > this.team2IndexFinal){
                stepsToMove = doc.data().t2position - this.team2IndexFinal
              } else {
                stepsToMove = doc.data().t2position + 40 - this.team2IndexFinal
              }
              this.team2IndexFinal = doc.data().t2position
              //this.team1Index = doc.data().t1position
              this.animateMove(2, stepsToMove)
            }
          }

          else if (this.inTeam == 2){
            if (this.showCard == false && doc.data().t2card == true) {
              this.showDice = false
            }
            this.showCard = doc.data().t2card
            this.showDiceButton = !doc.data().t2card
            //detection of new move in own team
            if (this.team2IndexFinal != doc.data().t2position){
              this.showDiceButton = false
              var stepsToMove
              if (doc.data().t2position > this.team2IndexFinal){
                stepsToMove = doc.data().t2position - this.team2IndexFinal
              } else {
                stepsToMove = doc.data().t2position + 40 - this.team2IndexFinal
              }
              this.team2IndexFinal = doc.data().t2position
              //this.team1Index = doc.data().t1position
              this.showDiceButton = false
              this.showDice = true
              this.animateMove(2, stepsToMove)
              this.currentMove = (this.team2Index + stepsToMove) % 40
            }
            //detection of new move in other team
            if (this.team1IndexFinal != doc.data().t1position){
              var stepsToMove
              if (doc.data().t1position > this.team1IndexFinal){
                stepsToMove = doc.data().t1position - this.team1IndexFinal
              } else {
                stepsToMove = doc.data().t1position + 40 - this.team1IndexFinal
              }
              this.team1IndexFinal = doc.data().t1position
              //this.team1Index = doc.data().t1position
              this.animateMove(1, stepsToMove)
            }


          }

          if (doc.data().ended){
            this.ended = true
            this.displayEnded()
          }

          
        });

        this.updateCoordinates()
    },
    components: { Minimap, Gatukort, Dice, Dice2 }
}


</script>
<template>
  <button type="button" class="btn btn-outline-secondary btn-sm" style="height: 35px; width: 35px; position: absolute; top: 0px; left: 0px;" @click="goToHome"><span class="material-symbols-outlined">
arrow_back
</span></button>
  <button type="button" class="btn btn-outline-secondary btn-sm" style="height: 35px; width: 35px; background-color: green; position: absolute; top: 0px; left: 44px;" @click="displayMinimap()"><span style="width: 24px; height: 24px; top: 1px; right: 3px; color: white;" class="material-symbols-outlined">
  map
  </span></button>

  <div class="scoreSquare">
    <div style="display: flex; flex-direction: row;">
      <div class="teamTitle">
        <div class="headerText" style="background-color: rgb(200, 30, 30);">STRYKJÄRNEN</div>
        <div class="scoreStyle" id="score1">{{this.team1ScoreDisplayed}}</div>

      </div>
      <div class="teamTitle">
        <div class="headerText" style="background-color: rgb(30, 30, 200);">FINGERBORGARNA</div>
        <div class="scoreStyle" id="score2">{{this.team2ScoreDisplayed}}</div>
      </div>

    </div>

    

  </div>
  <div class="timeBoard">
      Återstående tid: {{ this.timeLeft }}
    </div>

    <Transition name="bounce">
  <Minimap v-if="showMinimap" key="1" :team1coords="this.team1coords" :team2coords="this.team2coords" :hideFunc="this.hideMinimap"></Minimap>
</Transition>

  <div class="gamepage">
    <Transition name="bounce">
    <Gatukort v-if="this.showCard" key="1" style="position: fixed; margin: 0 auto; top: calc(50vh - 100px); z-index: 20;" :streetindex="this.currentMove" :onClose="this.onCloseFunc"></Gatukort>
    </Transition>

    <Transition name="winner">
    <div class="winnerBox" v-if="this.showWinner"> 
      <div class="winnerText">And the winner is<br />{{ this.winner }}!</div>
    </div>
  </Transition>


    <div class="spelplanssquare">
      <div v-if="this.showDice" class="diceBox">
      <Dice style="transform: scale(0.2);" :randomval="this.randomval1"></Dice>
      <Dice2 style="transform: scale(0.2);" :randomval="this.randomval2"></Dice2>
      </div>
      <button v-if="showDiceButton" :disabled="this.ended" @click="this.changeMove()" id="diceButton" type="button" class="btn btn-danger">LÅT OSS FESTA</button>
      <img id="team1" class="square0" src="../assets/stryk.png">
      <img id="team2" class="square0" src="../assets/fingerborg.png">
      <img id="spelplan" src="../assets/spelplan.png">
    </div>
  </div>
</template>


<style scoped>
@import '../assets/boardsquares.css';

.winnerBox{
  
  width: 370px;
  height: 220px;
  
  position: fixed;
  top: 270px;
  z-index: 5;
  background-color: rgb(200, 234, 190);
  border-radius: 10px;
  border-color: green;
  border-style: solid;
  border-width: 8px;


}

.winnerText{
  font-size: 40px;
  font-weight: 700;
  margin-top:30px
}

.timeBoard{
  margin: 0 auto 10px;
  font-weight: 600;
}


.scoreStyle{
  margin: 10px;
  color: white;
  
}

#score1{
  font-size: 15px;
  transition: 0.4s;
}
#score2{
  font-size: 15px;
  transition: 0.4s;
}

.headerText{
  border-bottom-style: solid;
  border-bottom-color: white;
  border-bottom-width: 2px;
  
}


.teamTitle{
    width: 100%;
    text-align: center;
    height: 93px;
    border-radius: 7px;
    color: white;
    font-weight: 600;
    border-radius: 10px;
    border: 2px;
    border-style: solid;
    border-color: white;
    margin-bottom: 20px;    
}


@media (max-width: 500px) {

  .scoreSquare{
    height: 100px;
    width: calc(100vw - 65px);
    margin: 10px auto;
    padding-bottom: 10px;
    border-radius: 10px;
    border: 3px;
    border-style: solid;
    background-color: rgb(79, 79, 79);
    border-color: red;
  }
  }
  @media (min-width: 501px) {

.scoreSquare{
  height: 100px;
  width: 400px;
  margin: 10px auto;
  padding-bottom: 10px;
  border-radius: 10px;
  border: 3px;
  border-style: solid;
  border-color: red;
  background-color: rgb(79, 79, 79);
}
}


.diceBox{
  display:flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  z-index: 2;
  width: 300px;
  left: calc(50% - 150px);
  top: calc(50% - 100px);
}

#diceButton{
  border-radius: 10px;
  width: 140px;
  height: 50px;
  font-size: 13px;
  font-weight: 600;
  position: absolute;
  z-index: 2;
  left: calc(50% - 70px);
  top: calc(50% - 25px);
}

.gamepage{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media (max-width: 700px) {
  .spelplanssquare{
    margin: 0 auto;
    width: calc(100vw - 65px);
    height: calc(100vw -65px);
    border: 6px;
    border-style: solid;
    border-color: red;
    position: relative;
}
#spelplan {
    transition: 0.6s;
    object-fit: contain;
    max-width: calc(100vw - 78px);
    max-height: calc(100vw - 78px);
    position:relative;
  }
}
@media (min-width: 701px) {
  .spelplanssquare{
    margin: 0 auto;
    width: 635px;
    height: 635px;
    border: 6px;
    border-style: solid;
    border-color: red;
    position: relative;

    
  }
  #spelplan {
    transition: 0.6s;
    object-fit: contain;
    max-width: 622px;
    max-height: 622px;
    position:relative;
  }
}
  

  #team1{
    transition: 0.15s;
    width: calc((100%)/9);
    position: absolute;
    z-index: 2;
  }

  #team2{
    transition: 0.15s;
    width: calc((100%)/9);
    position: absolute;
    z-index: 2;
  }
  .startsquare {
    transform: rotate(-180deg);

  }

  .startsquare2 {
    transform: rotate(180deg);
    
    
  }

  .winner-enter-active {
  animation: bounce-in 1.5s;
  }
  
  .winner-leave-active {
    animation: bounce-in 0.3s reverse;
  }

  
  .bounce-enter-active {
  animation: bounce-in 0.5s;
  }
  
  .bounce-leave-active {
    animation: bounce-in 0.3s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
}


</style>

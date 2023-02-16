<script>
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { doc, updateDoc, collection, addDoc, setDoc, getDocs} from "firebase/firestore";

import { db } from '@/firebase'



export default {
    name: 'CreateGameView',
    data() {
        return {
            error: {
                show: false,
                msg: ''
            },

            game: {
                name: '',
                creator: '',
                password: '',
            }
        }
    },

    methods: {
        async createGame(){
            let currentUser = getAuth().currentUser

            if ((this.game.name == '' || this.game.password == '')){
                this.error.msg = 'Felaktig inmatning. Kontrollera namn och lösenord.'
                this.error.show = true
            } else{
                console.log("current user: ",getAuth().currentUser);
                console.log(this.game);
                //TODO kolla om det finns ett spel med samma namn eller samma lösen först
                
                let similarGame = false
                console.log("försöker hämta data från games");
                const docQuerySnapshot = await getDocs(collection(db, "games"));
                docQuerySnapshot.forEach((doc) => {
                    console.log("pw: ",doc.data().password);
                    if ((doc.data().name == this.game.name) || (doc.data().password == this.game.password)){
                        similarGame = true
                        console.log("similargame true");
                    }
                });
                if (similarGame) {
                    "similar game är true"
                    this.error.msg = 'Spelnamnet eller lösenordet är upptaget, försök igen.'
                    this.error.show = true
                } 
                else{
                    const docRef = await addDoc(collection(db, "games"), {
                        name: this.game.name,
                        creator: this.game.creator,
                        password: this.game.password,
                        t1score: 0,
                        t2score: 0,
                        t1position: 0,
                        t2position: 0,
                        t1card: false,
                        t2card: false,
                        active: false,
                        endDate: '',
                        ended: false,
                    })



                    const querySnapshot = await getDocs(collection(db, "users"));
                    
                    const userRef = doc(db, "users", currentUser.uid);
                    
                    await updateDoc(userRef, {
                        inGame: docRef.id
                    });

                    //TODO lägga till spelet under skaparens user instans, some inGame= docRef, team: ''
                    this.$router.push("/gamelounge/"+docRef.id)
                }

            }

        }
    },

    mounted() {
        this.game.creator = getAuth().currentUser.displayName
        console.log("creator is: ", this.game.creator);

        
    }

}

</script>

<template>
    <div class="createGameContent">
        <div style="text-align: left; width:90%; margin:0 auto;">
        <div style="margin-top:20px;">
            <label style="margin-bottom: -2px;" for="gameNameField">Spelets namn:</label>
            <input v-model="game.name" type="text" id="gameNameField" class="form-control" >
        </div>

        <div style="margin-top:36px;">
            <label style="margin-bottom: -2px;" for="gamePWField">Lösenord för att ansluta:</label>
            <input v-model="game.password" type="text" id="gamePWField" class="form-control" >
        </div>


      <div style="text-align: center; margin-top: 36px;">
      <button @click="this.createGame()" id="createButton" class="btn btn-primary">Skapa</button>
      
      </div> 
    </div>
   </div>
   <div v-if="this.error.show" style="text-align: center; width: 400px; margin: 40px auto;" class="alert alert-primary" role="alert">
        {{this.error.msg}}
  </div>
</template>


<style scoped>

.createGameContent {
    display: block;
    margin: 0 auto;
    width: 320px;
    height: 300px;
    background-color: rgb(177, 190, 243);
    border: 3px;
    border-style: solid;
    border-color: rgb(98, 96, 96);
    margin-top: 30px;
    border-radius: 14px;
}

#createButton{ 
    background-color: rgb(27, 0, 182)
}
#createButton:hover{
    background-color: rgb(23, 4, 132)
}

</style>
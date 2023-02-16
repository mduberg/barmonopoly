
<script>
import { collection, getDocs, doc, updateDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged} from "firebase/auth";

import { db } from '@/firebase'



export default {
  name: 'JoinGameView',
  data() {
    return{
        currentUserID: '',
        password: '',
        error: {
            show: false,
            msg: ''
        },
    }
  },
  methods: {
    navigateTo(link){
      this.$router.push('/'+link)
    },
    async verifyPassword(){
        this.error.show = false
        this.error.msg = ''
        var gameIDFound = ''
        var gameActive = null
        const querySnapshot = await getDocs(collection(db, "games"));
        querySnapshot.forEach((doc) => {
            if (doc.data().password == this.password){
                console.log(doc.id);
                gameIDFound = doc.id
                gameActive = doc.data().active
            }
        });
        if (gameIDFound == ''){
            this.error.msg = "Det finns inget spel med detta lösenord. Försök igen."
            this.error.show = true
        } else if ((gameIDFound != '') && (gameActive == true)){
            this.error.msg = "Detta spel har redan startat."
            this.error.show = true
        }
        
        else {
            const userRef = doc(db, "users", this.currentUserID);
            await updateDoc(userRef, {
                inGame: gameIDFound
            });
           
            this.navigateTo("gamelounge/"+gameIDFound)
        }
    }
  },
  mounted() {
    this.currentUserID = getAuth().currentUser.uid
  }
}
</script>


<template>

    <div class="centerItems">
        <h2>Skriv in lösenordet för att gå med i spelet:</h2>
        
        <input style="width: 250px; margin: 20px auto;" v-model="this.password" class="form-control" id="exampleInputPassword1">
        <button @click="this.verifyPassword()" type="button" class="btn btn-primary">Gå med</button>

        <div v-if="this.error.show" style="text-align: center; width: 450px; margin: 20px auto;" class="alert alert-primary" role="alert">
        {{this.error.msg}}
        </div>
    </div>

</template>
<style scoped>

h2{
    color: rgb(0, 0, 0);
    font-size: 17px;
}

.centerItems{
    text-align: center;
    margin-top: 40px;
}

</style>



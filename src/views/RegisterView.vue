<script>
import { FirebaseError } from "@firebase/util";
import { getAuth, updateProfile, createUserWithEmailAndPassword} from "firebase/auth";
import { toHandlers } from "vue";
import { db } from '@/firebase'
import { collection, getDocs, setDoc, doc} from "firebase/firestore";

export default {
  name: 'RegisterView',

  data() {
    return {
      registerForm: {
        username: '',
        email: '',
        password: ''
      },
      error: {
        show: false,
        msg: ''
      },
      showSpinner: false
    }
  },

  methods: {
    async registerNewUser() {
        this.showSpinner = true
        this.error.show = false
        const auth = getAuth();
      
        if (this.registerForm.username == ""){
        this.showSpinner = false
        this.error.msg = "Ange ett användarnamn."
        this.error.show = true
        }
        
        var noSuchUser = true

        const teamsFound = await getDocs(collection(db, "users"));
        teamsFound.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().username);
        if (this.registerForm.username == doc.data().username){
            this.showSpinner = false
            console.log("hittade en otillåten matching")
            noSuchUser = false
            this.error.msg = "Användarnamnet är upptaget. Välj ett annat och försök igen."
            this.error.show = true
            return
        }
        });

      
      //todo kolla om nån annan har samma username i Users
        createUserWithEmailAndPassword(auth, this.registerForm.email, this.registerForm.password)
        .then( async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("registered ",user);

            const auth = getAuth();
            updateProfile(auth.currentUser, {
              displayName: this.registerForm.username, tenantId: -1
            }).then(() => {
              this.showSpinner = false
              console.log("added a username to firebase auth users");
              this.$router.push("/home")
            }).catch((error) => {
              this.showSpinner = false
              console.log("an error occcured", error);
            });

            await setDoc(doc(db, "users", user.uid), {
                username: this.registerForm.username,
                team: -1,
                inGame: '',
            });
        })
        .catch((error) => {
          this.showSpinner = false
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage);

          if (errorCode == "auth/invalid-email"){
            this.error.msg = "Ogiltig emailadress"
            this.error.show = true
          }
          else if (errorCode == "auth/user-not-found"){
            this.error.msg = "Ingen sådan användare hittades. Kontrollera emailadressen eller registrera ett nytt konto."
            this.error.show = true
          }
          else if (errorCode == "auth/wrong-password"){
            this.error.msg = "Felaktigt lösenord."
            this.error.show = true
          }
          else {
            this.error.msg = "Felaktigt lösernord eller emailadress."
            this.error.show = true
          }
        }); 
    }
  }
}

</script>
<template>
    <div class="registerContent">
      <div v-if="this.showSpinner" style="position: fixed; z-index: 4; font-size: 22px; height: 70px; width: 70px; left: calc(50vw - 35px); top: calc(50vh - 90px)" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
        <div style="text-align: left; width:90%; margin:0 auto;">
        <div style="margin-top:30px;">
            <input v-model="registerForm.username" type="text" class="form-control"  placeholder="Användarnamn">
        </div>
      
        <div style="margin-top:22px;">
            <input v-model="registerForm.email" type="email" class="form-control" placeholder="Email">
        </div>
        <div style="margin-top:22px;">
            <input v-model="registerForm.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Lösenord">
        </div>

      <div style="text-align: center; margin-top: 25px;">
      <button @click="this.registerNewUser()" style="background-color: rgb(27, 0, 182);" class="btn btn-primary">Registrera</button>
      
      </div> 
    </div>
   </div>
   <div v-if="this.error.show" style="text-align: center; margin-top: 40px;" class="alert alert-primary" role="alert">
        {{this.error.msg}}
  </div>
</template>

<style>
.registerContent{
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 280px;
  background-color: rgb(144, 144, 225);
  border: 3px;
  border-style: solid;
  border-color: rgb(27, 0, 182);
  margin-top: 30px;
  border-radius: 14px;

}
</style>

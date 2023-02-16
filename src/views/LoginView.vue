<script>
import { FirebaseError } from "@firebase/util";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { toHandlers } from "vue";

export default {
  name: 'LoginView',

  data() {
    return {
      loginForm: {
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
    signIn() {
      this.showSpinner = true
      this.error.show = false
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.loginForm.email, this.loginForm.password)
        .then((userCredential) => {
          this.showSpinner = false
          // Signed in 
          const user = userCredential.user;
          console.log("signed in ",user);
          this.$router.push("/home")
          // ...
        })
        .catch((error) => {
          this.showSpinner = false
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)

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


          console.log(errorCode, " --> ",errorMessage);
        }); 
    },
    navigateToRegister() {
      this.$router.push("/register")
    }
  }
}

</script>
<template>
    <div class="loginContent">
      <div v-if="this.showSpinner" style="position: fixed; z-index: 4; font-size: 22px; height: 70px; width: 70px; left: calc(50vw - 35px); top: calc(50vh - 90px)" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div style="text-align: left; width:90%; margin:0 auto;">
      <div style="margin-top:30px;">
        <input v-model="loginForm.email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
      </div>
      <div style="margin-top:30px;">
        <input v-model="loginForm.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Lösenord">
      </div>

      <div style="text-align: center; margin-top: 15px;">
      <button @click="this.signIn()"  class="btn btn-primary">Logga in</button>
      
      </div> 
    </div>
    <div style="text-align: center; margin-top: 10px;">
    <button @click="this.navigateToRegister()" type="submit" class="btn btn-secondary">Registrera</button>
    </div>
   </div>
   <div v-if="this.error.show" style="text-align: center; margin-top: 40px; max-width: 550px; margin: 40px auto;" class="alert alert-primary" role="alert">
        {{this.error.msg}}
  </div>
</template>

<style>
.loginContent{
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 260px;
  background-color: rgb(255, 193, 193);
  border: 3px;
  border-style: solid;
  border-color: rgb(255, 0, 0);
  margin-top: 30px;
  border-radius: 14px;

}
</style>

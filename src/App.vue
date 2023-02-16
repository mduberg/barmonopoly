<script>
import { routerKey, RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { onMounted, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { db } from '@/firebase'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import exp from 'constants'

export default {
  data() {
      return {
        isLoggedIn: false
      }
    },
    methods: {
      handleSignOut() {
        let auth = getAuth()
        signOut(auth).then(() => {
          this.$router.push("/")
        })
      }
    },
    mounted() {
      let auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.isLoggedIn = true
        } else {
          this.isLoggedIn = false
        }
      })
    }
}

</script>

<template>
  <div class="colclass">
    <header>
      <div class="colclass">
        <img alt="Vue logo" class="logo" src="@/assets/bmlogo.png" width="300" height="100" />
        
        <button type="button" class="btn btn-outline-secondary btn-sm" style="position: absolute; top: 0px; right: 0px;" v-if="this.isLoggedIn" @click="handleSignOut">Sign out</button>
        
    </div>
    </header>

    <RouterView />
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 4px;
}

.colclass{
  display: flex;
  flex-direction: column;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 3px;
}


nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

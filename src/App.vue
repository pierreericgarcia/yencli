<template>
  <div>
    <transition name="fade" mode="out-in">
      <component :is="Object.keys($store.state.user).length === 0 ? 'NavBarLogin' : 'NavBar'"></component>
    </transition>
    <router-view v-if="$store.state.user !== null" :debts="debts"></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import NavBarLogin from './components/NavBarLogin.vue';
import {db} from './firebase';
import Firebase from 'firebase';

export default {
  data() {
    return {
      debts: [],
    }
  },
  components: {
    NavBar,
    NavBarLogin
  },
  beforeCreate() {
       Firebase.auth().onAuthStateChanged(function(user) {

         if (user) {
           this.$store.state.user = user;
           this.$bindAsArray('debts', db.ref('users/' + user.uid + '/debts'));
         } else {
           Firebase.auth().signInAnonymously().catch(console.error);
         }

         if (user && this.$route.path === '/login') {
          this.$router.replace('/debts');
        } else if (!user && this.$route.path !== '/login') {
          this.$router.replace('/login');
        }

       }.bind(this))
     },
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Poppins';
    font-size: 62.5%;
  }

  .fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.2s;
}

.fade-leave {

}

.fade-leave-active {
  transition: opacity 0.2s;
  opacity: 0;
}
</style>

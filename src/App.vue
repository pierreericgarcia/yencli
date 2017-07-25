<template>
  <div>
    <component :is="Object.keys($store.state.user).length === 0 ? 'NavBarLogin' : 'NavBar'"></component>
    <router-view v-if="$store.state.user !== null" :debts="debts"></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import NavBarLogin from './components/NavBarLogin.vue';
import {db} from './firebase';
import Firebase from 'firebase';

export default {
  components: {
    NavBar,
    NavBarLogin
  },
  beforeRouteEnter (to, from, next) {
    next();
  },
  beforeCreate: function() {
       Firebase.auth().onAuthStateChanged(function(user) {

         if (user) {
           this.$store.state.user = user
           this.$bindAsArray('debts', db.ref('users/' + user.uid + '/debts'))
           this.$bindAsArray('clients', db.ref('users/' + user.uid + '/debts'))
         } else {
           Firebase.auth().signInAnonymously().catch(console.error)
         }

         if (user && this.$route.path === '/login') {
          this.$router.replace('/debts');
        } else if (!user && this.$route.path !== '/login') {
          this.$router.replace('/login');
        }

       }.bind(this))
     },
     data() {
       return {
         debts: [],
         clients: []
       }
     }
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
</style>

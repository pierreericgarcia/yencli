<template>
  <div>
    <NavBar></NavBar>
    <button @click="signInPE">Sign In</button>
    <button @click="signInMY">Sign In</button>
    <button @click="signOut">Sign Out</button>
    <router-view v-if="user !== null" :debts="debts"></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import {db} from './firebase';
import Firebase from 'firebase';

Firebase.database.enableLogging(false) // toggle on for debug (it's noisy)

export default {
  components: {
    NavBar
  },
  beforeCreate: function() {

       // Setup Firebase onAuthStateChanged handler
       //
       // https://firebase.google.com/docs/reference/js/firebase.auth.Auth
       // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onAuthStateChanged
       Firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
           this.user = user
           // https://github.com/vuejs/vuefire/blob/master/src/vuefire.js#L169
           this.$bindAsArray('debts', db.ref('users/' + user.uid + '/debts'))
           this.$bindAsArray('clients', db.ref('users/' + user.uid + '/debts'))
         } else {
           // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInAnonymously
           Firebase.auth().signInAnonymously().catch(console.error)
         }
       }.bind(this))

     },
     data() {
       return {
         user: {},
         debts: [],
         clients: []
       }
     },
     methods: {
       signInPE() {
         Firebase.auth().signInWithEmailAndPassword('garciapierreeric@gmail.com', 'Akatsuki1');
       },
       signInMY() {
         Firebase.auth().signInWithEmailAndPassword('khoujamyriam@gmail.com', 'Akatsuki1');
       },
       signOut() {
         Firebase.auth().signOut();
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

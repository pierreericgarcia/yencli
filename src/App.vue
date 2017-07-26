<template>
  <div>
    <transition name="fade" mode="out-in">
      <component :is="Object.keys($store.state.user).length === 0 ? 'NavBarLogin' : 'NavBar'"></component>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view v-if="$store.state.user !== null" :debts="debts"></router-view>
    </transition>
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
  font-size: 62.5%;
}

body {
  font-family: 'Poppins';
  font-size: 1.6rem;
}

h1 {
  font-weight: 300;
  margin-bottom: 1.4rem;
}

h2 {
  font-size: 1.4rem;
  margin-bottom: 1.8rem;
}

a {
  color: black;
}

input[type=text], input[type=email], input[type=password], input[type=number], input[type=date] {
  border: 1px solid #444444;
  font-size: 1.6rem;
  margin-bottom: 1.4rem;
  padding: 1rem;
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

.button {
  background-color: #22b573;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 1.2;
  margin-bottom: 1.4rem;
  padding: 1rem;
  text-transform: uppercase;
}

.button--danger {
  background-color: #BE5356;
}

.button--neutral {
  background-color: #666666;
}

</style>

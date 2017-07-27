<template>
  <div class="boxed-view__box">
    <h3>Inscription :</h3>
    <form class="boxed-view__form">
      <label>email:</label>
      <input v-model="email" type="text"/>
      <label>password:</label>
      <input v-model="password" type="password"/>
      <button @click.prevent="signUp" class="button">Sign Up</button>
    </form>
    <p>
      T'as déjà un compte ? <a @click="$store.state.haveAccount = true">Connecte-toi</a>.
    </p>
  </div>
</template>

<script>
import Firebase from 'firebase';
import {db} from '../../firebase';

export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
     methods: {
       signUp() {
         Firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
       },
     }
}
</script>

<style>
</style>

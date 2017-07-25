<template>
  <div class="boxed-view__box">
    <h3>Connexion :</h3>
    <form class="boxed-view__form">
      <label>email:</label>
      <input v-model="email" type="text"/>
      <label>password:</label>
      <input v-model="password" type="password"/>
      <button @click.prevent="signIn">Sign In</button>
    </form>
    Need an account ? Sign up <button @click="$store.state.haveAccount = false">here</button>.
  </div>
</template>

<script>
import Firebase from 'firebase';

export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
     methods: {
       signIn() {
         var vm = this;
         Firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
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

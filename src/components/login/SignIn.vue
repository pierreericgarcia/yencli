<template>
  <div class="boxed-view__box">
    <h3>Connexion :</h3>
    <form class="boxed-view__form">
      <label>email:</label>
      <input v-model="email" type="text"/>
      <label>password:</label>
      <input v-model="password" type="password"/>
      <button @click.prevent="signIn" class="button">Sign In</button>
    </form>
    <p>
      Need an account ? Sign up <a @click="$store.state.haveAccount = false">here</a>.
    </p>
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

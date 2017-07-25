<template>
  <div>
    <form>
      <label>email:</label>
      <input v-model="email" type="text"/>
      <label>password:</label>
      <input v-model="password" type="password"/>
      <button @click.prevent="signUp">Sign Up</button>
    </form>
    Already have an account ? Sign in <button @click="$store.state.haveAccount = true">here</button>.
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
       signUp() {
         Firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
       },
     }
}
</script>

<style>
</style>

<template>
  <div>
    <NavBar></NavBar>
    <router-view :debts="debts"></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import {db} from './firebase';

export default {
  data() {
    return {
      debts: []
    }
  },
  components: {
    NavBar
  },
  firebase: {
    debts: {
      source: db.ref('debts'),
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      }
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

<template>
  <div class="container">
    <div class="nav-container">
      <router-link tag="div" to="/" class="nav-item">
          <img
          src="../assets/yencli-logo.png"
          height="30px"
          width="30px" />
      </router-link>
      <router-link tag="div" to="/debts" class="nav-item">
          <img
          src="../assets/list.svg"
          height="30px"
          width="30px" />
          <span>Mes creds</span>
      </router-link>
      <router-link tag="div" to="/creator" class="nav-item">
        <img
        src="../assets/plus.svg"
        height="30px"
        width="30px" />
        <span>Nouveau cred</span>
      </router-link>
      <router-link tag="div" to="/signin" class="nav-item" @click.native="signOut">
        <img
        src="../assets/power.svg"
        height="30px"
        width="30px" />
        <span>Se déconnecter</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase';

export default {
  methods: {
    signOut() {
      Firebase.auth().signOut();
      window.location.reload();
    }
  }
}
</script>

<style>
  .container {
    background-color: #333333;
    width: 100%;
  }

  .nav-container {
    margin: auto;
    padding: 15px;
    display: flex;
    width: 80%;
    justify-content: space-between;
    color: white;
    font-size: 1.5rem;
  }

  .nav-item {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  img {
    margin-right: 10px;
  }

  @media screen and (max-width: 640px) {
    .nav-item span {
      display: none;
    }
  }
</style>

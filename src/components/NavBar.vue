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
          Mes creds
      </router-link>
      <router-link tag="div" to="/creator" class="nav-item">
        <img
        src="../assets/plus.svg"
        height="30px"
        width="30px" />
        Nouveau cred
      </router-link>
      <router-link tag="div" to="/clients" class="nav-item">
        <img
        src="../assets/user.svg"
        height="30px"
        width="30px" />
        Mes yenclis
      </router-link>
      <router-link tag="div" to="/" class="nav-item">
        <img
        src="../assets/power.svg"
        height="30px"
        width="30px" />
        Se déconnecter
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

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
</style>

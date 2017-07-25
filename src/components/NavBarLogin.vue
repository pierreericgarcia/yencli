<template>
  <div class="container">
    <div class="nav-container">
      <div class="nav-item">
        <p>
          yencli
        </p>
          <img
          src="../assets/yencli-logo.png"
          height="30px"
          width="30px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
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
    font-size: 3rem;
  }

  .nav-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: auto;
  }

  img {
    margin-right: 10px;
    margin-left: 10px;
  }
</style>

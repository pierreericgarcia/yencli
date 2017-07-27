<template>
  <div class="debt-item--empty">
    <p>Aucun cred impayé. Clique sur CREATE pour en créer un nouveau.</p>
    <br />
    <button @click="$router.replace('/creator')" class="button button--success">CREATE</button>
  </div>
</template>

<script>

export default {
}
</script>

<style>

.debt-item--empty {
  margin: 1.4rem;
  padding: 2rem;
  font-size: 1.6rem;
  border: .1rem solid black;
  border-radius: 15px;
  background-color: #F3F3F3;
  text-align: center;
}

</style>

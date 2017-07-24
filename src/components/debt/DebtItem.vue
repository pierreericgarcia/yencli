<template>
  <div class="debt-item">
    <p>{{debt.amount}}</p>
    <p>{{debt.client}}</p>
    <p>{{debt.refundAt}}</p>
    <button @click="$emit('debtEdit', debt)">Edit</button>
  </div>
</template>

<script>
export default {
  props: {
    debt: {
      type: Object
    }
  }
}
</script>

<style>
  .debt-item {
    padding: 20px;
    font-size: 1.6rem;
    border: .1rem solid black;
  }
</style>

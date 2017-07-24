<template>
  <div>
    <div class="header-debt">
      <p>
        Total: {{computeAmount()}}€
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    debts: {
      type: Array
    }
  },
  methods: {
    computeAmount() {
      let debtSum = 0;
      this.debts.forEach((debt) => {
        debtSum += debt.amount;
      });
      return debtSum;
    }
  }
}
</script>

<style>
  .header-debt {
    padding: 20px;
    font-size: 1.8rem;
    width: 30%;
    margin: auto;
    text-align: center;
  }
</style>

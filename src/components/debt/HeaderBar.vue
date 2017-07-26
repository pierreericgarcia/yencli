<template>
  <div>
    <div class="header-debt">
      <p class="total-amount">
        Total: <span>{{computeAmount()}}€</span>
      </p>
      <label>Montrer les creds payés : </label><input type="checkbox" v-model="$store.state.includePaidOnes" />
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
      if (this.$store.state.includePaidOnes === true) {
        this.debts.forEach((debt) => {
          debtSum += debt.amount;
        });
        return debtSum;
      } else {
        this.debts.filter(function(debt) {
          return debt.status === "pending";
        }).forEach((debt) => {
          debtSum += debt.amount;
        });
        return debtSum;
      }
    }
  }
}
</script>

<style>
  .header-debt {
    padding: 20px;
    font-size: 1.8rem;
    width: 70%;
    margin: auto;
    text-align: center;
  }

  .total-amount {
    font-size: 2rem;
    font-weight: bold;
  }

  .total-amount span {
    color: #22b573;
  }
</style>

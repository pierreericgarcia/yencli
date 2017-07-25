<template>
  <div class="debt-item">
    <p>{{debt.amount}}</p>
    <p>{{debt.client}}</p>
    <p>{{debt.refundAt}}</p>
    <button @click="$emit('debtEdit', debt)">Edit</button>
    <button @click="payDebt">Paid</button>
  </div>
</template>

<script>
import {db} from '../../firebase';

export default {
  props: {
    debt: {
      type: Object
    }
  },
  methods: {
    payDebt() {
      db.ref('users/' + this.$store.state.user.uid + '/debts/' + this.debt.id).update({
        "status": "paid"
      });
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

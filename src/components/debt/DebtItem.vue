<template>
  <div class="debt-item" :class="debt.status === 'paid' ? 'debt-item--paid' : 'debt-item'">
    <p>{{debt.amount}}€</p>
    <p>{{debt.client}}</p>
    <p>{{debt.refundAt}}</p>
    <br />
    <button @click="$emit('debtEdit', debt)" class="button button--neutral">Edit</button>
    <button v-if="debt.status === 'pending'"  @click="payDebt" class="button">Paid</button>
    <button v-else  @click="unpayDebt" class="button button--danger">Unpaid</button>
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
    },
    unpayDebt() {
      db.ref('users/' + this.$store.state.user.uid + '/debts/' + this.debt.id).update({
        "status": "pending"
      });
    },
  }
}
</script>

<style>
  .debt-item {
    margin: 1.4rem;
    padding: 2rem;
    font-size: 1.6rem;
    border: .1rem solid black;
    border-radius: 15px;
    background-color: #F3F3F3;
  }

  .debt-item--paid {
    margin: 1.4rem;
    padding: 2rem;
    font-size: 1.6rem;
    border: .1rem solid black;
    background-color: #e1fde1;
  }
</style>

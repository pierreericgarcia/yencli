<template>
  <div class="debt-item" :class="debt.status === 'paid' ? 'debt-item--paid' : 'debt-item'">
    <p class="debt-detail--amount">{{debt.amount}}€</p>
    <p class="debt-detail--client">{{debt.client}}</p>
    <p v-if="debt.status === 'paid'">Remboursé</p>
    <p v-else>Remboursement {{moment()}}</p>

    <br />
    <button @click="$emit('debtEdit', debt)" class="button button--neutral">Edit</button>
    <button v-if="debt.status === 'pending'"  @click="payDebt" class="button">Paid</button>
    <button v-else  @click="unpayDebt" class="button button--danger">Unpaid</button>
  </div>
</template>

<script>
import {db} from '../../firebase';
import moment from 'moment';

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
    moment() {
      return moment(this.debt.refundAt).lang("fr").endOf().fromNow();
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

  .debt-detail--amount {
    font-size: 2rem;
    font-weight: bold;
  }

</style>

<template>
  <div class="boxed-view">
    <form class="boxed-view__box">
      <label>Montant :</label>
      <input v-model.number="amount" type="number"/>
      <br />
      <label>Client :</label>
      <input v-model="client" type="text" />
      <br />
      <label>Date de remboursement :</label>
      <input v-model="refundAt" type="date" />
      <br />
      <button @click.prevent="createDebt">Create</button>
    </form>
  </div>
</template>

<script>
import {db} from '../../firebase';

export default {
  data() {
    return {
      client: '',
      amount: 0,
      refundAt: Date()
    }
  },
  methods: {
    createDebt() {
      var vm = this;
      console.log('hey');
      var debtKey = '';
      db.ref('users/' + vm.$store.state.user.uid + '/debts').push({
        "amount": this.amount,
        "client": this.client,
        "createdAt": Date(),
        "mode": 'DebtItem',
        "refundAt": this.refundAt,
        "id": '',
        "status": "pending"
      }).then(function(snapshot) {
        var debtKey = snapshot.key;
        db.ref('users/' + vm.$store.state.user.uid + '/debts/' + debtKey).update({
          "id": debtKey
        });
      });
    }
  }
}
</script>

<style>

</style>

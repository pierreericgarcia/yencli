<template>
  <div class="boxed-view">
    <div class="boxed-view__box">
      <form class="boxed-view__form">
        <label>Client :</label>
        <input v-model="client" type="text" />
        <br />
        <label>Montant :</label>
        <input v-model.number="amount" type="number"/>
        <br />
        <label>Date de remboursement :</label>
        <input v-model="refundAt" type="date" />
        <br />
        <button @click.prevent="createDebt" class="button">Create</button>
      </form>
    </div>
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
  .boxed-view {
    align-items: center;
    justify-content: center;
    background: #F3F3F3;
    display: flex;
    width: 100vw;
    height: 100vh;
  }

  .boxed-view__box {
  background-color: white;
  padding: 2.4rem;
  text-align: center;
  width: 24rem;
}

.boxed-view__form {
  display: flex;
  flex-direction: column;
}
</style>

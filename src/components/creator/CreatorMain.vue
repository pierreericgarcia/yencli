<template>
  <div class="boxed-view">
    <div class="boxed-view__box">
      <h3>Nouveau cred :</h3>
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
      <modal name="success" :width="'40%'">
        <div class="success-modal">
          <img src="../../assets/check.svg"/>
          <p>Nouveau cred créé !</p>
        </div>
      </modal>
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
      refundAt: null
    }
  },
  components: {
  },
  methods: {
    createDebt() {
      var vm = this;
      var debtKey = '';
      db.ref('users/' + vm.$store.state.user.uid + '/debts').push({
        "amount": this.amount,
        "client": this.client,
        "createdAt": new Date().getTime(),
        "mode": 'DebtItem',
        "refundAt": this.refundAt,
        "id": 'bobo',
        "status": "pending"
      }).then(function(snapshot) {
        var debtKey = snapshot.key;
        db.ref('users/' + vm.$store.state.user.uid + '/debts/' + debtKey).update({
          "id": debtKey
        });
      });
      this.openModal();
    },
    openModal() {
      var vm = this;
      this.$modal.show('success');
      setTimeout(function() {
        vm.$modal.hide('success');
      }, 500);
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

.boxed-view__box h3 {
  margin-bottom: 1.4rem;
}

.boxed-view__form {
  display: flex;
  flex-direction: column;
}

.success-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.success-modal {
  font-size: 2rem;
}

.success-modal img {
  width: 20rem;
  height: 20rem;
}

@media screen and (max-width: 640px) {
  .success-modal img {
    width: 10rem;
    height: 10rem;
  }

  .success-modal {
    font-size: 1rem;
  }
}

</style>

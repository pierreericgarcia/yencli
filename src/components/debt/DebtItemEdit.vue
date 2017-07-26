<template>
    <div class="debt-item">
      <input v-model.number="debt.amount" type="number"/>
      <input v-model="debt.client" type="text" />
      <input v-model="debt.refundAt" type="date" />
      <button @click="editDebt" class="button">Save</button>
      <button @click="deleteDebt" class="button button--danger">Delete</button>
    </div>
</template>

<script>
import {db} from '../.././firebase';

export default {
  props: {
    debt: {
      type: Object
    }
  },
  methods: {
    editDebt() {
        db.ref('users/' + this.$store.state.user.uid + '/debts/' + this.debt.id).update({
          "client": this.debt.client,
          "amount": this.debt.amount,
          "mode": 'DebtItem',
          "refundAt": this.debt.refundAt
        });
        this.$emit('debtSave', this.debt);
    },
    deleteDebt() {
      db.ref('users/' + this.$store.state.user.uid + '/debts/' + this.debt.id).remove();
    }
  }
}
</script>

<style>

</style>

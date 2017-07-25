<template>
  <div>
    <div class="debt-item">
      <input v-model.number="debt.amount" type="number"/>
      <input v-model="debt.client" type="text" />
      <input v-model="debt.refundAt" type="text" />
      <button @click="editDebt">Save Changes</button>
    </div>
  </div>
</template>

<script>
import {db} from '../.././firebase';

export default {
  props: {
    debt: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  methods: {
    editDebt() {
        db.ref('users/1igUUtmNeJPTs9GnRoiUw9tUtvK2/debts/' + this.index).set({
          client: this.debt.client,
          amount: this.debt.amount,
          mode: 'DebtItem',
          refundAt: this.debt.refundAt
        });
        this.$emit('debtSave', this.debt);
      }
  }
}
</script>

<style>

</style>

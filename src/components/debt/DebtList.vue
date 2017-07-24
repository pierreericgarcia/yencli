<template>
  <div>
    <div>
      <component v-for="(debt, index) in debts" :debt="debt" :index="index" :is="debt.mode" @debtEdit="debt.mode = 'DebtItemEdit'" @debtSave="debt.mode = 'DebtItem'">
      </component>
    </div>
  </div>
</template>

<script>
import DebtItem from "./DebtItem.vue";
import DebtItemEdit from "./DebtItemEdit.vue";

export default {
  data() {
    return {
    }
  },
  props: {
    debts: {
      type: Array
    }
  },
  components: {
    DebtItem,
    DebtItemEdit
  }
}
</script>

<style>

</style>

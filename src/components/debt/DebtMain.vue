<template>
  <div>
    <div>
      <HeaderBar :debts="debts"></HeaderBar>
      <DebtList :debts="debts"></DebtList>
    </div>
  </div>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
import DebtList from "./DebtList.vue";

export default {
  props: {
    debts: {
      type: Array
    }
  },
  components: {
    HeaderBar,
    DebtList,
  }
}
</script>

<style>
</style>

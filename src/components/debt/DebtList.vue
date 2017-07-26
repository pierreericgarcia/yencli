<template>
  <div class="page-content">
    <div>
      <transition-group name="slide" appear>
        <component v-for="debt in debtsFiltering" :debt="debt" :is="debt.mode" :key="debt.id" @debtEdit="debt.mode = 'DebtItemEdit'" @debtSave="debt.mode = 'DebtItem'">
        </component>
      </transition-group>
    </div>
  </div>
</template>

<script>
import DebtItem from "./DebtItem.vue";
import DebtItemEdit from "./DebtItemEdit.vue";

export default {
  props: {
    debts: {
      type: Array
    }
  },
  components: {
    DebtItem,
    DebtItemEdit
  },
  computed: {
    debtsFiltering() {
      if (this.$store.state.includePaidOnes === true) {
        return this.debts;
      } else {
        return this.debts.filter(function(debt) {
          return debt.status === "pending";
        });
      }
    }
  },
}
</script>

<style>
.page-content {
  margin: 0 auto;
  max-width: 70rem;
  padding: 1.4rem;
  background-color: white;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {

}

.slide-leave-active {
  animation: slide-out 0.5s ease-out forwards;
  transition: opacity 0.5s;
  opacity: 0;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }

  to {
    transform: translateY(0);
  }
}

@@keyframes slide-out {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(20px);
  }
}
</style>

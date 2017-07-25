<template>
  <div>
    <div>
      <component :is="$store.state.haveAccount === true ? 'SignIn' : 'SignUp'">
      </component>
    </div>
  </div>
</template>

<script>
import SignIn from "./SignIn.vue";
import SignUp from "./SignUp.vue";

export default {
  components: {
    SignIn,
    SignUp
  }
}
</script>

<style>

</style>

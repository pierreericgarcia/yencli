<template>
  <div>
    <div class="boxed-view">
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
.boxed-view {
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  display: flex;
  width: 100vw;
  height: 100vh;
}

h3 {
  font-size: 2rem;
}

.boxed-view__box {
  background-color: white;
  padding: 2.4rem;
  text-align: center;
  width: 24rem;
}

.boxed-view__form {
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
}

.boxed-view__box p {
  font-size: 1.2rem;
}

.boxed-view__box a {
  color: #22b573;
  text-decoration: underline;
  cursor: pointer;
}
</style>

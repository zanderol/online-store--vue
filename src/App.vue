<template>
  <div id="app">
    <!-- <p>Hello, Vue!</p> -->
    <v-main-wrapper />
  </div>
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper.vue";
// import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    vMainWrapper,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 120px;
}
</style>

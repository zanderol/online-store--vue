<template>
  <div class="v-main-wrapper">
    <h2>{{ title }}</h2>
    <v-catalog />
    <v-cart v-if="CART.length" :cart_data="CART" />
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue";
import vCart from "./v-cart.vue";
import { mapGetters } from "vuex";

export default {
  name: "v-main-wrapper",
  components: {
    vCatalog,
    vCart,
  },
  props: {},
  data() {
    return {
      title: "Main wrapper",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {},
  watch: {},
  mounted() {
    console.log("Hello! I have just loaded");
  },
};
</script>

<style>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>

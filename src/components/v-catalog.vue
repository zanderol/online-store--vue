<template>
  <div class="v-catalog">
    <h2>Catalog</h2>
    <v-catalog-item />
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {
      title: "Catalog",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log("Hello! I have just loaded");
  },
};
</script>

<style></style>

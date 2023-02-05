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

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

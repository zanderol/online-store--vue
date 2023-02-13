<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      v-bind:src="require('../assets/images/' + product_data.image)"
      alt=""
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__pricee">Price: {{ product_data.price }} UAH</p>
    <button class="v-catalog-item__add-to-cart-btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      title: "Catalog",
    };
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  //padding: $padding * 2;
  //margin-bottom: $margin * 2;
  &__image {
    width: 100px;
  }
}
</style>

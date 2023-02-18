<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" v-bind:src="product_data.image" alt="" />
    <div class="v-catalog-item__description">
      <p class="v-catalog-item__name">{{ product_data.title }}</p>
      <p class="v-catalog-item__pricee">Price: {{ product_data.price }} UAH</p>
      <button class="v-catalog-item__add-to-cart-btn btn" @click="addToCart">
        Add to cart
      </button>
    </div>
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
  mounted() {
    this.$set(this.product_data, "quantity", 1);
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;

  &__image {
    max-height: 100px;
    max-width: 100px;
  }
  &__description {
    justify-content: baseline;
  }
}
</style>

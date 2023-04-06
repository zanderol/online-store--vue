<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="cart_item_data.image" alt="" />
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.title }}</p>
      <p>{{ cart_item_data.price | toFix | formattedPrice }}</p>
      <p class="v-cart-item__description">{{ cart_item_data.description }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty:</p>
      <span>
        <span class="quantity_btn" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="quantity_btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
import toFix from "../../filters/toFix";
import formattedPrice from "../../filters/price-format";

export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  filters: {
    toFix,
    formattedPrice,
  },
  computed: {},
  methods: {
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  &__image {
    max-width: 50px;
  }
  &__description {
    width: 500px;
  }
  .quantity_btn {
    cursor: pointer;
  }
}
</style>

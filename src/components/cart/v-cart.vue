<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link-to-cart">Back to Catalog</div>
    </router-link>
    <h2>Cart</h2>
    <p v-if="!cart_data.length">There are no products in your cart...</p>
    <v-cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="v-cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalPrice }} UAH</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "../cart/v-cart-item.vue";
import { mapActions } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      title: "Cart",
    };
  },
  computed: {
    cartTotalPrice() {
      let result = [];

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
.v-cart {
  margin-bottom: 100px;
  &__total {
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 16px;
    background: #5e3a6a;
    color: #fff;
    font-size: 20px;
  }
  .total.name {
    margin-right: 16px;
  }
}
</style>

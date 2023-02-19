<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link-to-cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h2>Catalog</h2>
    <div class="filters"></div>
    <v-select
      class="v-select"
      :selected="selected"
      :options="categories"
      @select="sortByCategories"
      :isExpanded="IS_DESKTOP"
    />
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in filteredProducts"
        :key="product.id"
        v-bind:product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";
import VSelect from "../v-select.vue";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    VSelect,
  },
  props: {},
  data() {
    return {
      categories: [
        { name: "All" },
        { name: "Men's clothing" },
        { name: "Women's clothing" },
        { name: "Jewelery" },
        { name: "Electronics" },
      ],
      selected: "All",
      sortedProducts: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "IS_MOBILE", "IS_DESKTOP"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    sortByCategories(category) {
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map(function (item) {
        if (item.category === category.name) {
          vm.sortedProducts.push(item);
        }
      });
      this.selected = category.name;
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived");
      }
    });
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
  &__link-to-cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 16px;
    border: solid 1px gray;
    border-radius: 4px;
  }
  .v-select {
    display: block;
    margin-top: -85px;
    margin-bottom: 70px;
  }
}
</style>

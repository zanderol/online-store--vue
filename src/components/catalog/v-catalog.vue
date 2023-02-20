<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link-to-cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h2>Catalog</h2>
    <div class="filters">
      <v-select
        class="v-select"
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
        option-component="capitalize-option"
      />
      <div class="range-slider">
        <input
          class="range-slider__input"
          type="range"
          min="0"
          max="2000"
          step="10"
          v-model.number="minPrice"
          @change="setRangeSlider"
        />
        <input
          type="range"
          min="0"
          max="2000"
          step="10"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        />
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>

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
        { name: "men's clothing" },
        { name: "women's clothing" },
        { name: "jewelery" },
        { name: "electronics" },
      ],
      selected: "All",
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 2000,
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
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
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories();
    },
    sortByCategories(category) {
      // this.sortedProducts = [];
      // let vm = this;
      // this.PRODUCTS.map(function (item) {
      //   if (item.category === category.name.toLowerCase()) {
      //     vm.sortedProducts.push(item);
      //   }
      // });
      // this.selected = category.name.toLowerCase();
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          vm.selected === category.name; //вывод имени категории в селекторе
          return e.category === category.name;
        });
      }
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
        this.sortByCategories();
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
  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }

  .range-slider svg,
  .range-slider input[type="range"] {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  input[type="range"]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
}
</style>

<template>
  <div class="v-catalog-item">
    <v-popup
      v-if="isInfoPopupVisible"
      @closePopup="closeInfoPopup"
      addBtnTitle="Add to cart"
      :popupTitle="product_data.title"
    >
      <img
        class="v-catalog-item__image"
        v-bind:src="product_data.image"
        alt=""
      />
      <div>
        <p class="v-catalog-item__name">{{ product_data.title }}</p>
        <p class="v-catalog-item__price">Price: {{ product_data.price }} UAH</p>
        <p class="v-catalog-item__price">{{ product_data.category }}</p>
      </div>
    </v-popup>

    <img class="v-catalog-item__image" v-bind:src="product_data.image" alt="" />
    <div class="v-catalog-item__description">
      <p class="v-catalog-item__name">{{ product_data.title }}</p>
      <p class="v-catalog-item__price">Price: {{ product_data.price }} UAH</p>
      <button class="v-catalog-item__show-info" @click="showPopupInfo">
        Show info
      </button>
      <button class="v-catalog-item__add-to-cart-btn btn" @click="addToCart">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import vPopup from "../popup/v-popup";

export default {
  name: "v-catalog-item",
  components: {
    vPopup,
  },
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
      isInfoPopupVisible: false,
    };
  },
  computed: {},
  methods: {
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
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

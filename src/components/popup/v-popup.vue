<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{ popupTitle }}</span>
        <span>
          <i class="material-icons" @click="closePopup">close</i>
        </span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button class="close_modal" @click="closePopup">Close</button>
        <button class="submit_btn" @click="addBtnAction">
          {{ addBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {
    popupTitle: {
      type: String,
      default: "Popup name",
    },
    addBtnTitle: {
      type: String,
      default: "Ok",
    },
  },
  data() {
    return {};
  },
  methods: {
    addBtnAction() {
      this.$emit("addBtnAction");
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["popup_wrapper"]) {
        vm.closePopup();
      }
    });
  },
  computed: {},
};
</script>

<style lang="scss">
.popup_wrapper {
  background: rgba(64, 64, 64, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.v-popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .submit_btn {
    padding: 8px;
    color: #fff;
    background: #037a29;
    border-radius: 4px;
    border: none;

    transition: all 0.2s ease-in-out;

    &:hover {
      scale: 1.1;
      background: #059c34;
    }
  }
  .close_modal {
    display: flex;
    justify-content: center;
    padding: 8px;
    color: #fff;
    background: #c12222;
    border: none;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    &:hover {
      scale: 1.1;
      background: #e21f1f;
    }
  }
  .material-icons {
    cursor: default;

    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      filter: drop-shadow(0px 0px 1px rgba(194, 33, 33, 0.5));
    }
  }
}
</style>

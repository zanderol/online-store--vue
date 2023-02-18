<template>
  <div class="v-select" ref="select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  computed: {},
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideSelect(e) {
      if (!this.$refs.select.contains(e.target)) {
        this.areOptionsVisible = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect, true);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style>
.v-select {
  position: relative;
  top: 40px;
  left: 20px;
  width: 200px;
  cursor: pointer;
  user-select: none;
}
.title {
  border: solid 1px #aeaeae;
}
.v-select p {
  margin: 0;
}
.options {
  border: solid 1px #aeaeae;
  position: absolute;
  top: 30px;
  right: 0;
  width: 100%;
}
.options p:hover {
  background: #e7e7e7;
}
</style>

<template>
  <div class="v-header">
    <img src="../../assets/logo.png" alt="Main logo" />
    <div class="search-field">
      <input type="text" />
      <button class="search_btn">
        <i class="material-icons">search</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-header",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>
<style lang="scss">
.v-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(212, 159, 235);
  padding: 8px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  img {
    width: 80px;
    background-color: transparent;
  }
  .search-field {
    padding: 16px;
    position: relative;
    right: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search_btn {
    margin-left: 16px;
    background: transparent;
    border: none;
  }
}
</style>

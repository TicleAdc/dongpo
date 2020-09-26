<template>
  <div class="home">
    <ul>
      <li v-for="item in showtext" :key="item.index">{{ item.contentsTitle }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showtext: [],
    };
  },
  created() {
    this.showtext = this.$route.params.detail;
  },
};
</script>

<style lang="less" scpoed>
.home {
  background-color: #fff;
}
</style>

<template>
  <div class="home">
    <!-- <p>{{ showtext.title }}</p>
    <p>{{ showtext.data }}</p> -->
    <p class="title">{{ $route.query.contentsTitle }}</p>
    <p class="content" v-html="this.$route.query.contentsdata"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showtext: {
        title: '',
        data: '',
      },
    };
  },
  created() {
    // this.showtext = this.$route.params.detail;
    // console.log(this.showtext);
    console.log(this.$route.query);
  },
};
</script>

<style lang="less" scpoed>
.home {
  background-color: #fff;
  padding: 30px;
  .title {
    width: 100%;
    text-align: center;
  }
  .content {
    padding: 30px;
  }
}
</style>

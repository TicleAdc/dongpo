<template>
  <div class="home">
    <!-- <p>{{ showtext.title }}</p>
    <p>{{ showtext.data }}</p> -->
    <p class="title">{{ title }}</p>
    <p class="content" v-html="data"></p>
  </div>
</template>

<script>
import request from '@/api/request.js';
export default {
  data() {
    return {
      title: '',
      data: '',
      tagid: '',
      id: '',
    };
  },
  created() {
    // this.showtext = this.$route.params.detail;
    // console.log(this.showtext);
    // console.log(this.$route.query);
    // this.tagid = this.$route.query.tagid;
    this.id = this.$route.query.id;
    // console.log(this.tagid);
    request.get(`/api/info/${this.id}`, {}).then((res) => {
      console.log(res);
      // let list = res.page.list;
      // list.forEach((v) => {
      //   // console.log(v);
      //   if (this.id == v.id) {
      this.title = res.contents.contentsTitle;
      this.data = res.contents.contentsdata;
      //   }
      // });
    });
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

<template>
  <div class="container">
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import request from '@/api/request.js';
export default {
  data() {
    return {
      content: '',
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      request.get(`/api/info/302`, {}).then((res) => {
        console.log(res);
        this.content = res.contents.contentsdata;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  overflow: hidden;
  background-color: white;
  padding: 20px;
  .content {
    width: 100%;
  }
}
</style>

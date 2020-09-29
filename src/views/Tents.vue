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
      request.get(`/api/info/301`, {}).then((res) => {
        console.log(res);
        this.content = res.contents.contentsdata;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: white;
  padding: 20px;
  overflow: hidden;
  .content {
    width: 100%;
  }
}
</style>

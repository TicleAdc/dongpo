<template>
  <div class="container">123456</div>
</template>

<script>
import axios from '@/api/request.js';
export default {
  methods: {
    getData() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=yyjs`).then((res) => {
        console.log(res);
        // this.imglist = res.frontmenulist;
      });
    },
  },
  mounted() {
    this.getData;
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: white;
}
</style>

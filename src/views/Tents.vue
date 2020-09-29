<template>
  <div class="container"></div>
</template>

<script>
import request from '@/api/request.js';
export default {
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      request.post(`/api/getTagPageList?tagid=301&pageNo=1&pagesize=10`, {}).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style></style>

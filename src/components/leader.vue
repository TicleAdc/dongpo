<template>
  <div class="container">
    <div class="cardlist">
      <div class="card" v-for="item in datalist" :key="item.index">
        <div class="img">
          <img :src="item.columnBigimg" alt="" />
        </div>
        <div class="info">
          <div class="title">{{ item.columnTitle }}</div>
          <div class="intro" v-html="item.columnContext"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
export default {
  data() {
    return {
      datalist: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=LDTD`).then((res) => {
        console.log(res);
        this.datalist = res.frontmenuList;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: white;
  padding: 30px;
}
</style>

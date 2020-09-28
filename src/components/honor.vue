<template>
  <div class="container">
    <honorwall
      v-for="(item, index) in person"
      :key="index"
      :img="item.columnBigimg"
      :title="item.columnContext"
      :time="item.columnData"
    ></honorwall>
  </div>
</template>

<script>
import axios from '@/api/request.js';
import honorwall from '@/components/common/honorwall';
export default {
  data() {
    return {
      person: [],
    };
  },
  components: {
    honorwall,
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=YYRY`).then((res) => {
        console.log(res);
        this.person = res.frontmenuList;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: white;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
}
</style>

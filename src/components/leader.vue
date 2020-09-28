<template>
  <div class="container">
    <person
      v-for="(item, index) in person"
      :key="index"
      :img="item.columnBigimg"
      :name="item.columnTitle"
      :content="item.columnContext"
    ></person>
  </div>
</template>

<script>
import axios from '@/api/request.js';
import person from '@/components/common/personIntroduction';
export default {
  data() {
    return {
      person: [],
    };
  },
  components: {
    person,
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=LDTD`).then((res) => {
        // console.log(res);
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
}
</style>

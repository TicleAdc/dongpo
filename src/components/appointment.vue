<template>
  <div class="container">
    <div class="img">
      <img :src="info.columnBigimg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: '',
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      // let data = this.$store.state.menuData;
      // let index = this.$store.state.selectIndex;
      // let infoVal = data[index.index].children[index.children].menueparam[0];
      // let id = infoVal.id;
      // if (id) {
      await this.http.get(`/api/getColumnDataByPositionId?columnPositionId=YYGH`).then((res) => {
        console.log(res);
        this.data = res.frontmenuList;
      });
      // }
    },
  },
};
</script>

<style scoped>
.container {
  background: #fff;
  padding: 30px;
}
.img {
  width: 100%;
  height: 600px;
  background: #4a5da3;
  margin: 20px 0;
}
</style>

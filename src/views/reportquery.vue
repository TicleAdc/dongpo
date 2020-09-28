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
      let data = this.$store.state.menuData;
      let index = this.$store.state.selectIndex;
      let infoVal = data[index.index].children[index.children].menueparam[0];
      let type = infoVal.type;
      let id = infoVal.id;
      let api, method, query;
      if (type === 0) {
        api = `/api/getTagPageList`;
        method = 'post';
        query = `tagid=${id}&pageNo="1"&pagesize="20"`;
      }
      if (type === 2) {
        api = `/api/getColumnDataByPositionId`;
        method = 'get';
        query = `columnPositionId=${id}`;
      }

      await this.http[method](`${api}?${query}`).then((res) => {
        this.info = res.frontmenuList[0];
      });
    },
  },
};
</script>

<style scoped>
.container {
  background: #fff;
  height: auto;
  padding: 30px;
}
.img {
  width: 100%;
  height: 600px;
  background: #4a5da3;
}
</style>
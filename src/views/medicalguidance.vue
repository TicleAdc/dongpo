<template>
  <div class="container">
    <div class="item" v-for="(item, index) in info" :key="index"> <i class="el-icon-caret-left"></i>{{ item.contentsTitle }}</div>
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
        query = `tagid=${id}&pageNo=1&pagesize=20`;
      }
      if (type === 2) {
        api = `/api/getColumnDataByPositionId`;
        method = 'get';
        query = `columnPositionId=${id}`;
      }

      await this.http[method](`${api}?${query}`).then((res) => {
        this.info = res.page.list;
        console.log(this.info);
      });
    },
  },
};
</script>

<style scoped>
.container {
  background: #fff;
  padding: 30px;
  color: grey;
}
.item {
  line-height: 40px;
  border-bottom: 1px solid lightgrey;
}
</style>
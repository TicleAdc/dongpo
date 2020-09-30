<template>
  <div class="container">
    <subTitle title="楼层分布"></subTitle>
    <div class="img">
      <img :src="info.columnBigimg" alt="" />
    </div>
  </div>
</template>

<script>
import subTitle from '@/components/common/subTitle';
export default {
  components: {
    subTitle,
  },

  data() {
    return {
      info: '',
      title: '',
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
        console.log(23313);
      }
      if (type === 2) {
        api = `/api/getColumnDataByPositionId`;
        method = 'get';
        query = `columnPositionId=${id}`;
      }

      await this.http[method](`${api}?${query}`).then((res) => {
        this.info = res.frontmenuList[0];
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
}
.img {
  height: 600px;
  width: 100%;
  background: #4a5da3;
  margin: 20px 0;
}
</style>
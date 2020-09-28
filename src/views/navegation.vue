<template>
  <div class="container">
    <subTitle title="楼层分布"></subTitle>
    <div v-for="(item, index) in data" :key="index">
      <span class="title">{{ item.columnTitle }}</span>
      <div class="img">
        <img :src="item.columnBigimg" />
      </div>
    </div>
    <subTitle title="医院位置"></subTitle>
  </div>
</template>

<script>
import subTitle from '@/components/common/subTitle';
export default {
  components: {
    subTitle,
  },
  created() {
    this.getInfo();
  },
  data() {
    return {
      data: '',
      showComponent: '',
    };
  },
  methods: {
    async getInfo() {
      let data = this.$store.state.menuData;
      let index = this.$store.state.selectIndex;
      let infoVal = data[index.index].children[index.children].menueparam[0];
      let id = infoVal.id;
      if (id) {
        await this.http.get(`/api/getColumnDataByPositionId?columnPositionId=${id}`).then((res) => {
          console.log(res);
          this.data = res.frontmenuList;
        });
      }
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
.title {
  font-weight: bold;
  color: #4a5da3;
  font-size: 16px;
}
</style>
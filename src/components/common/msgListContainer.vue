<template>
  <div class="container">
    <msg-list :list="list" :title="title"></msg-list>
  </div>
</template>

<script>
import msgList from './msgList';
export default {
  components: {
    msgList,
  },
  props: {},
  data() {
    return {
      list: [],
      id: '',
      title: '',
    };
  },

  created() {
    this.getList();
  },

  methods: {
    getInfo() {
      let data = this.$store.state.menuData;
      let index = this.$store.state.selectIndex;
      let infoVal = data[index.index].children[index.children].menueparam[0];
      let menuname = data[index.index].children[index.children].menuname;
      this.id = infoVal.id;
      this.title = menuname;
    },

    async getList() {
      this.getInfo();
      let query = `tagid=${this.id}&pageNo=1&pagesize=20`;
      await this.http.post(`/api/getTagPageList?${query}`).then((res) => {
        this.list = res.page.list;
        // console.log(this.list);
      });
    },
  },
};
</script>

<style scoped>
.container {
  background: #fff;
}
</style>
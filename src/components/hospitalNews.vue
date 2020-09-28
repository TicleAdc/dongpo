<template>
  <div class="all">
    <msg-list
      title="医院新闻"
      :list="list"
      :total="total"
      @changeMsgListPage="getDataByPage"
    ></msg-list>
    <!-- <div style="padding-bottom: 330px"></div> -->
  </div>
</template>

<script>
import axios from '@/api/request.js';
import msgList from '@/components/common/msgList';
export default {
  components: {
    msgList,
  },
  data() {
    return {
      list: [],
      total: '',
    };
  },
  methods: {
    getDataList() {
      axios.post(`/api/getTagPageList?tagid=6&pageNo=1&pagesize=10`, {}).then((res) => {
        // console.log(res);
        this.list = res.page.lsit;
        this.total = res.totalCount;
      });
    },
    getDataByPage(i) {
      // 通过页码改变取数据
      console.log(i);
    },
  },
  mounted() {
    this.getDataList();
  },
};
</script>

<style lang="less" scoped>
.all {
  background-color: #fff;
}
</style>

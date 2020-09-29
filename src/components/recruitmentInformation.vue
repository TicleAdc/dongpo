<!--
 招标信息
-->
<template>
  <div class="all">
    <msg-list
      title="招聘信息"
      :list="list"
      :total="total"
      @changeMsgListPage="getDataByPage"
    ></msg-list>
    <div style="padding-bottom: 330px"></div>
  </div>
</template>

<script>
import request from '@/api/request.js';
import msgList from './common/msgList';
export default {
  components: {
    msgList,
  },
  data() {
    return {
      list: [],
      // 数据条数
      total: 105,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getDataByPage(i) {
      // 通过页码改变取数据
      console.log(i);
    },
    getData() {
      request.post(`/api/getTagPageList?tagid=15&pageNo=1&pagesize=10`, {}).then((res) => {
        // console.log(res);
        this.list = res.page.list;
        this.total = res.page.totalCount;
      });
    },
  },
  // created() {
  //   // 请求数据
  //   this.list = [
  //     {
  //       columnContext:
  //         '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
  //       time: '2020-2-10',
  //     },
  //     {
  //       columnContext:
  //         '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
  //       time: '2020-2-10',
  //     },
  //     {
  //       columnContext:
  //         '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
  //       time: '2020-2-10',
  //     },

  //     {
  //       columnContext:
  //         '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
  //       time: '2020-2-10',
  //     },
  //     {
  //       columnContext:
  //         '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
  //       time: '2020-2-10',
  //     },
  //     {
  //       columnContext:
  //         '我院儿童保健科成立于1996年,成立至今已有24年历史。现有医务人员13人,其中副主任医师3名,主治医师7名,早期综合发展训练师1名，护士2名。',
  //       time: '2020-2-10',
  //     },
  //   ];
  // },
};
</script>

<style lang="less" scoped>
.all {
  background-color: #fff;
}
</style>

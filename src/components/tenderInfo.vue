<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-28 09:13:30
<<<<<<< HEAD:src/components/tenderInfo.vue
 * @FilePath: /dongpo/src/components/joboffers.vue
 * @LastEditTime: 2020-09-28 15:25:39
=======
 * @FilePath: /dongpo/src/components/hospitalannounc.vue
 * @LastEditTime: 2020-09-28 16:20:41
>>>>>>> e8edb836e0b68f067e18ce0c2b6274372839867b:src/components/hospitalannounc.vue
 * @description 医院公告组件
-->
<template>
  <div class="all">
<<<<<<< HEAD:src/components/tenderInfo.vue
    <msg-list
      title="招标信息"
      :list="list"
      :total="total"
      @changeMsgListPage="getDataByPage"
    ></msg-list>
=======
    <div class="g">
      <msg-list
        title="医院公告"
        :list="list"
        :total="total"
        @changeMsgListPage="getDataByPage"
      ></msg-list>
    </div>

>>>>>>> e8edb836e0b68f067e18ce0c2b6274372839867b:src/components/hospitalannounc.vue
    <div style="padding-bottom: 330px"></div>
  </div>
</template>

<script>
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
  methods: {
    getDataByPage(i) {
      // 通过页码改变取数据
      console.log(i);
    },
  },
  created() {
    // 请求数据
    this.list = [
      {
        content: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro id
    reiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eius
    provident, magni exercitationem assumenda? Cupiditate, odio?
    `,
        time: '2020-2-10',
      },
    ];
  },
};
</script>

<style lang="less" scoped>
.all {
  background-color: #fff;
  .g {
    padding: 0 30px;
  }
}
</style>

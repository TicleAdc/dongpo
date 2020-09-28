<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-28 09:13:30
 * @FilePath: /dongpo/src/components/tenderInfo.vue
 * @LastEditTime: 2020-09-28 17:52:08
 * @description 医院公告组件
-->
<template>
  <div class="all">
    <div class="g">
      <msg-list
        title="招标信息"
        :list="list"
        :total="total"
        @changeMsgListPage="getDataByPage"
      ></msg-list>
    </div>

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
        columnContext: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro id
    reiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eius
    provident, magni exercitationem assumenda? Cupiditate, odio?
    `,
        time: '2020-2-10',
      },
      {
        columnContext: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro id
    reiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eius
    provident, magni exercitationem assumenda? Cupiditate, odio?
    `,
        time: '2020-2-10',
      },
      {
        columnContext: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro id
    reiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eius
    provident, magni exercitationem assumenda? Cupiditate, odio?
    `,
        time: '2020-2-10',
      },
      {
        columnContext: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro id
    reiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eius
    provident, magni exercitationem assumenda? Cupiditate, odio?
    `,
        time: '2020-2-10',
      },
      {
        columnContext: `
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

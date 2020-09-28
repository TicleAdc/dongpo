<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-28 09:13:30
 * @FilePath: /dongpo/src/components/hospitalannounc.vue
 * @LastEditTime: 2020-09-28 10:16:54
 * @description 医院公告组件
-->
<template>
  <div>
    <msg-list title="医院公告" :list="list"></msg-list>
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
    };
  },
  created() {
    // 请求数据
    this.list = [{ content: 'lorem', time: '2020' }];
  },
};
</script>

<style lang="less" scoped></style>

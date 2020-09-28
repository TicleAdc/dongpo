<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-28 09:13:30
 * @FilePath: /dongpo/src/components/hospitalannounc.vue
 * @LastEditTime: 2020-09-28 09:55:33
 * @description 医院公告组件
-->
<template>
  <div>
    <msg-list></msg-list>
  </div>
</template>

<script>
import msgList from './common/msgList';
export default {
  components: {
    msgList,
  },
};
</script>

<style lang="less" scoped></style>

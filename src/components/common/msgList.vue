<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-28 09:54:49
 * @FilePath: /dongpo/src/components/common/msgList.vue
 * @LastEditTime: 2020-09-28 10:13:21
-->
<template>
  <div class="msg-list">
    <div class="title">
      {{ title }}
      <img src="@/assets/img/professor/专家介绍背景图@2x.png" alt="" />
    </div>
    <div class="list" v-for="(item, index) in list" :key="index"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.msg-list {
  .title {
    position: relative;
    img {
      width: 41px;
      height: 41px;
    }
  }
}
</style>

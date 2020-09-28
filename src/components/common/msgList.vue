<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-28 09:54:49
 * @FilePath: /dongpo/src/components/common/msgList.vue
 * @LastEditTime: 2020-09-28 10:40:41
-->
<template>
  <div class="msg-list">
    <div class="title">
      {{ title }}
      <img src="@/assets/img/professor/专家介绍背景图@2x.png" alt="" />
    </div>
    <div class="list" v-for="(item, index) in list" :key="index">
      <i class="el-icon-caret-left"></i>
      <p>{{ item.content }}</p>
      <span>{{ item.time }}</span>
    </div>
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
  padding: 0 30px;
  .title {
    position: relative;
    color: #4d5aa2;
    display: flex;
    align-items: center;
    height: 100px;
    img {
      width: 41px;
      height: 41px;
    }
  }
}
</style>

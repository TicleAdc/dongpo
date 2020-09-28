<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-28 15:35:20
 * @FilePath: /dongpo/src/components/common/headerTitle.vue
 * @LastEditTime: 2020-09-28 15:45:27
-->
<template>
  <div class="title">
    <p>{{ title }}</p>
    <div class="line"></div>
    <img src="@/assets/img/professor/专家介绍背景图@2x.png" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  position: relative;
  color: #4d5aa2;
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 22px;
  width: 100%;
  justify-content: flex-end;
  p {
    text-align: left;
    flex: 10;
    color: black;
  }
  div.line {
    content: ' ';
    position: absolute;
    bottom: 0;
    left: 2px;
    height: 2px;
    background-color: #4a5da3;
    z-index: 1;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    list-style: none;
    width: 35px;
  }
  img {
    width: 41px;
    height: 41px;
    flex: 0.1;
  }
}
</style>

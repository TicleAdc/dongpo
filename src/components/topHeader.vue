<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 14:26:08
 * @FilePath: /dongpo/src/components/topHeader.vue
 * @LastEditTime: 2020-09-17 15:13:17
-->
<template>
  <div class="header">
    <div class="top">
      <div class="left">
        <span>保妇幼健康</span>
        <div class="and">&</div>
        <span>护东坡未来</span>
      </div>
      <span class="phone">门诊电话： 028-38235760</span>
      <div class="right">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
    <div class="position"></div>
    <div class="content-header">
      <img src="" alt="" />
      <div class="line"></div>
      <div class="description">
        <p class="title">DONGPO +</p>
        <p class="content">Maternal and Child Headlth Care And Family Planning Service Center</p>
        <p class="chinese">眉山市东坡区妇幼保健计划生育服务中心</p>
      </div>
      <el-input placeholder="请选择日期" suffix-icon="el-icon-search"> </el-input>
    </div>
    <div class="link">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  .top {
    position: fixed;
    top: 0;
    left: 0;
    height: 58.91px;
    background-color: rgba(240, 240, 240, 1);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 10;
    .left {
      margin-left: 13.5%;
    }
  }
  .position {
    height: 58.91px;
  }
  .content-header {
    display: flex;
    height: 139.62px;
    background-color: white;
  }
}
</style>

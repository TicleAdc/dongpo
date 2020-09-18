<template>
  <div class="container">
    <div class="information">
      <div class="out">
        <div class="title">门诊时间</div>
        <div class="include">
          <p>上午： 08:30 ~ 12:00</p>
          <p>下午： 13:00 ~ 17:00</p>
          <p>急诊： 24小时</p>
        </div>
      </div>

      <div class="out">
        <div class="title">预约方式</div>
        <div class="include">
          <p>微信预约</p>
          <p>自助预约 诊间预约</p>
          <p>电话预约： 028—63806390</p>
        </div>
      </div>
      <div class="out">
        <div class="title">掌上妇幼</div>
        <div class="include">
          <p>微信扫一扫</p>
          <p>关注东坡妇幼公众号</p>
          <p>享便捷医疗服务</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less">
.container {
  padding: 10px 30px;
  display: flex;
  .information {
    display: flex;
    flex-direction: column;
    .out {
      display: flex;
      margin: 10px 0;
      border: 1px solid black;
      .title {
        background-color: rgba(74, 93, 163, 1);
        color: white;
        height: 65px;
        font-size: 15px;
        padding: 0 10px;
      }
      .include {
        height: 60px;
        font-size: 10.81px;
      }
    }
  }
}
</style>

<template>
  <div class="headerline">
    <div class="bgcolor">
      <div class="theme">
        <slot name="theme"></slot>
      </div>
      <div class="childtabs">
        <slot name="childtabs"></slot>
      </div>
      <div class="contents">
        <slot name="contents"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.headerline {
  height: 150px;
  background-color: #4d5aa2;
  color: white;

  position: relative;
  .theme {
    background-image: url('../assets/img/brand/医院文化背景@2x.png');
    width: 25%;
    float: right;
    height: 150px;
    line-height: 150px;
    text-align: center;
    font-size: 36px;
  }
  .childtabs {
    position: absolute;
    width: 100%;
    top: 100px;
  }
}
</style>

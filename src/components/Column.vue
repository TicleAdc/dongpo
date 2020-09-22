<template>
  <div class="main">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="contents">
      <slot name="contents"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main {
  padding: 30px 30px;
  background-color: white;
  .title {
    height: 60px;
    line-height: 60px;
  }
}
</style>

<style lang="less">
.title {
  img {
    height: 43.23px;
  }
}
</style>

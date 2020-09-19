<template>
  <div class="page">
    <el-pagination background layout="total,prev, pager, next" :total="20"> </el-pagination>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.tab {
  display: inline-block;
  margin: 20px;
  a {
    color: white;
    text-decoration: none;
  }
}
a:active,
a:visited {
  border-top: 2px solid white;
}

.page {
  // margin-top: 247px;
  // margin-bottom: 38px;
  padding-top: 60px;
  padding-bottom: 38px;
  display: flex;
  justify-content: center;
}
</style>
<style lang="less">
.page {
  .el-pagination {
    font-size: 16px;
    .btn-prev,
    .btn-next {
      width: 83.59px;
      height: 49px;
      background-color: #fff;
      border: 0.5px solid rgba(0, 0, 0, 0.151);
      &:not(:disabled) {
        color: #4a5da3;
      }
    }
    .number {
      width: 49px;
      height: 49px;
      line-height: 49px;
      text-align: center;
      font-size: 16px;
      border: 0.5px solid rgba(0, 0, 0, 0.151);
      background-color: #fff;
    }
    .el-icon {
      font-size: 16px;
    }
    .el-pagination__total {
      width: 83.59px;
      height: 49px;
      display: inline-block;
      margin: 0 5px;
      background-color: #fff;
      color: #606266;
      min-width: 30px;
      border-radius: 2px;
      font-size: 16px;
      text-align: center;
      line-height: 49px;
      border: 0.5px solid rgba(0, 0, 0, 0.151);
      color: #4a5da3;
    }
  }
}
</style>

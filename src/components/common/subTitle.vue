<template>
  <div class="content">
    <div>
      <span class="title">{{ title }}</span>
      <span class="img">
        <img src="../../assets/img/professor/专家介绍背景图.png" />
      </span>
    </div>
    <div class="line"><span></span><span></span></div>
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

<style scoped lang="less">
.content {
  color: #4a5da3;
  font-size: 18px;
  > div:first-child {
    display: flex;
  }
  span {
    display: inline-block;
  }

  .title {
    display: block;
    line-height: 50px;
  }
  .img {
    height: 50px;
    img {
      object-fit: contain;
      object-position: left;
    }
  }
  .line {
    span:nth-child(1) {
      width: 40px;
      height: 7px;
      background: #4a5da3;
    }
    span:nth-child(2) {
      background: lightgrey;
      height: 1px;
      width: calc(100% - 40px);
    }
  }
}
</style>
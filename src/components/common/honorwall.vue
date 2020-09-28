<template>
  <div class="container">
    <div class="column">
      <div class="img">
        <img :src="img" alt="" />
      </div>
      <div class="titlepart">
        <div class="round"></div>
        <div class="title" v-html="title"></div>
      </div>
      <div class="time">{{ time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    time: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: white;
  width: 27%;
  // margin: 0 3%;
  // &:last-child {
  //   margin-right: 0;
  // }
  .column {
    padding: 10px 10px 10px 50px;
    .img {
      border: 1px solid black;
      padding: 5px;
      margin-bottom: 5px;
    }
    .titlepart {
      display: flex;
      .round {
        margin-top: 5px;
        margin-right: 5px;
        width: 10px;
        height: 10px;
        background-color: #4a5da3;
      }
      .title {
        color: #afa9a9;
        font-size: 10px;
      }
    }
    .time {
      color: gray;
      font-size: 10px;
      margin-left: 15px;
    }
  }
}
</style>

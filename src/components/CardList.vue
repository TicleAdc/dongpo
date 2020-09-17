<template>
  <div class="datalist">
    <div class="card" v-for="item in dataList" :key="item.id">
      <header class="img"></header>
      <div class="icon"></div>
      <div class="name">{{ item.name }}</div>
      <button>{{ item.btn }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          id: '1',
          name: '预约挂号',
          btn: '查看更多',
        },
        {
          id: '2',
          name: '预约挂号',
          btn: '查看更多',
        },
        {
          id: '3',
          name: '预约挂号',
          btn: '查看更多',
        },
        {
          id: '4',
          name: '预约挂号',
          btn: '查看更多',
        },
      ],
    };
  },
};
</script>

<style lang="less">
.datalist {
  display: flex;
  padding: 30px 60px;
  .card {
    margin: 0 17px;
    display: inline-block;
    width: 21%;
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
    .img {
      height: 100px;
      border: 1px solid black;
      border-radius: 10px 10px 0 0;
    }
    .name {
      margin-top: 50px;
    }
    button {
      width: 70%;
      background-color: white;
      height: 30px;
      border: 1px solid black;
      border-radius: 5px;
      margin: 30px;
    }
  }
}
</style>

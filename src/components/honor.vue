<template>
  <div class="container">
    <!-- <honorwall
      v-for="(item, index) in person"
      :key="index"
      :img="item.columnBigimg"
      :title="item.columnContext"
      :time="item.columnData"
    ></honorwall> -->
    <viewer :images="person" class="imgList">
      <div class="imgContainer" v-for="item in person" :key="item">
        <img :src="item.columnBigimg" />
        <div class="describe">
          <i></i>
          <div v-html="item.columnContext"></div>
        </div>
      </div>
    </viewer>
  </div>
</template>

<script>
import axios from '@/api/request.js';
// import honorwall from '@/components/common/honorwall';
export default {
  data() {
    return {
      person: [],
    };
  },
  components: {
    // honorwall,
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=YYRY`).then((res) => {
        console.log(res);
        this.person = res.frontmenuList;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: white;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
}
.imgList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .imgContainer {
    width: 320px;
    height: 210px;
    margin: 40px 60px;
  }
  img {
    object-fit: contain;
  }
  .describe {
    display: flex;
    color: #afa9a9;
    font-size: 10px;
  }
  i {
    margin-top: 5px;
    margin-right: 5px;
    width: 10px;
    height: 10px;
    background-color: #4a5da3;
  }
}
</style>

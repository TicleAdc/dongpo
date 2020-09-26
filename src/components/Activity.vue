<template>
  <div class="activity">
    <div class="activeImglist">
      <div
        class="active"
        v-for="item in datalist"
        :key="item.index"
        @click="handleClick(item.index)"
      >
        <img :src="item.imgURL" alt="" />
        <!-- <div class="contents">{{ item.imgdescription }}</div> -->
      </div>
    </div>
    <div class="showtext">{{ showtext }}</div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
export default {
  data() {
    return {
      datalist: [],
      showtext: '',
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.post('/api/getColumnList', {}).then((res) => {
        this.datalist = res.ColumnData[5].columndata.list;
        console.log(this.datalist);
      });
    },
    handleClick(id) {
      axios.post('/api/getColumnList', {}).then((res) => {
        let data = res.ColumnData[5].columndata.list;
        for (let i = 0; i < data.length; i++) {
          if (id == data[i].index) {
            this.showtext = data[i].imgdescription;
            console.log(this.showtext);
          }
          break;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.activeImglist {
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  .active {
    margin: 5px;
    cursor: pointer;
    background-color: aquamarine;
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.showtext {
  margin: 0 30px;
  padding: 10px 0 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>

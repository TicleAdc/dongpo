<template>
  <div class="activity">
    <div class="activeImglist">
      <div class="active" @click="showfirst">
        <img :src="imglist[0]" alt="" />
      </div>
      <div class="active" @click="showsecond">
        <img :src="imglist[1]" alt="" />
      </div>
      <div class="active" @click="showthird">
        <img :src="imglist[2]" alt="" />
      </div>
      <div class="active" @click="showfourth">
        <img :src="imglist[3]" alt="" />
      </div>
      <div class="more">
        <div class="little"></div>
        <div class="little"></div>
        <div class="little"></div>
      </div>
    </div>
    <div class="showtext" v-if="first">
      <div class="triple"></div>
      <div class="mainbox">{{ this.contexts[0] }}</div>
    </div>
    <div class="showtext" v-if="second">
      <div class="triple"></div>
      <div class="mainbox">{{ this.contexts[1] }}</div>
    </div>
    <div class="showtext" v-if="third">
      <div class="triple"></div>
      <div class="mainbox">{{ this.contexts[2] }}</div>
    </div>
    <div class="showtext" v-if="fourth">
      <div class="triple"></div>
      <div class="mainbox">{{ this.contexts[3] }}</div>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
export default {
  data() {
    return {
      imglist: [],
      contexts: [],
      first: true,
      second: false,
      third: false,
      fourth: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    showfirst() {
      this.first = true;
      this.second = false;
      this.third = false;
      this.fourth = false;
    },
    showsecond() {
      this.first = false;
      this.second = true;
      this.third = false;
      this.fourth = false;
    },
    showthird() {
      this.first = false;
      this.second = false;
      this.third = true;
      this.fourth = false;
    },
    showfourth() {
      this.first = false;
      this.second = false;
      this.third = false;
      this.fourth = true;
    },
    getData() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=itemactivity`, {}).then((res) => {
        console.log(res);
        let list = res.frontmenuList;
        list.forEach((v) => {
          this.imglist.push(v.columnBigimg);
          this.contexts.push(v.columnContext);
        });
        console.log(this.imglist);
      });
    },
  },
};
</script>

<style lang="less">
.activeImglist {
  display: flex;
  justify-content: space-between;
  .active {
    margin: 5px;
    img {
      cursor: pointer;
    }
  }
}
.showtext {
  padding: 10px 0 10px 20px;
  border-radius: 10px;
}
.triple {
  position: relative;
  left: 10%;
  bottom: 20px;
  width: 0px;
  height: 0px;
  border-top: 20px solid transparent;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 30px solid ghostwhite;
}
.mainbox {
  width: 90%;
  position: relative;
  bottom: 20px;
  left: 30px;
  padding: 10px 0 10px 20px;
  // border: 1px solid black;
  border-radius: 10px;
  background-color: ghostwhite;
}
.more {
  padding-top: 5%;
  width: 10%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background-color: rgba(167, 194, 225, 1);
  .little {
    // top: 50px;
    left: 34%;
    margin-bottom: 30px;
    position: relative;
    border-radius: 50%;
    width: 0;
    height: 0;
    background-color: white;
    border: 8px solid white;
  }
}
</style>

<template>
  <div class="activity">
    <div class="activeImglist">
      <div class="active" @click="showfirst">
        <img src="@/assets/img/home/thematicActivities1@2x.png" alt="" />
      </div>
      <div class="active" @click="showsecond">
        <img src="@/assets/img/home/thematicActivities2@2x.png" alt="" />
      </div>
      <div class="active" @click="showthird">
        <img src="@/assets/img/home/thematicActivities3@2x.png" alt="" />
      </div>
      <div class="active" @click="showfourth">
        <img src="@/assets/img/home/thematicActivities4@2x.png" alt="" />
      </div>
      <div class="more">
        <div class="little"></div>
        <div class="little"></div>
        <div class="little"></div>
      </div>
    </div>
    <div class="showtext" v-if="first">
      <div class="triple"></div>
      <div class="mainbox">第一张图片对应的文字</div>
    </div>
    <div class="showtext" v-if="second">
      <div class="triple"></div>
      <div class="mainbox">第二张图片对应的文字</div>
    </div>
    <div class="showtext" v-if="third">
      <div class="triple"></div>
      <div class="mainbox">第三张图片对应的文字</div>
    </div>
    <div class="showtext" v-if="fourth">
      <div class="triple"></div>
      <div class="mainbox">第四张图片对应的文字</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: true,
      second: false,
      third: false,
      fourth: false,
    };
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

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
    </div>
    <div class="showtext" v-if="first">第一张图片对应的文字</div>
    <div class="showtext" v-if="second">第二张图片对应的文字</div>
    <div class="showtext" v-if="third">第三张图片对应的文字</div>
    <div class="showtext" v-if="fourth">第四张图片对应的文字</div>
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
    cursor: pointer;
  }
}
.showtext {
  padding: 10px 0 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>

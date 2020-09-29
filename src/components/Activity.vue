<template>
  <div class="activity">
    <div class="activeImglist">
      <div class="active" v-bind:class="show != '1' ? 'brightness' : ''" @click="showBox('1')">
        <div></div>
        <img src="@/assets/img/home/thematicActivities4@2x.png" alt="" />
      </div>
      <div class="active" v-bind:class="show != '2' ? 'brightness' : ''" @click="showBox('2')">
        <img src="@/assets/img/home/thematicActivities2@2x.png" alt="" />
      </div>
      <div class="active" v-bind:class="show != '3' ? 'brightness' : ''" @click="showBox('3')">
        <img src="@/assets/img/home/thematicActivities3@2x.png" alt="" />
      </div>
      <div class="active" v-bind:class="show != '4' ? 'brightness' : ''" @click="showBox('4')">
        <img src="@/assets/img/home/thematicActivities4@2x.png" alt="" />
      </div>
      <div class="more">
        <div class="little"></div>
        <div class="little"></div>
        <div class="little"></div>
      </div>
    </div>
    <div class="showtext" v-if="show == '1'">
      <div class="triple" style="left: 10%"></div>
      <div class="mainbox">第一张图片对应的文字</div>
    </div>
    <div class="showtext" v-if="show == '2'">
      <div class="triple" style="left: 34%"></div>
      <div class="mainbox">第二张图片对应的文字</div>
    </div>
    <div class="showtext" v-if="show == '3'">
      <div class="triple" style="left: 58%"></div>
      <div class="mainbox">第三张图片对应的文字</div>
    </div>
    <div class="showtext" v-if="show == '4'">
      <div class="triple" style="left: 82%"></div>
      <div class="mainbox">第四张图片对应的文字</div>
    </div>
  </div>
</template>

<script>
import request from '@/api/request.js';
export default {
  data() {
    return {
      show: '1',
      imglist: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    showBox(data) {
      this.show = data;
    },
    getData() {
      request.get('/api/getColumnDataByPositionId?columnPositionId=itemactivity').then((res) => {
        console.log(res);
        this.imglist = res.frontmenuList.slice(0, 4);
      });
    },
  },
};
</script>

<style lang="less">
.activeImglist {
  font-size: 0;
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
  bottom: 20px;
  width: 16px;
  height: 16px;
  border: 1px solid #4a5da3;
  border-bottom: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  margin-bottom: -10px;
  margin-top: 15px;
  z-index: 2;
  background-color: #ffffff;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(Rotation=0.45);
}
.mainbox {
  width: 90%;
  position: relative;
  bottom: 20px;
  left: 30px;
  padding: 10px 0 10px 20px;
  // border: 1px solid black;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #4a5da3;
}
.more {
  padding-top: 6%;
  width: 10%;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  background-color: rgba(167, 194, 225, 1);
  .little {
    left: 41%;
    text-align: center;
    margin-bottom: 10px;
    position: relative;
    border-radius: 50%;
    width: 0;
    height: 0;
    background-color: white;
    border: 6px solid white;
  }
}
.brightness {
  -webkit-filter: brightness(70%);
}
</style>

<template>
  <div>
    <div class="expert-introduction">
      <div class="left">
        <img :src="img" alt="" />
        <!-- <div class="foot">
          <h2>{{ name }}</h2>
          <p>{{ department }}</p>
        </div> -->
      </div>
      <div class="right">
        <h2>
          <span class="round">></span>
          <span class="name">{{ name }}</span>
        </h2>
        <!-- <p>{{ educationalLevel }}</p>
        <p>{{ work }}</p> -->
        <p class="content" v-html="content"></p>
        <img src="@/assets/img/professor/专家介绍背景图@2x.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    // name: {
    //   type: String,
    //   required: true,
    // },
    // department: {
    //   type: String,
    // },
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.expert-introduction {
  margin-bottom: 30px;
  display: flex;
  height: 204px;
  box-shadow: 10px 10px 10px 3px rgba(0, 0, 0, 0.151);
  padding: 20px;
  // margin-top: 49px;
  // &:last-child {
  //   margin-bottom: 30px;
  // }
  .left {
    flex: 0.18;
    display: flex;
    flex-direction: column;
    > .foot {
      background-color: #e8f1fa;
      flex: 0.82;
      h2 {
        text-align: center;
        color: #4a5da3;
        font-size: 17.64px;
      }
      p {
        text-align: center;
        font-size: 13.2px;
      }
    }
    img {
      flex: 2;
      height: inherit;
    }
    @media screen and(min-width: 1600px) {
      img {
        height: 60%;
      }
    }
  }
  .right {
    flex: 0.82;
    padding: 10px 5px;
    padding-left: 13px;
    font-size: 16px;
    font-family: SourceHanSansCN-Bold;
    position: relative;
    h2 {
      padding-top: 5px;
      font-size: 16px;
    }
    p {
      font-size: 14px;
      color: #4d4d4d;
    }
    .content {
      color: rgba(77, 77, 77, 0.541);
      margin-top: 14px;
    }
    img {
      width: 147px;
      height: 119px;
      position: absolute;
      right: 5px;
      top: 20%;
    }
  }
}
.round {
  text-align: center;
  display: inline-block;
  background-color: #4a5da3;
  border-radius: 50%;
  color: white;
  width: 20px;
  height: 20px;
  line-height: 18px;
  margin-right: 10px;
}
.name {
  display: inline-block;
  padding-top: 5px;
}
</style>

<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-21 08:52:54
 * @FilePath: /dongpo/src/views/staffStyle.vue
 * @LastEditTime: 2020-09-22 09:47:49
-->
<template>
  <div class="staffcardlist">
    <div class="staffcard" v-for="item in stafflist" :key="item.id">
      <div class="img">
        <img :src="item.url" alt="" />
      </div>
      <div class="title">
        <div class="round"></div>
        <div class="stafftitle">
          {{ item.title }}
        </div>
      </div>
      <div class="staffbottom">{{ item.bottom }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stafflist: [
        {
          id: '1',
          url: require('@/assets/img/professor/照片2@2x.png'),
          title: '天使风采',
          bottom: '小儿保健科 ｜ 2020-08-17 21:20',
        },
        {
          id: '2',
          url: require('@/assets/img/professor/照片2@2x.png'),
          title: '天使风采',
          bottom: '小儿保健科 ｜ 2020-08-17 21:20',
        },
        {
          id: '3',
          url: require('@/assets/img/professor/照片2@2x.png'),
          title: '天使风采',
          bottom: '小儿保健科 ｜ 2020-08-17 21:20',
        },
        {
          id: '4',
          url: require('@/assets/img/professor/照片2@2x.png'),
          title: '天使风采',
          bottom: '小儿保健科 ｜ 2020-08-17 21:20',
        },
        {
          id: '5',
          url: require('@/assets/img/professor/照片2@2x.png'),
          title: '天使风采',
          bottom: '小儿保健科 ｜ 2020-08-17 21:20',
        },
        {
          id: '6',
          url: require('@/assets/img/professor/照片2@2x.png'),
          title: '天使风采',
          bottom: '小儿保健科 ｜ 2020-08-17 21:20',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.staffcardlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .staffcard {
    margin: 2%;
    .img {
      padding: 5px;
      border: 1px solid gray;
    }
    .title {
      padding: 10px 0;
      border-bottom: 1px solid gray;
      display: flex;
      .round {
        margin-top: 5px;
        background-color: #4d5aa2;
        display: inline-block;
        width: 16px;
        height: 16px;
      }
      .stafftitle {
        font-size: 16px;
        padding-bottom: 5px;
        display: inline-block;
        color: #4d5aa2;
        padding-left: 10px;
      }
    }
    .staffbottom {
      padding: 10px;
      font-size: 12px;
      color: gray;
    }
  }
}
</style>

<template>
  <div class="contents">
    <ul>
      <li v-for="item in list" :key="item.id">
        <div class="pic"><img :src="item.url" alt="" /></div>
        <div class="info">
          <div class="title">
            <a href="#">{{ item.title }}</a>
          </div>
          <p class="text">{{ item.text }}</p>
          <div class="time">{{ item.time }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        // {
        //   id: '1',
        //   url: require('@/assets/img/home/thematicActivities1@2x.png'),
        //   title: '新时代，新征程，新目标',
        //   text: '新时代新征程新目标',
        //   time: '发布时间:2020-09-19',
        // },
        // {
        //   id: '2',
        //   url: require('@/assets/img/home/thematicActivities1@2x.png'),
        //   title: '新时代，新征程，新目标',
        //   text: '新时代新征程新目标',
        //   time: '发布时间:2020-09-19',
        // },
        // {
        //   id: '3',
        //   url: require('@/assets/img/home/thematicActivities1@2x.png'),
        //   title: '新时代，新征程，新目标',
        //   text: '新时代新征程新目标',
        //   time: '发布时间:2020-09-19',
        // },
        // {
        //   id: '4',
        //   url: require('@/assets/img/home/thematicActivities1@2x.png'),
        //   title: '新时代，新征程，新目标',
        //   text: '新时代新征程新目标',
        //   time: '发布时间:2020-09-19',
        // },
        // {
        //   id: '5',
        //   url: require('@/assets/img/home/thematicActivities1@2x.png'),
        //   title: '新时代，新征程，新目标',
        //   text: '新时代新征程新目标',
        //   time: '发布时间:2020-09-19',
        // },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.contents {
  background-color: white;
  ul {
    li {
      border-bottom: 1px dotted gray;
      display: flex;
      .pic {
        margin-right: 30px;
        img {
          width: 200px;
          height: 120px;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        position: relative;
        .title {
          width: 100%;
          height: 30px;
          line-height: 30px;
          a {
            text-decoration: none;
            color: #888888;
          }
        }
        .text {
          font-size: 10px;
        }
        .time {
          text-align: left;
          position: absolute;
          top: 100px;
        }
      }
    }
  }
}
</style>

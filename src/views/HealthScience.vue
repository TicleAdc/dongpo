<template>
  <div class="body">
    <Title>
      <div slot="theme">健康科普</div>
      <div slot="childtabs">
        <div class="tab" v-for="item in checkList" :key="item.id">
          <a href="#"> {{ item.name }}</a>
        </div>
      </div>
    </Title>

    <div class="contents">
      <ul>
        <li v-for="item in activitylist" :key="item.id">
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
    <pagenation></pagenation>
  </div>
</template>

<script>
import pagenation from '@/components/pageNation';
import Title from '@/components/Title';
export default {
  data() {
    return {
      checkList: [
        {
          id: '01',
          name: '在线辟谣',
        },
        {
          id: '02',
          name: '健康宝典',
        },
        {
          id: '03',
          name: '情满东坡',
        },
      ],
      activitylist: [
        {
          id: '1',
          url: require('@/assets/img/home/thematicActivities1@2x.png'),
          title: '新时代，新征程，新目标',
          text: '新时代新征程新目标',
          time: '发布时间:2020-09-19',
        },
        {
          id: '2',
          url: require('@/assets/img/home/thematicActivities1@2x.png'),
          title: '新时代，新征程，新目标',
          text: '新时代新征程新目标',
          time: '发布时间:2020-09-19',
        },
        {
          id: '3',
          url: require('@/assets/img/home/thematicActivities1@2x.png'),
          title: '新时代，新征程，新目标',
          text: '新时代新征程新目标',
          time: '发布时间:2020-09-19',
        },
        {
          id: '4',
          url: require('@/assets/img/home/thematicActivities1@2x.png'),
          title: '新时代，新征程，新目标',
          text: '新时代新征程新目标',
          time: '发布时间:2020-09-19',
        },
        {
          id: '5',
          url: require('@/assets/img/home/thematicActivities1@2x.png'),
          title: '新时代，新征程，新目标',
          text: '新时代新征程新目标',
          time: '发布时间:2020-09-19',
        },
      ],
    };
  },
  components: {
    Title,
    pagenation,
  },
};
</script>

<style lang="less" scoped>
.tab {
  display: inline-block;
  margin: 20px;
  a {
    color: white;
    text-decoration: none;
  }
}
a:active,
a:visited {
  border-top: 2px solid white;
}
.body {
  background-color: white;
  .topicImg {
    margin-bottom: 30px;
    img {
      height: 300px;
      width: 100%;
    }
  }
  .contents {
    ul {
      li {
        border-bottom: 1px dotted gray;
        display: flex;
        .pic {
          margin-right: 60px;
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
}
</style>

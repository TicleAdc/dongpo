<template>
  <div class="body">
    <Title>
      <div slot="theme">健康科普</div>
      <div slot="childtabs">
        <div class="tab" v-for="item in checkList" :key="item.id">
          <a @click="changeComponent(item.id)"> {{ item.name }}</a>
        </div>
      </div>
    </Title>
    <component :is="showComponent"></component>
    <pagenation></pagenation>
  </div>
</template>

<script>
import pagenation from '@/components/pageNation';
import Title from '@/components/Title';
import rumorRfutation from '@/components/rumorRefutation';
import healthTreasure from '@/components/healthTreasure';
import dongpoEmotion from '@/components/dongpoEmotion';
export default {
  data() {
    return {
      showComponent: 'rumorRfutation',
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
    };
  },
  components: {
    Title,
    pagenation,
    rumorRfutation,
    healthTreasure,
    dongpoEmotion,
  },
  methods: {
    changeComponent(id) {
      switch (Number(id)) {
        case 1:
          this.showComponent = 'rumorRfutation';
          break;
        case 2:
          this.showComponent = 'healthTreasure';
          break;
        case 3:
          this.showComponent = 'dongpoEmotion';
          break;
        default:
          this.showComponent = 'rumorRfutation';
          break;
      }
    },
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
}
</style>

<template>
  <div class="body">
    <Title>
      <div slot="theme">通知公告</div>
      <div slot="childtabs">
        <div @click="changeComponent(item.id)" class="tab" v-for="item in checkList" :key="item.id">
          <a> {{ item.name }}</a>
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
import hospitalBulletin from '@/components/HospitalBulletin';
import tenderInfo from '@/components/tenderInformation';
import recruitment from '@/components/recruitmentInformation';
export default {
  data() {
    return {
      checkList: [
        {
          id: '1',
          name: '医院公告',
        },
        {
          id: '2',
          name: '招标信息',
        },
        {
          id: '3',
          name: '招聘信息',
        },
      ],
      showComponent: 'hospitalBulletin',
    };
  },
  components: {
    Title,
    pagenation,
    hospitalBulletin,
    tenderInfo,
    recruitment,
  },
  methods: {
    changeComponent(id) {
      switch (Number(id)) {
        case 1:
          this.showComponent = 'hospitalBulletin';
          break;
        case 2:
          this.showComponent = 'tenderInfo';
          break;
        case 3:
          this.showComponent = 'recruitment';
          break;
        default:
          this.showComponent = 'hospitalBulletin';
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
  cursor: pointer;
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
}
.newslist {
  padding-top: 10px;
  ul {
    list-style: none;
    li {
      font-size: 10px;
      padding: 5px;
      border-bottom: 1px solid rgba(173, 170, 170, 0.863);
      .time {
        float: right;
      }
    }
  }
}
</style>

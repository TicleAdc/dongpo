<template>
  <div class="body">
    <Title>
      <div slot="theme">医院文化</div>
      <div slot="childtabs">
        <div @click="changeComponent(item.id)" class="tab" v-for="item in checkList" :key="item.id">
          <a> {{ item.name }}</a>
        </div>
      </div>
    </Title>
    <component :is="showComponentName"></component>
  </div>
</template>

<script>
import Title from '@/components/Title';
import staffstyle from './staffStyle';
import tents from './Tents';
import culture from './Culture';
import brandImage from './brandImage';
export default {
  components: {
    Title,
    staffstyle,
    tents,
    culture,
    brandImage,
  },
  methods: {
    changeComponent(id) {
      switch (Number(id)) {
        case 1:
          this.showComponentName = 'brandImage';
          break;
        case 2:
          this.showComponentName = 'tents';
          break;
        case 3:
          this.showComponentName = 'culture';
          break;
        case 4:
          this.showComponentName = 'staffstyle';
          break;
        default:
          this.showComponentName = 'brandImage';
          break;
      }
    },
  },
  data() {
    return {
      checkList: [
        {
          id: '1',
          name: '品牌形象',
          contents: '',
        },
        {
          id: '2',
          name: '院训宗旨',
          contents: '',
        },
        {
          id: '3',
          name: '特色文化',
          contents: '',
        },
        {
          id: '4',
          name: '职工风采',
          contents: '',
        },
      ],
      showComponentName: 'brandImage',
    };
  },
};
</script>

<style lang="less" scoped>
.body {
  background-color: white;
  .tab {
    display: inline-block;
    margin: 20px;
    cursor: pointer;
    a {
      color: white;
      text-decoration: none;
    }
  }
  .contents {
    padding: 50px;
    .text-title {
      text-align: center;
      color: #4d5aa2;
      margin: 50px 0;
    }
    .text {
      padding: 10px 30px;
      p {
        margin-bottom: 20px;
      }
    }
    .bottom {
      text-align: center;
      width: 100%;
      height: 30px;
      line-height: 30px;
      background-color: rgba(117, 198, 245, 0.705);
      position: relative;
      margin-bottom: 20px;
      .top {
        position: absolute;
        height: 30px;
        background-color: white;
        left: 47%;
        padding: 0 15px;
      }
    }
    .protect {
      margin: 90px 0;
    }
    .logo {
      margin: 60px 0;
    }
    .end {
      background-color: rgba(117, 198, 245, 0.705);
      padding: 30px;
    }
  }
}
p {
  font-size: 16px;
}
a:active,
a:visited {
  border-top: 2px solid white;
}
</style>

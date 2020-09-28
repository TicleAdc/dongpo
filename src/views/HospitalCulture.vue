<template>
  <div class="body">
    <main-component currentRoute="/news" v-model="showComponent" title="新闻动态">
      <template #component>
        <component :is="showComponent"></component>
      </template>
    </main-component>
    <!-- <component :is="showComponentName"></component> -->
  </div>
</template>

<script>
// import Title from '@/components/Title';
import staffstyle from './staffStyle';
import tents from './Tents';
import culture from './Culture';
import brandImage from './brandImage';
import mainComponent from '@/components/common/mainComponent';
export default {
  components: {
    // Title,
    staffstyle,
    tents,
    culture,
    brandImage,
    mainComponent,
  },
  methods: {},
  data() {
    return {
      showComponent: '',
      //     checkList: [
      //       {
      //         id: '1',
      //         name: '品牌形象',
      //         contents: '',
      //       },
      //       {
      //         id: '2',
      //         name: '院训宗旨',
      //         contents: '',
      //       },
      //       {
      //         id: '3',
      //         name: '特色文化',
      //         contents: '',
      //       },
      //       {
      //         id: '4',
      //         name: '职工风采',
      //         contents: '',
      //       },
      //     ],
      //     showComponentName: 'brandImage',
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

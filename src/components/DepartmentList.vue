<template>
  <div class="pinklogo">
    <div class="logoimg"><img :src="backgroundimg" alt="" /></div>
    <div class="iconlist">
      <div class="icon" v-for="item in iconlist" :key="item.id">
        <div>
          <!-- <img :src="item.smallimgurl" alt="" /> -->
          <img class="img" :src="item.url" alt="" />
        </div>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
export default {
  name: 'icon',
  data() {
    return {
      backgroundimg: require('@/assets/img/home/PinkLogo.png'),
      iconlist: [
        {
          id: '1',
          url: require('@/assets/img/home/vaccination.png'),
          name: '预防接种',
        },
        {
          id: '2',
          url: require('@/assets/img/home/Pediatrics.png'),
          name: '儿科',
        },
        {
          id: '3',
          url: require('@/assets/img/home/PediatricsHealth.png'),
          name: '儿童保健科',
        },
        {
          id: '4',
          url: require('@/assets/img/home/DOG.png'),
          name: '妇产科住院部',
        },
        {
          id: '5',
          url: require('@/assets/img/home/newBorn.png'),
          name: '新生儿病区',
        },
        {
          id: '6',
          url: require('@/assets/img/home/childrenMessage.png'),
          name: '小儿中医推拿',
        },
        {
          id: '7',
          url: require('@/assets/img/home/OGC.png'),
          name: '妇产科门诊部',
        },
        {
          id: '8',
          url: require('@/assets/img/home/ClinicalLaboratory.png'),
          name: '检验科',
        },
        {
          id: '9',
          url: require('@/assets/img/home/Ultrasonography.png'),
          name: '超声科',
        },
        {
          id: '10',
          url: require('@/assets/img/home/anaesthesia.png'),
          name: '麻醉手术室',
        },
      ],
    };
  },
  methods: {
    getDepartmentList() {
      // axios
      //   .post('/api/getColumnList', {})
      //   .then((res) => {
      //     // console.log(res.ColumnData);
      //     this.iconlist = res.ColumnData[2].columndata.list;
      //     // 静态挂载图片，后续可以进行修改
      //     this.iconlist[0].img = require('@/assets/img/home/vaccination.png');
      //     this.iconlist[1].img = require('@/assets/img/home/Pediatrics.png');
      //     this.iconlist[2].img = require('@/assets/img/home/PediatricsHealth.png');
      //     this.iconlist[3].img = require('@/assets/img/home/DOG.png');
      //     this.iconlist[4].img = require('@/assets/img/home/newBorn.png');
      //     this.iconlist[5].img = require('@/assets/img/home/childrenMessage.png');
      //     this.iconlist[6].img = require('@/assets/img/home/OGC.png');
      //     this.iconlist[7].img = require('@/assets/img/home/ClinicalLaboratory.png');
      //     this.iconlist[8].img = require('@/assets/img/home/Ultrasonography.png');
      //     this.iconlist[9].img = require('@/assets/img/home/anaesthesia.png');
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=icon`).then((res) => {
        console.log(res);
      });
    },
  },

  mounted() {
    // this.getDepartmentList();
  },
};
</script>

<style lang="less" scoped>
.pinklogo {
  background-color: rgba(255, 234, 239, 1);
  text-align: center;
  padding: 40px 0 50px 0;
  .logoimg {
    line-height: 60px;
    img {
      width: 292px;
      height: 38px;
    }
  }
  .iconlist {
    padding: 0 30px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    .icon {
      cursor: pointer;
      // display: inline-block;
      // display: flex;
      // flex-direction: row;
      // justify-content: space-between;
      // text-align: center;
      // padding: 0 20px;
      // img {
      //   width: 80px;
      //   height: 80px;
      // }
      .name {
        color: #666666;
        font-size: 15px;
        font-family: Helvetica;
      }
      .img {
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>

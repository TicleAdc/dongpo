<template>
  <div class="cardlist">
    <div class="personcard" v-for="item in professorlist" :key="item.id">
      <div class="describe">
        <div class="introduction">{{ item.columnTitle }}</div>
        <!-- <div class="introduction">专家介绍</div> -->
        <div class="detail" v-html="item.columnContext"></div>
      </div>
      <div class="img"><img :src="item.columnBigimg" alt="" /></div>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
export default {
  name: 'introductioncard',
  data() {
    return {
      professorlist: [
        // {
        //   id: '1',
        //   columnContext: [
        //     'IASLC(国际肺癌研究协会)董事会成员',
        //     'ICGC(国际癌症基因组联盟)研讨会组织主席',
        //     'WCLC（国际肺癌大会）联合主席',
        //   ],
        //  columnBigimg: require('@/assets/img/professor/photo2.png'),
        // },
        // {
        //   id: '2',
        //   columnContext: [
        //     'IASLC(国际肺癌研究协会)董事会成员',
        //     'ICGC(国际癌症基因组联盟)研讨会组织主席',
        //     'WCLC（国际肺癌大会）联合主席',
        //   ],
        //   columnBigimg: require('@/assets/img/professor/photo2.png'),
        // },
        // {
        //   id: '3',
        //   columnContext: [
        //     'IASLC(国际肺癌研究协会)董事会成员',
        //     'ICGC(国际癌症基因组联盟)研讨会组织主席',
        //     'WCLC（国际肺癌大会）联合主席',
        //   ],
        //   columnBigimg: require('@/assets/img/professor/photo2.png'),
        // },
        // {
        //   id: '4',
        //   columnContext: [
        //     'IASLC(国际肺癌研究协会)董事会成员',
        //     'ICGC(国际癌症基因组联盟)研讨会组织主席',
        //     'WCLC（国际肺癌大会）联合主席',
        //   ],
        //   columnBigimg: require('@/assets/img/professor/photo2.png'),
        // },
      ],
    };
  },
  mounted() {
    this.getProfessorLsit();
  },
  methods: {
    getProfessorLsit() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=ZJJS`).then((res) => {
        console.log(res);
        this.professorlist = res.frontmenuList.slice(0, 4);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.cardlist {
  padding: 0 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.personcard {
  // display: inline-block;
  display: flex;
  // height: 122px;
  width: 40%;
  border: 1px solid rgba(107, 107, 107, 0.623);
  margin: 30px 0;
  .describe {
    display: inline-block;
    padding: 20px;
    .introduction {
      color: rgba(74, 93, 163, 1);
      font-size: 16.55px;
      margin-bottom: 10px;
    }
    .detail {
      font-size: 10.81px;
      color: #515151;
      font-family: SourceHanSansCN-Normal;
    }
  }
  .img {
    // width: 122px;
    float: right;
    img {
      object-fit: contain;
    }
  }
}
</style>

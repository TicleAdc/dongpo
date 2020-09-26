<template>
  <div class="cardlist">
    <div class="personcard" v-for="item in professorlist" :key="item.id">
      <div class="describe">
        <div class="introduction">{{ '专家简介' }}</div>
        <div class="detail">{{ item.contentsTitle }}</div>
      </div>
      <div class="img"><img :src="item.imguri" alt="" /></div>
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
        //   detail: '123456789',
        //   url: require('@/assets/img/professor/photo2.png'),
        // },
        // {
        //   id: '2',
        //   detail: '123456789',
        //   url: require('@/assets/img/professor/photo2.png'),
        // },
        // {
        //   id: '3',
        //   detail: '123456789',
        //   url: require('@/assets/img/professor/photo2.png'),
        // },
        // {
        //   id: '4',
        //   detail: '123456789',
        //   url: require('@/assets/img/professor/photo2.png'),
        // },
      ],
    };
  },
  mounted() {
    this.getProfessorLsit();
  },
  methods: {
    getProfessorLsit() {
      axios
        .post('/api/getColumnList', {})
        .then((res) => {
          // console.log(res.ColumnData);
          let classifyid = res.ColumnData[3].columndata.id;
          // console.log(classifyid);
          axios
            .post(`/api/getClassifyPageList?classifyId=${classifyid}&pageNo=1&pagesize=4`, {})
            .then((data) => {
              // console.log(data);
              this.professorlist = data.page.list;
            });
        })
        .catch((err) => {
          console.log(err);
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
  display: inline-block;
  height: 122px;
  width: 40%;
  border: 1px solid rgba(107, 107, 107, 0.623);
  margin: 30px 0;
  .describe {
    display: inline-block;
    padding: 20px;
    .introduction {
      color: rgba(74, 93, 163, 1);
      font-size: 16.55px;
    }
    .detail {
      font-size: 10.81px;
    }
  }
  .img {
    width: 122px;

    float: right;
  }
}
</style>

<template>
  <div class="all">
    <div class="column">
      <column>
        <div class="img" slot="title">
          <img src="@/assets/img/home/PartyMassWork@2x.png" alt="" />
        </div>
        <div class="contents" slot="contents">
          <div class="header">
            <div class="inImg">
              <img src="@/assets/img/home/PartyMassWorkPic@2x.png" alt="" />
            </div>
            <div class="topic">
              {{ '中共眉山市东坡区妇幼保健计划生育 服务中心支部委员会庆祝 . . .' }}
            </div>
          </div>
          <div class="time">
            <span>{{ getTime() }}</span>
          </div>
          <div class="context">
            <ul>
              <li v-for="item in contextlist" :key="item.id">
                <i class="el-icon-caret-left"></i>{{ item.contentsTitle }}
              </li>
            </ul>
          </div>
        </div>
      </column>
    </div>
    <div class="workImg">
      <img src="@/assets/img/home/PartyMassWorkPic@2x.png" alt="" />
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
import column from '@/components/Column';
export default {
  data() {
    return {
      contextlist: [
        // {
        //   id: '01',
        //   content: '以巡查促整改 严标准促提升——眉山市医疗机构巡查反馈会在东坡妇幼...',
        // },
        // {
        //   id: '02',
        //   content: '以巡查促整改 严标准促提升——眉山市医疗机构巡查反馈会在东坡妇幼...',
        // },
        // {
        //   id: '03',
        //   content: '以巡查促整改 严标准促提升——眉山市医疗机构巡查反馈会在东坡妇幼...',
        // },
      ],
      bigImg: '',
    };
  },
  components: {
    column,
  },
  mounted() {
    // this.getTime();
    this.getData();
  },
  methods: {
    getTime() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDay();
      let time = year + '-' + month + '-' + day;
      return time;
    },
    getData() {
      axios.post('/api/getColumnList', {}).then((res) => {
        // console.log(res);
        // console.log(this.contextlist);
        // console.log(res.ColumnData[5].columndata.list[0].id);
        let classifyid = res.ColumnData[5].columndata.list[0].id;
        console.log(classifyid);
        axios
          .post(`/api/getClassifyPageList?classifyId=${classifyid}&pageNo=1&pagesize=4`, {})
          .then((data) => {
            // console.log(data);
            this.contextlist = data.page.list;
          });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.all {
  display: flex;
  justify-content: space-between;
  background-color: white;
}

.contents {
  padding: 10px 30px;
  .header {
    display: flex;
    justify-content: space-between;
    .inImg {
      width: 40%;
    }
    .topic {
      padding: 0 3%;
      font-size: 16px;
    }
  }
  .time {
    width: 100%;
    text-align: center;
    font-size: 10.81px;
  }
  .context {
    padding-top: 10px;
    ul {
      list-style: none;
      border-top: 1px solid rgba(173, 170, 170, 0.863);
      li {
        padding: 5px;
        border-bottom: 1px solid rgba(173, 170, 170, 0.863);
      }
    }
  }
}
.workImg {
  margin-top: 75px;
  margin-right: 50px;
}
</style>

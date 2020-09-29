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
      <img :src="bigImg" alt="" />
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
import column from '@/components/Column';
export default {
  name: 'partywork',
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
      let day = date.getDate();
      let time = year + '-' + month + '-' + day;
      return time;
    },
    getData() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=partywork`).then((res) => {
        // console.log(res);
        this.bigImg = res.frontmenuList[0].columnBigimg;
        let tagid = res.frontmenuList[1].columnData[0].id;
        axios.post(`/api/getTagPageList?tagid=${tagid}&pageNo=1&pagesize=5`, {}).then((data) => {
          // console.log(data);
          this.contextlist = data.page.list;
          // console.log(this.contextlist);
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
      cursor: pointer;
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
    font-size: 14px;
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
  img {
    width: 500px;
  }
}
</style>

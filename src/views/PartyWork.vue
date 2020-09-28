<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 11:10:50
 * @FilePath: /dongpo/src/views/PartyWork.vue
 * @LastEditTime: 2020-09-28 17:39:14
-->
<template>
  <div class="party-work">
    <Title>
      <div slot="theme">党群工作</div>
    </Title>
    <div class="content">
      <div class="top">
        <header-title title="党建动态"></header-title>
      </div>
      <div class="bottom">
        <img :src="columnBigimg" alt="" class="big" />
        <div class="bottom-right">
          <div class="head">
            <img :src="columnSmallimg" alt="" class="small" />
            <div class="right-content">
              <p>{{ content }}</p>
              <span class="bottom">{{ time }}</span>
            </div>
          </div>
          <msg-list
            :showTitle="false"
            :showPagination="false"
            :list="partyDynamic"
            :showTime="false"
          ></msg-list>
        </div>
      </div>
      <div class="building">
        <div class="left">
          <header-title title="党的建设"></header-title>
          <msg-list
            :showTitle="false"
            :showPagination="false"
            :list="partyBuilding"
            :showTime="false"
          ></msg-list>
        </div>
        <div class="right">
          <header-title title="党风廉政"></header-title>
          <msg-list
            :showTitle="false"
            :showPagination="false"
            :list="partyBuilding"
            :showTime="false"
          ></msg-list>
        </div>
      </div>
    </div>
    <div class="b"></div>
  </div>
</template>

<script>
import axios from '@/api/request.js';
import Title from '@/components/Title';
import headerTitle from '@/components/common/headerTitle';
import msgList from '@/components/common/msgList';
export default {
  components: {
    Title,
    headerTitle,
    msgList,
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get(`/api/getColumnDataByPositionId?columnPositionId=DQGZ`).then((res) => {
        console.log(res);
      });
    },
  },
  data() {
    return {
      // 右边区域的内容
      content: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos nisi
                molestiae, consectetur ea nobis, minima placeat ex sint voluptatum maiores voluptas
                expedita quos dolores dolore nemo ducimus, adipisci culpa quasi.`,
      // 显示的时间
      time: '2020-2-3',
      // 大图片的地址
      columnBigimg: '',
      // 小图片的地址
      columnSmallimg: '',
      // 党建动态列表
      partyDynamic: [
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
      ],
      // 党的建设
      partyBuilding: [
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
      ],
      // 党风廉政
      partyStyle: [
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
        {
          columnContext:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates eaque porro idreiciendis sequi placeat sit libero dignissimos expedita accusamus ducimus, delectus eiusprovident, magni exercitationem assumenda? Cupiditate, odio?',
          time: '2020-2-10',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.party-work {
  background-color: #fff;
  .content {
    padding: 30px;

    .bottom {
      display: flex;
      margin-top: 20px;
      .big {
        min-width: 425px;
        min-height: 300px;
        margin-right: 40px;
        flex: 1;
      }
      .bottom-right {
        flex: 1.5;
        overflow: hidden;
        align-items: center;
        .head {
          display: flex;
          .small {
            flex: 1;
            margin-right: 30px;
            min-width: 200px;
            min-height: 150px;
          }
          .right-content {
            flex: 1.5;
            color: rgba(74, 93, 163, 1);
            position: relative;
            p {
              text-overflow: ellipsis;
              overflow: hidden;
              height: 46px;
            }
            > .bottom {
              position: absolute;
              bottom: 0;
              color: gray;
              font-size: 14px;
            }
          }
        }
      }
    }
    .building {
      display: flex;
      margin-top: 20px;
      .left {
        flex: 1;
        overflow: hidden;
        margin-right: 50px;
      }
      .right {
        flex: 1;
        overflow: hidden;
      }
    }
  }
  .b {
    padding-bottom: 50px;
  }
}
</style>

<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 11:10:24
 * @FilePath: /dongpo/src/views/FeaturedMedical.vue
 * @LastEditTime: 2020-09-22 11:21:19
-->
<template>
  <div class="featured-medical">
    <div class="position"></div>
    <div class="top-header">
      <span>首页</span>
      <li class="el-icon-arrow-right"></li>
      <span>特色医疗</span>
      <li class="el-icon-arrow-right"></li>
      <span>科室设置</span>
      <li class="el-icon-arrow-right"></li>
      <span>儿童保健科</span>
    </div>
    <div class="main-featured-medical">
      <aside>
        <div class="header">
          <span>科室设置</span>
          <i class="el-icon-arrow-down"></i>
        </div>
        <ul class="de">
          <li v-for="(item, index) in department" :key="index">{{ item }}</li>
        </ul>
        <div class="footer">专家介绍</div>
      </aside>
      <main>
        <div class="title">
          专家介绍
          <img class="head-img" src="@/assets/img/professor/专家介绍背景图@2x.png" alt="" />
        </div>
        <div class="expert-introduction" v-for="(item, index) in expertIntroduction" :key="index">
          <div class="left">
            <img :src="item.src" :alt="item.name" />
            <div class="foot">
              <h2>{{ item.name }}</h2>
              <p>{{ item.department }}</p>
            </div>
          </div>
          <div class="right">
            <h2>{{ item.position }}</h2>
            <p>{{ item.educationalLevel }}</p>
            <p>{{ item.work }}</p>
            <p class="content">{{ item.content }}</p>
            <img src="@/assets/img/professor/专家介绍背景图@2x.png" alt="" />
          </div>
        </div>
        <div class="page">
          <el-pagination background layout="total,prev, pager, next" :total="20"> </el-pagination>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from '@/api/request.js';

export default {
  data() {
    return {
      expertIntroduction: [
        {
          src: require('@/assets/img/professor/照片2@2x.png'),
          name: '吴勇',
          department: '儿童保健科',
          position: '内科主任医师',
          educationalLevel: '大学本科     医学学士',
          work: '负责   预防保健  公共卫生  体检',
          content: `从事内科临床工作30年，曾在四川大学华西医院等三甲医院多次进修学习，
          我院高血压专科门诊主诊医师，擅长于内科常见病、多发病的诊断治疗，尤其是高血压、
          糖尿病的诊治。重点研究方向是高校人群心血管疾病的危险因素监测以及防治。负责主持和参研4项国家以及省级、校级科研项目。公开发表医学论文15篇。`,
        },
        {
          src: require('@/assets/img/professor/照片2@2x.png'),
          name: '张莉',
          department: '儿童保健科',
          position: '内科主任医师',
          educationalLevel: '大学本科     医学学士',
          work: '负责   预防保健  公共卫生  体检',
          content: `从事内科临床工作30年，曾在四川大学华西医院等三甲医院多次进修学习，
          我院高血压专科门诊主诊医师，擅长于内科常见病、多发病的诊断治疗，尤其是高血压、
          糖尿病的诊治。重点研究方向是高校人群心血管疾病的危险因素监测以及防治。负责主持和参研4项国家以及省级、校级科研项目。公开发表医学论文15篇。`,
        },
        {
          src: require('@/assets/img/professor/照片2@2x.png'),
          name: '李梅',
          department: '儿童保健科',
          position: '内科主任医师',
          educationalLevel: '大学本科     医学学士',
          work: '负责   预防保健  公共卫生  体检',
          content: `从事内科临床工作30年，曾在四川大学华西医院等三甲医院多次进修学习，
          我院高血压专科门诊主诊医师，擅长于内科常见病、多发病的诊断治疗，尤其是高血压、
          糖尿病的诊治。重点研究方向是高校人群心血管疾病的危险因素监测以及防治。负责主持和参研4项国家以及省级、校级科研项目。公开发表医学论文15篇。`,
        },
        {
          src: require('@/assets/img/professor/照片2@2x.png'),
          name: '吴勇',
          department: '儿童保健科',
          position: '内科主任医师',
          educationalLevel: '大学本科     医学学士',
          work: '负责   预防保健  公共卫生  体检',
          content: `从事内科临床工作30年，曾在四川大学华西医院等三甲医院多次进修学习，
          我院高血压专科门诊主诊医师，擅长于内科常见病、多发病的诊断治疗，尤其是高血压、
          糖尿病的诊治。重点研究方向是高校人群心血管疾病的危险因素监测以及防治。负责主持和参研4项国家以及省级、校级科研项目。公开发表医学论文15篇。`,
        },
        {
          src: require('@/assets/img/professor/照片2@2x.png'),
          name: '张莉',
          department: '儿童保健科',
          position: '内科主任医师',
          educationalLevel: '大学本科     医学学士',
          work: '负责   预防保健  公共卫生  体检',
          content: `从事内科临床工作30年，曾在四川大学华西医院等三甲医院多次进修学习，
          我院高血压专科门诊主诊医师，擅长于内科常见病、多发病的诊断治疗，尤其是高血压、
          糖尿病的诊治。重点研究方向是高校人群心血管疾病的危险因素监测以及防治。负责主持和参研4项国家以及省级、校级科研项目。公开发表医学论文15篇。`,
        },
        {
          src: require('@/assets/img/professor/照片2@2x.png'),
          name: '李梅',
          department: '儿童保健科',
          position: '内科主任医师',
          educationalLevel: '大学本科     医学学士',
          work: '负责   预防保健  公共卫生  体检',
          content: `从事内科临床工作30年，曾在四川大学华西医院等三甲医院多次进修学习，
          我院高血压专科门诊主诊医师，擅长于内科常见病、多发病的诊断治疗，尤其是高血压、
          糖尿病的诊治。重点研究方向是高校人群心血管疾病的危险因素监测以及防治。负责主持和参研4项国家以及省级、校级科研项目。公开发表医学论文15篇。`,
        },
      ],
      department: [
        '预防接种',
        '儿科',
        '妇产科门诊部',
        '妇产科住院部',
        '检验科',
        '超声科',
        '麻醉手术室',
      ],
    };
  },
  created() {
    // 请求连接
    axios.post('/api/getClassifyPageList?classifyId=1&pageNo=1&pagesize=5').then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="less" scoped>
.featured-medical {
  background-color: #fff;
  color: #666666;

  .main-featured-medical {
    display: flex;
    aside {
      width: 177.91px;
      height: 506.54px;
      display: flex;
      flex: 0.168;
      flex-direction: column;
      align-items: center;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.247);
      font-size: 19.11px;
      .header {
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          margin-left: 8px;
        }
      }
      .de {
        height: 413px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 15.29px;
        border: solid rgba(1, 1, 1, 0.075);
        border-width: 0.5px 0;
        > li {
          flex: 1;
          display: flex;
          align-items: center;
        }
      }
      .footer {
        height: 48px;
        line-height: 48px;
        color: #4a5da3;
      }
    }
    main {
      flex: 0.83;
      padding: 0 36px;
      .title {
        color: #4a5da3;
        font-size: 28.31px;
        position: relative;
        margin-top: 29px;
        .head-img {
          position: absolute;
          width: 41px;
          height: 41px;
        }
      }
      .expert-introduction {
        display: flex;
        height: 204px;
        box-shadow: 10px 10px 10px 3px rgba(0, 0, 0, 0.151);
        margin-top: 49px;
        &:last-child {
          margin-bottom: 30px;
        }
        .left {
          flex: 0.18;
          display: flex;
          flex-direction: column;
          > .foot {
            background-color: #e8f1fa;
            flex: 0.82;
            h2 {
              text-align: center;
              color: #4a5da3;
              font-size: 17.64px;
            }
            p {
              text-align: center;
              font-size: 13.2px;
            }
          }
          img {
            flex: 2;
            height: inherit;
          }
          @media screen and(min-width: 1600px) {
            img {
              height: 60%;
            }
          }
        }
        .right {
          flex: 0.82;
          padding: 0 12%;
          padding-left: 13px;
          font-size: 16px;
          font-family: SourceHanSansCN-Bold;
          position: relative;
          h2 {
            font-size: 16px;
          }
          p {
            font-size: 14px;
            color: #4d4d4d;
          }
          .content {
            color: rgba(77, 77, 77, 0.541);
            margin-top: 14px;
          }
          img {
            width: 147px;
            height: 119px;
            position: absolute;
            right: 5px;
            top: 20%;
          }
        }
      }
      .page {
        margin-top: 247px;
        margin-bottom: 38px;
        display: flex;
        justify-content: center;
      }
    }
  }
  .position {
    height: 28px;
  }
  .top-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 43px;
    border: solid rgba(1, 1, 1, 0.075);
    border-width: 0.5px 0;
    font-size: 12px;
    color: #666666;
    padding-left: 35px;
  }
}
</style>

<style lang="less" scoped>
.main-featured-medical {
  main {
    .page {
      .el-pagination {
        font-size: 16px;
        .btn-prev,
        .btn-next {
          width: 83.59px;
          height: 49px;
          background-color: #fff;
          border: 0.5px solid rgba(0, 0, 0, 0.151);
          &:not(:disabled) {
            color: #4a5da3;
          }
        }
        .number {
          width: 49px;
          height: 49px;
          line-height: 49px;
          text-align: center;
          font-size: 16px;
          border: 0.5px solid rgba(0, 0, 0, 0.151);
          background-color: #fff;
        }
        .el-icon {
          font-size: 16px;
        }
        .el-pagination__total {
          width: 83.59px;
          height: 49px;
          display: inline-block;
          margin: 0 5px;
          background-color: #fff;
          color: #606266;
          min-width: 30px;
          border-radius: 2px;
          font-size: 16px;
          text-align: center;
          line-height: 49px;
          border: 0.5px solid rgba(0, 0, 0, 0.151);
          color: #4a5da3;
        }
      }
    }
  }
}
</style>

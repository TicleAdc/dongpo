<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 16:24:45
 * @FilePath: /dongpo/src/components/bottomFooter.vue
 * @LastEditTime: 2020-09-18 14:03:45
-->
<template>
  <div class="footer">
    <div class="top">
      <div class="child" @click="backTop">
        <i class="el-icon-arrow-up"></i>
        返回顶部
      </div>
    </div>
    <div class="bottom">
      <div class="first">
        <div class="one">
          <img src="@/assets/img/brand/左下角logo@2x.png" alt="" />
          <div>
            <p>查看地图</p>
            <p>眉山市东坡区府街92号</p>
          </div>
          <div>
            <p>联系信息</p>
            <p>妇产科电话： 028-38235760</p>
            <p>儿科电话： 028-38225907</p>
          </div>
          <div>
            <p>自媒体矩阵</p>
            <p>微信公众号： 眉山市东坡区妇幼保健院</p>
            <p>新浪微博号： 眉山东坡妇幼</p>
            <p>今日头条号： 坡区妇幼保健院</p>
            <p>网易新闻号： 眉山市东坡区妇幼保健院</p>
            <p>搜狐新闻号： 东坡区妇幼保健院</p>
          </div>
          <div class="qrcode">
            <img src="@/assets/img/brand/位图@2x.png" alt="" />
            <p>微信公众号</p>
          </div>
        </div>
        <div class="two">
          <p>网络备案： 川ICP备1601453号-1</p>
          <p>眉山市东坡区妇幼保I</p>
          <p>技术支持：汤谷互动</p>
        </div>
      </div>
      <div class="second">
        <div class="one">
          <div class="title">
            <div class="circle"><i class="el-icon-arrow-right"></i></div>
            <span>
              <a href="#/overview">医院概况</a>
            </span>
          </div>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/introduction">医院介绍</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/leader">现任领导</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/honor">医院荣誉</a></span>
          </p>
        </div>
        <div class="two">
          <div class="title">
            <div class="circle"><i class="el-icon-arrow-right"></i></div>
            <span><a href="#/medicalservice">医疗服务</a></span>
          </div>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/appointment">预约挂号</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/reportquery">报告查询</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/navegation">院内导航</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/medicalguidance">就诊指导</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/physicalexaminationquery">体检查询</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/ordinaryquestion">常见问题</a></span>
          </p>
        </div>
        <div class="three">
          <div class="title">
            <div class="circle"><i class="el-icon-arrow-right"></i></div>
            <span><a href="#/healthcare">母婴保健</a></span>
          </div>
        </div>
      </div>
      <div class="third">
        <div class="one">
          <div class="title">
            <div class="circle"><i class="el-icon-arrow-right"></i></div>
            <span><a href="#/news">新闻动态</a></span>
          </div>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/hospitalnews">医院新闻</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/linenews">业界新闻</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/mediareport">媒体报道</a></span>
          </p>
        </div>
        <div class="two">
          <div class="title">
            <div class="circle"><i class="el-icon-arrow-right"></i></div>
            <span><a href="#/featuredmedical">特色医疗</a></span>
          </div>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/vaccination">预防接种</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/pediatrics">儿科</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/theoutpatient">妇产科门诊部</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/obstetrics">妇产科住院部</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/clinicallaboratory">检验科</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/ultrasonography">超声科</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/anaesthesia">麻醉手术室</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/introductpro">专家介绍</a></span>
          </p>
        </div>
      </div>
      <div class="fourth">
        <div class="one">
          <div class="title">
            <div class="circle"><i class="el-icon-arrow-right"></i></div>
            <span><a href="#/partywork">党群工作</a></span>
          </div>
        </div>
        <div class="two">
          <div class="title">
            <div class="circle"><i class="el-icon-arrow-right"></i></div>
            <span><a href="#/hospitalcultrue">医院文化</a></span>
          </div>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/brandimage">品牌形象</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/tents">院训宗旨</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/specialculture">特色文化</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/stuffstyle">职工风采</a></span>
          </p>
        </div>
        <div class="three">
          <div class="title">
            <div class="circle"><i class="el-icon-arrow-right"></i></div>
            <span><a href="#/specialactivity">专题活动</a></span>
          </div>
        </div>
        <div class="four">
          <div class="title">
            <div class="circle"><i class="el-icon-arrow-right"></i></div>
            <span><a href="#/healthscience">健康科普</a></span>
          </div>
        </div>
        <div class="five">
          <div class="title">
            <div class="circle"><i class="el-icon-arrow-right"></i></div>
            <span><a href="#/announcement">通知公告</a></span>
          </div>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/hospitalbulletin">医院公告</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/tenderInfo">招标信息</a></span>
          </p>
          <p>
            <i class="el-icon-caret-right"></i>
            <span><a href="#/recruitment">招聘信息</a></span>
          </p>
        </div>
      </div>
    </div>
    <div class="foot">
      <img src="@/assets/img/brand/底部logo@2x.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  background-color: #fff;

  .top {
    height: 52px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: solid rgba(0, 0, 0, 1);
    border-width: 0.5px 0;
    padding-right: 40px;
    font-size: 11px;
    .child {
      user-select: none;
      cursor: pointer;
    }
  }
  .bottom {
    display: flex;
    flex-direction: row;
    height: 598px;
    > .first {
      display: flex;
      flex: 0.287;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      display: flex;
      border-right: 0.5px solid rgba(0, 0, 0, 1);

      > * {
        flex-direction: column;
        justify-content: center;
        display: flex;
        width: 100%;
      }
      .one {
        flex: 0.83;
        border-bottom: 0.5px solid rgba(0, 0, 0, 1);
        > img {
          width: 242px;
          height: 50px;
          margin: 0 auto;
        }
        .qrcode {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 34%;
          img {
            width: 69.6px;
            height: 69.6px;
          }
          p {
            margin-left: 2px;
          }
        }
        > div {
          margin: 11px;
          p {
            &:first-child {
              margin-bottom: 2px;
            }
            margin-left: 34%;
          }
        }
      }
      .two {
        flex: 0.17;
        p {
          margin-left: 12%;
        }
      }
    }
    > .second {
      flex: 0.213;
    }
    > .third {
      flex: 0.213;
    }
    > .fourth {
      flex: 0.287;
    }
    p {
      color: rgba(81, 81, 81, 1);
      font-size: 10.81px;
      font-family: SourceHanSansCN-Regular;
    }
    .title {
      span {
        font-size: 14.78px;
        font-family: SourceHanSansCN-Normal;
        color: black;
      }
    }
    > div {
      display: flex;
      flex-direction: column;
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
          display: flex;
          align-items: center;
          margin-left: 10%;
          .circle {
            border-radius: 50%;
            background-color: black;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 5px;
          }
        }
        p {
          margin-top: 18px;
          margin-left: 10%;
          span {
            font-size: 10.81px;
            font-family: SourceHanSansCN-Normal;
            a {
              color: gray;
            }
          }
        }
      }
    }
    > div.first {
      > div {
        p {
          margin-top: 0px;
        }
      }
    }
    .second {
      .one {
        flex: 0.31;
        border: solid rgba(0, 0, 0, 1);
        border-width: 0 0.5px 0.5px 0;
      }
      .two {
        flex: 0.47;
        border: solid rgba(0, 0, 0, 1);
        border-width: 0 0.5px 0.5px 0;
      }
      .three {
        flex: 0.22;
        border: solid rgba(0, 0, 0, 1);
        border-width: 0 0.5px 0 0;
      }
    }
    .third {
      .one {
        flex: 0.31;
        border: solid rgba(0, 0, 0, 1);
        border-width: 0 0.5px 0.5px 0;
      }
      .two {
        flex: 0.69;
        border: solid rgba(0, 0, 0, 1);
        border-width: 0 0.5px 0 0;
      }
    }
    .fourth {
      .one {
        flex: 0.11;
        border: solid rgba(0, 0, 0, 1);
        border-right: 0;
        border-width: 0 0.5px 0.5px 0;
      }
      .two {
        flex: 0.32;
        border: solid rgba(0, 0, 0, 1);
        border-right: 0;
        border-width: 0 0.5px 0.5px 0;
      }
      .three {
        flex: 0.11;
        border: solid rgba(0, 0, 0, 1);
        border-right: 0;
        border-width: 0 0.5px 0.5px 0;
      }
      .four {
        flex: 0.11;
        border: solid rgba(0, 0, 0, 1);
        border-right: 0;
        border-width: 0 0.5px 0.5px 0;
      }
      .five {
        flex: 0.45;
        border: solid rgba(0, 0, 0, 1);
        border-right: 0;
        border-width: 0 0.5px 0 0;
      }
    }
  }
  .foot {
    background-color: #4a5da3;
    height: 124.88px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    img {
      width: 511px;
      height: 50px;
    }
  }
}
span {
  a {
    color: black;
  }
}
</style>

<template>
  <div>
    <banner></banner>
    <cardlist></cardlist>
    <tabs :tabList="tabs.list" @more="tabMore"></tabs>
    <departmentlist></departmentlist>
    <column>
      <div slot="title" class="img">
        <img src="@/assets/img/home/introducePressor@2x.png" alt="" />
        <div class="checkmore">查看更多</div>
      </div>
      <div slot="contents">
        <personcard></personcard>
      </div>
    </column>
    <column>
      <div slot="title" class="img">
        <img src="@/assets/img/home/HealthLeading@2x.png" alt="" />
        <div class="checkmore">查看更多</div>
      </div>
      <div slot="contents">
        <healthscience></healthscience>
      </div>
    </column>
    <works></works>
    <column>
      <div class="img" slot="title">
        <img src="@/assets/img/home/thematicActivities@2x.png" alt="" />
      </div>
      <div slot="contents">
        <activety></activety>
      </div>
    </column>
    <column>
      <div class="img" slot="title">
        <img src="@/assets/img/home/outpatientDepartment@2x.png" alt="" />
      </div>
      <div slot="contents">
        <outpatientservice></outpatientservice>
      </div>
    </column>
  </div>
</template>

<script>
import banner from '@/components/Banner';
import column from '@/components/Column';
import cardlist from '@/components/CardList';
import tabs from '@/components/Tabs';
import departmentlist from '@/components/DepartmentList';
import personcard from '@/components/PersonCard';
import healthscience from '@/components/HealthScienceCard';
import works from '@/components/Works';
import outpatientservice from '@/components/OutpatientService';
import activety from '@/components/Activity';
import debug from '../data/debug';

export default {
  name: 'Home',
  data() {
    return {
      tabs: {
        list: debug.tabs,
      },
    };
  },
  components: {
    personcard,
    banner,
    column,
    cardlist,
    tabs,
    departmentlist,
    healthscience,
    works,
    outpatientservice,
    activety,
  },
  methods: {
    tabMore() {
      console.log('tab more');
    },
  },
};
</script>

<style lang="less" scoped>
.img {
  height: 30px;
}
.checkmore {
  position: relative;
  top: -62px;
  right: -94%;
  font-size: 10px;
  color: white;
  background-color: #4a5da3;
  width: 5%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
}
</style>

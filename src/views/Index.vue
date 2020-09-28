<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-22 15:03:39
 * @FilePath: /dongpo/src/views/Index.vue
 * @LastEditTime: 2020-09-24 16:05:48
-->
<template>
  <div>
    <component :is="showComponentName"></component>
  </div>
</template>

<script>
// 导入组件必须和路径名字一模一样
import overview from '@/views/Overview.vue';
import home from '@/views/Home.vue';
import medicalservice from '@/views/MedicalService';
import healthcare from '@/views/HealthCare';
import news from '@/views/News';
import featuredmedical from '@/views/FeaturedMedical';
import partywork from '@/views/PartyWork';
import hospitalculture from '@/views/HospitalCulture';
import specialactivity from '@/views/SpecialActivity';
import healthscience from '@/views/HealthScience';
import announcement from '@/views/Announcement';
import navegation from '@/views/navegation';
import reportquery from '@/views/reportquery';
import medicalguidance from '@/views/medicalguidance';
import physicalexaminationquery from '@/views/physicalexaminationquery';
import ordinaryquestion from '@/views/ordinaryquestion';

import hospitalnews from '@/components/hospitalNews';
import linenews from '@/components/lineNews';
import mediareport from '@/components/mediaReport';
import detail from '@/components/detail';


export default {
  components: {
    overview,
    home,
    medicalservice,
    healthcare,
    news,
    featuredmedical,
    partywork,
    hospitalculture,
    specialactivity,
    healthscience,
    announcement,
    hospitalnews,
    linenews,
    mediareport,
    detail,
    navegation,
    reportquery,
    medicalguidance,
    physicalexaminationquery,
    ordinaryquestion
  },
  props: {
    showComponentName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped></style>

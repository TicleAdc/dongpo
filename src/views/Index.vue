<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-22 15:03:39
 * @FilePath: /dongpo/src/views/Index.vue
 * @LastEditTime: 2020-09-28 09:14:40
-->
<template>
  <div>
    <component :is="showComponentName"></component>
  </div>
</template>

<script>
// 导入组件必须和路径名字一模一样
import overview from '@/views/Overview.vue';
import Home from '@/views/Home.vue';
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
import brandImage from '@/views/brandImage';

import hospitalnews from '@/components/hospitalNews';
import linenews from '@/components/lineNews';
import mediareport from '@/components/mediaReport';
import detail from '@/components/detail';
// import hospitalannounc from '@/components/hospitalannounc';
// import biddinginformation from '@/components/biddinginformation';
// import joboffers from '@/components/joboffers';
import introduction from '@/views/Introduction';
import leader from '@/components/leader';
import honor from '@/components/honor';
import hospitalbulletin from '@/components/HospitalBulletin';
import tenderInfo from '@/components/tenderInfo';
import recruitmentInformation from '@/components/recruitmentInformation';
import rumorRefutation from '@/components/rumorRefutation';
import healthtreasure from '@/components/healthTreasure';
import dongpoEmotion from '@/components/dongpoEmotion';
import appointment from '@/components/appointment';
import vaccination from '@/views/vaccination';
import tents from '@/views/Tents';
import brandimage from '@/views/brandImage';
import stuffstyle from '@/views/staffStyle';
import specialculture from '@/views/specialCulture';

export default {
  components: {
    overview,
    Home,
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
    ordinaryquestion,
    // hospitalannounc,
    // biddinginformation,
    // joboffers,
    introduction,
    leader,
    honor,
    hospitalbulletin,
    tenderInfo,
    recruitmentInformation,
    rumorRefutation,
    healthtreasure,
    dongpoEmotion,
    vaccination,
    brandImage,
    appointment,
    tents,
    brandimage,
    stuffstyle,
    specialculture,
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

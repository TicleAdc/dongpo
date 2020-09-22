<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-22 15:03:39
 * @FilePath: /dongpo/src/views/Index.vue
 * @LastEditTime: 2020-09-22 15:16:23
-->
<template>
  <div>
    <component :is="showComponentName"></component>
  </div>
</template>

<script>
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

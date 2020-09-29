<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-24 14:51:52
 * @FilePath: /dongpo/src/views/Announcement.vue
 * @LastEditTime: 2020-09-28 15:30:58
-->
<template>
  <div class="announcement">
    <main-component currentRoute="/announcement" v-model="showComponent" title="通知公告">
      <template #component>
        <component :is="showComponent"></component>
      </template>
    </main-component>
  </div>
</template>

<script>
// import hospitalannounc from '@/components/hospitalannounc';
import hospitalbulletin from '@/components/HospitalBulletin';
import tenderInfo from '@/components/tenderInfo';
import Title from '@/components/Title';
import recruitmentinformation from '@/components/recruitmentInformation';
import mainComponent from '@/components/common/mainComponent';
// 跳转路由
export default {
  data() {
    return {
      showComponent: '',
    };
  },
  components: {
    // hospitalannounc,
    hospitalbulletin,
    tenderInfo,
    Title,
    recruitmentinformation,
    mainComponent,
  },
};
</script>

<style lang="less" scoped></style>

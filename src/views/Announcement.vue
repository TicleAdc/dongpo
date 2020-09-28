<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-24 14:51:52
 * @FilePath: /dongpo/src/views/Announcement.vue
 * @LastEditTime: 2020-09-28 11:12:06
-->
<template>
  <div class="announcement">
    <main-component currentRoute="/announcement" v-model="showComponent">
      <template #component>
        <component :is="showComponent"></component>
      </template>
    </main-component>
  </div>
</template>

<script>
import hospitalannounc from '@/components/hospitalannounc';
import biddinginformation from '@/components/biddinginformation';
import joboffers from '@/components/joboffers';
import Title from '@/components/Title';
import mainComponent from '@/components/common/mainComponent';
// 跳转路由
export default {
  data() {
    return {
      showComponent: '',
    };
  },
  components: {
    hospitalannounc,
    biddinginformation,
    joboffers,
    Title,
    mainComponent,
  },
};
</script>

<style lang="less" scoped></style>

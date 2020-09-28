<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-24 14:51:52
 * @FilePath: /dongpo/src/views/Announcement.vue
 * @LastEditTime: 2020-09-28 11:12:06
-->
<template>
  <div class="announcement">
    <main-component currentRoute="/overview" v-model="showComponent">
      <template #component>
        <component :is="showComponent"></component>
      </template>
    </main-component>
  </div>
</template>

<script>
import hospitalnews from '@/components/hospitalNews';
import linenews from '@/components/lineNews';
import mediareport from '@/components/mediaReport';
import mainComponent from '@/components/common/mainComponent';
// 跳转路由
export default {
  data() {
    return {
      showComponent: '',
    };
  },
  components: {
    mainComponent,
    hospitalnews,
    linenews,
    mediareport,
  },
};
</script>

<style lang="less" scoped></style>

<template>
  <div class="announcement">
    <main-component currentRoute="/news" v-model="showComponent" title="新闻动态">
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

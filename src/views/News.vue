<template>
  <div class="announcement">
    <main-component currentRoute="/news" v-model="showComponent" title="新闻动态">
      <template #component>
        <msgListContainer></msgListContainer>
      </template>
    </main-component>
  </div>
</template>

<script>
// import hospitalnews from '@/components/hospitalNews';
// import linenews from '@/components/lineNews';
// import mediareport from '@/components/mediaReport';
import mainComponent from '@/components/common/mainComponent';
import msgListContainer from '@/components/common/msgListContainer';
// 跳转路由
export default {
  data() {
    return {
      showComponent: '',
    };
  },
  components: {
    mainComponent,
    msgListContainer,
    // hospitalnews,
    // linenews,
    // mediareport,
  },
};
</script>

<style lang="less" scoped></style>

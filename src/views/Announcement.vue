<template>
  <div class="announcement">
    <main-component currentRoute="/announcement" v-model="showComponent" title="通知公告">
      <template #component>
        <msgListContainer></msgListContainer>
      </template>
    </main-component>
  </div>
</template>

<script>
// import hospitalannounc from '@/components/hospitalannounc';
// import hospitalbulletin from '@/components/HospitalBulletin';
// import tenderInfo from '@/components/tenderInfo';
// import Title from '@/components/Title';
// import recruitmentinformation from '@/components/recruitmentInformation';
import msgListContainer from '@/components/common/msgListContainer';
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
    // hospitalbulletin,
    // tenderInfo,
    // Title,
    // recruitmentinformation,
    mainComponent,
    msgListContainer,
  },
};
</script>

<style lang="less" scoped></style>

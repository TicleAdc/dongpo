<template>
  <div>
    <main-component currentRoute="/healthscience" v-model="showComponent" title="健康科普">
      <template #component>
        <component :is="showComponent"></component>
      </template>
    </main-component>
  </div>
</template>

<script>
import mainComponent from '@/components/common/mainComponent';
import rumorRefutation from '@/components/rumorRefutation';
import healthtreasure from '@/components/healthTreasure';
import dongpoEmotion from '@/components/dongpoEmotion';
export default {
  data() {
    return {
      showComponent: '',
    };
  },
  components: {
    mainComponent,
    rumorRefutation,
    healthtreasure,
    dongpoEmotion,
  },
};
</script>

<style lang="less" scoped></style>

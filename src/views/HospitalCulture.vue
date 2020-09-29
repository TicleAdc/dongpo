<template>
  <div>
    <main-component currentRoute="/hospitalculture" v-model="showComponent" title="医院文化">
      <template #component>
        <component :is="showComponent"></component>
      </template>
    </main-component>
  </div>
</template>

<script>
import mainComponent from '@/components/common/mainComponent';
import brandimage from '@/views/brandImage';
import tents from '@/views/Tents';
import specialculture from '@/views/specialCulture';
import stuffstyle from '@/views/staffStyle';
export default {
  components: {
    mainComponent,
    brandimage,
    tents,
    specialculture,
    stuffstyle,
  },
  data() {
    return {
      showComponent: '',
    };
  },
};
</script>

<style lang="less" scoped></style>

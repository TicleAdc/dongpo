<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 11:01:37
 * @FilePath: /dongpo/src/views/MedicalService.vue
 * @LastEditTime: 2020-09-17 11:01:55
-->
<template>
  <div>
    <mainComponent currentRoute="/medicalservice" title="医疗服务" v-model="showComponent">
      <template #component>
        <component :is="showComponent"></component>
      </template>
    </mainComponent>
  </div>
</template>

<script>
import mainComponent from '@/components/common/mainComponent';
import appointment from '@/components/appointment';
import reportquery from '@/views/reportquery';
import navegation from '@/views/navegation';
import medicalguidance from '@/views/medicalguidance';
import physicalexaminationquery from '@/views/physicalexaminationquery';
import ordinaryquestion from'@/views/ordinaryquestion';


export default {
  components: {
    mainComponent,
    appointment,
    reportquery,
    navegation,
    medicalguidance,
    physicalexaminationquery,
    ordinaryquestion
  },

  data() {
    return {
      showComponent: '',
    };
  },
};
</script>

<style lang="less" scoped></style>

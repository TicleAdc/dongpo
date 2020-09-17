<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:58:33
 * @FilePath: /dongpo/src/views/Home.vue
 * @LastEditTime: 2020-09-17 10:58:37
-->
<template>
  <div>
    home
    <banner></banner>
    <column title="专家门诊"></column>
  </div>
</template>

<script>
import banner from '@/components/Banner';
import column from '@/components/Column';
export default {
  components: {
    banner,
    column,
  },
};
</script>

<style lang="less" scoped></style>

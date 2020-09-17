<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-17 10:58:33
 * @FilePath: /dongpo/src/views/Home.vue
 * @LastEditTime: 2020-09-17 10:58:37
-->
<template>
  <div>
    <banner></banner>
    <cardlist></cardlist>
    <tabs></tabs>
    <!-- <column> </column> -->
  </div>
</template>

<script>
import banner from '@/components/Banner';
// import column from '@/components/Column';
import cardlist from '@/components/CardList';
import tabs from '@/components/Tabs';
export default {
  components: {
    banner,
    // column,
    cardlist,
    tabs,
  },
};
</script>

<style lang="less" scoped></style>

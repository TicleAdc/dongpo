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
    <departmentlist></departmentlist>
    <column>
      <div slot="title" class="img">
        <img src="@/assets/img/home/introducePressor.png" alt="" />
      </div>
      <div slot="contents">
        <personcard></personcard>
      </div>
    </column>
  </div>
</template>

<script>
import banner from '@/components/Banner';
import column from '@/components/Column';
import cardlist from '@/components/CardList';
import tabs from '@/components/Tabs';
import departmentlist from '@/components/DepartmentList';
import personcard from '@/components/PersonCard';
export default {
  data() {
    return {};
  },
  components: {
    personcard,
    banner,
    column,
    cardlist,
    tabs,
    departmentlist,
  },
};
</script>

<style lang="less" scoped>
.img {
  height: 30px;
}
</style>

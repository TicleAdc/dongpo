<template>
  <div class="cardlist">
    <div class="card" v-for="item in professorlist" :key="item.id">
      <div class="describe">
        <div class="introduction">{{ '专家简介' }}</div>
        <div class="detail"></div>
      </div>
      <div class="img"><img src="" alt="" /></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      professorlist: [
        {
          id: '1',
          url: require('@/assets/img/professor/photo2.png'),
        },
        {
          id: '2',
          url: require('@/assets/img/professor/photo2.png'),
        },
        {
          id: '3',
          url: require('@/assets/img/professor/photo2.png'),
        },
        {
          id: '4',
          url: require('@/assets/img/professor/photo2.png'),
        },
      ],
    };
  },
};
</script>

<style></style>

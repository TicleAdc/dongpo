<template>
  <section class="context">
    <h1 class="title">{{ title }}</h1>
    <p class="description">{{ description }}</p>
    <div class="text-context">
      <slot name="context"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'context',
  props: {
    title: String,
    description: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.context {
  padding: 30px;
  border-bottom: 1px solid #dfe1e6;
}
.title {
  font-size: 36px;
  color: #4a5da3;
  margin-bottom: 40px;
  font-weight: 400;
  padding-left: 20px;
  background: url('../assets/img/professor/professorback@2x.png') no-repeat;
  background-size: auto 100%;
  background-position: 150px top;
}
.description {
  display: inline;
  font-size: 32px;
  background-color: #4a5da3;
  padding: 5px 30px;
  border-radius: 30px;
  color: #fff;
  font-weight: 200;
}
.text-context {
  font-size: 20px;
  color: #787778;
  padding-left: 20px;
  font-weight: 200;
  line-height: 30px;
}
.text-context p {
  margin-top: 20px;
}
</style>

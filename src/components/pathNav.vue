<template>
  <section>
    <ul class="path-nav">
      <li v-for="nav in pathes" :key="nav.index" @click="go(nav)">
        <span>{{ nav.name }}</span>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'pathNav',
  props: {
    pathes: Array,
    handle: Function,
  },
  methods: {
    go(nav) {
      if (typeof this.handle === 'function') {
        this.handle(nav);
      } else {
        this.$router.push(nav.path);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.path-nav {
  margin: 0;
  padding: 16px;
  font-size: 16px;
  color: #717787;
  font-weight: 200;
  border-top: 1px solid #dfe1e6;
  border-bottom: 1px solid #dfe1e6;
  li {
    margin: 0;
    padding: 0 10px 0 0;
    display: inline-block;
    cursor: pointer;
  }
  li:hover span {
    color: #4a5da3;
  }
  li:last-child::after {
    content: none;
  }
  li::after {
    content: ">";
    padding-left: 10px;
    font-family: serif, fangsong;
    font-size: 18px;
  }
}
</style>
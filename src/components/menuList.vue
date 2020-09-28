<template>
  <section class="menu">
    <p class="title">{{title}}</p>
    <ul class="menu-list">
      <li v-for="menu in list" :key="menu.index" :class="menu.active">{{menu.name}}</li>
    </ul>
    <p class="foot">{{bottom}}</p>
  </section>
</template>

<script>
export default {
  name: 'menuList',
  props: {
    title: String,
    list: Array,
    bottom: String
  }
}
</script>

<style lang="less" scoped>
.menu {
  display: inline-block;
  width: 260px;
  padding: 12px 20px;
  box-shadow: 10px 10px 10px #aaa;
}
.title,
.foot {
  font-size: 22px;
  padding-left: 24px;
}
.title {
  color: #4a5da3;
  padding-bottom: 10px;
  border-bottom: 1px solid #a1a6b3;
  position: relative;
}
.title::after {
  content: ">";
  position: absolute;
  font-family: serif, fangsong;
  font-size: 28px;
  transform: rotate(90deg);
  right: 0;
}
.menu-list {
  font-size: 18px;
  color: #717787;
  padding: 12px 0 20px 16px;
  li {
    height: 56px;
    line-height: 56px;
    text-indent: 16px;
    cursor: pointer;
  }
  li.active {
    color: #4a5da3;
  }
  li.active::before {
    content: "";
    position: absolute;
    font-size: 0;
    width: 6px;
    height: 6px;
    margin: 28px 0 0 -15px;
    border-radius: 50%;
    background-color: #4a5da3;
  }
}
.foot {
  padding: 20px 0 20px 24px;
  color: #717787;
  border-top: 1px solid #a1a6b3;
  font-weight: 200;
}
</style>
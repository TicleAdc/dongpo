<!--
 * @Author: Spring Breeze
 * @Date: 2020-09-23 09:18:22
 * @FilePath: /dongpo/src/components/sidebarItem.vue
 * @LastEditTime: 2020-09-24 16:09:25
-->
<template>
  <div v-if="item.children">
    <template v-if="item.children.length == 0">
      <el-menu-item :index="item.path">
        <template slot="title">
          <router-link :to="item.path">
            {{ item.name }}
          </router-link>
        </template>
      </el-menu-item>
    </template>

    <el-submenu v-else :index="item.path">
      <template slot="title">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </template>
      <template v-for="(child, subIndex) in item.children">
        <sidebar-item
          v-if="child.children && child.children.length > 0"
          :item="child"
          :key="child.path"
          :itemFather="item"
        />
        <el-menu-item v-else :key="child.path" :index="child.path">
          <template slot="title">
            <router-link :to="child.path">
              <span @click="goChildrenPage(index, subIndex)">
                {{ child.name }}
              </span>
            </router-link>
          </template>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
  <div v-else>
    <el-menu-item :index="item.path" @click="goOtherPage">
      <template slot="title">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </template>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    itemFather: {
      type: Object,
      default() {
        return null;
      },
    },
    index: Number,
  },
  components: {
    sidebarItem: () => import('@/components/sidebarItem'),
  },
  computed: {
    trueIndex() {
      if (Object.is(this.itemFather, null)) {
        return this.item.path;
      }
      return this.itemFather.path + this.item.path;
    },
  },

  methods: {
    goChildrenPage(index, subIndex) {
      this.$store.commit('setIndex', {
        index: index,
        children: subIndex,
      });
    },

    goOtherPage() {
      console.log(this.trueIndex);
    },
  },
};
</script>

<style lang="less" scoped></style>

<template>
  <div>报告查询</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getInfo()
  },
  methods: {
    getData() {

    },

    async getInfo() {
      await this.http.post().then({
        
      })
    }
  },
};
</script>
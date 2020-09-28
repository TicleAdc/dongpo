<template>
  <div>院内导航</div>
</template>

<script>
export default {
  created() {
    this.getData();
    this.getInfo();
  },
  data() {
    return {
      data: '',
    };
  },
  methods: {
    getData() {
      this.data = this.$store.state.MenuData;
      console.log(this.data);
    },
    getInfo() {
      this.http.get(`/api/getColumnDataByPositionId?columnPositionId='MZLCFB'`).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
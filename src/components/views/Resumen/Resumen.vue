<template>
  <div>
    <h1>Resumen</h1>
  </div>
</template>

<script>
export default {
  props: {
    coordination: false,
  },
  data() {
    return {};
  },
  created() {
    console.log(this.coordination);
    this.coordination ? this.$router.puush({ path: "/cordination" }) : null;
  },

  methods: {},
};
</script>

<style scoped>
div {
  padding-left: 216px;
  padding-top: 64px;
  transition: all 0.3s;
}
</style>
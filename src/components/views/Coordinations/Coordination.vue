<template>
  <iframe
    :src="`${coordination}`"
    frameborder="0"
    width="100%"
    height="1120 %"
    display="flex"
    scrolling="no"
  ></iframe>
</template>

<script>
import loader from "../../shared/LoaderComponent.vue";
import { COORDINATION_URL } from "../../../utils/Constants";
export default {
  props: {
    cooordination: false,
  },
  components: {
    loader,
  },
  data() {
    return {
      coordination: COORDINATION_URL,
      token: null,
    };
  },
  created() {
    this.token = localStorage.getItem("vue-token-home");
    console.log(this.token);
    console.log(this.coordination);
  },
};
</script>
<style scoped>
.loader-div {
  /* margin-top: 300px; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

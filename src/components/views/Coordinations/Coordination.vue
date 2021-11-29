<template>
  <iframe
    :src="`${coordination}?token=${token}`"
    frameborder="0"
    width="100%"
    height="1300rem"
    scrolling="si"
  ></iframe>
</template>

<script>
import loader from "../../shared/LoaderComponent.vue";
import { COORDINATION_URL } from "../../../utils/Constants";
export default {
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
  },
};
</script>
<style scoped>
.loader-div {
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

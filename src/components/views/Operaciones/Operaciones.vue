<template>
  <div class="embed-container">
    <iframe
      :src="`${orders}#/?token`"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script>
import loader from "../../shared/LoaderComponent.vue";
import { ORDERS_URL } from "../../../utils/Constants";
export default {
  components: {
    loader,
  },
  data() {
    return {
      orders: ORDERS_URL,
      token: null,
    };
  },
  created() {
    // this.token = localStorage.getItem("vue-token");
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

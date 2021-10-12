<template>
  <div class="home">
   <h1>HOME</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.home{

  padding-left: 216px;
  padding-top: 64px;
  transition: all 0.3s;
}

</style>

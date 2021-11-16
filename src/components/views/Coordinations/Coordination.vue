<template>
<!-- <loader  ></loader> -->
  <iframe src="coordination" frameborder="0"   width="100%" height="1000" scrolling="no" ></iframe>
</template>





<script>

import loader from "../../shared/LoaderComponent.vue"
import {COORDINATION_URL} from '../../../utils/Constants'
export default {

components:{
  loader
},
data(){
  return{
coordination:COORDINATION_URL
  }
}

}
</script>


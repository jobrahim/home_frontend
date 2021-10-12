<template>
 
   
  <!-- <header-component >
  </header-component> -->
  <div id="app">
  <SliderBar
    :open-nav="openNav"
    :user="user"
    />
  <HeaderBar
         @sidebar="openSidebar($event)"
           :open-nav="openNav"
     
     
     />
 <div class="contenedor-layout-main">
                <transition name="fade-fast" mode="out-in">
                    <router-view></router-view>
                </transition>
			</div>
 	
        <!-- <div class="contenedor-layout"
            :class="{
                'with-header': user !== null,
                open: ($root.openNav && user !== null)
            }">
			
            <div class="contenedor-layout-main">
                <transition name="fade-fast" mode="out-in">
                    <router-view></router-view>
                </transition>
			</div>

            <alerts :alerts="$root.alerts"></alerts> 
		</div> -->
			
 </div>
		
  

 
</template>


<script>
import {defineAsyncComponent} from 'vue'



export default {
  components: {
   SliderBar:defineAsyncComponent(()=>import("./shared/component/MainSliderBar.vue")),
   HeaderBar:defineAsyncComponent(()=>import("./shared/component/MainHeaderBar.vue")),
   
  },

  data(){
return{
  openNav: true,
  user:{
    name:"User test",
    lastname:"Test"
  }
}
  
  
  },methods:{
openSidebar(){
 console.log("CLick entre")
 console.log("OpenNav",this.openNav)
    this.openNav =!this.openNav;
    console.log("OpenNav",this.openNav)
}
}
 
 
 
};
</script>
<style  lang="scss">

  @import "@/sass/utility/anims.scss";
  @import "@/sass/utility/fonts.scss";
  @import "@/sass/utility/normalize.scss";
  @import "@/sass/utility/bootstrap.scss";
  @import "@/sass/utility/utility.scss";

  @import "@/sass/typography/icons.scss";
  @import "@/sass/typography/typography.scss";

  // @import "~vue-datetime/dist/vue-datetime.css";

  @import "@/sass/components/button.scss";
  @import "@/sass/components/datetime.scss";
  @import "@/sass/components/form.scss";
  @import "@/sass/components/grid.scss";
  @import "@/sass/components/layout.scss";
  @import "@/sass/components/table.scss";
  @import "@/sass/components/paginator.scss";
	@import '@/sass/components/main-nav.scss'; 
  @import "@/sass/misc.scss";

</style>
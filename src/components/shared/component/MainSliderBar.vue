<template>
<!-- v-if="user" -->
	
		<div id="mainNav"  v-bind:class="{ 'open': openNav}">
			<div class="inner">
				
				<avatar
					square
					small
					:name="('Welcome')"
					:sub-text="Facu + ' ' + Duartes"
					:avatar="user.avatar"
				></avatar>

				<ul class="nav">
					<li v-for="(item, index) in items" :class="item.active" :key="index">
						<router-link :to="item.url">
							<span class="btn btn-clear btn-block btn-square">
								<i class="icon" :class="item.icon"></i>
								{{item.title}}
							</span>
						</router-link>
					</li>
				</ul>

				<router-link :to="'/help'" class="back-btn">
					<span @click="clicked()" class="btn btn-clear btn-block btn-square">
						<i class="icon icon-question"></i>
						Ayuda
					</span>
				</router-link>

				<router-link :to="'/organizations'" class="back-btn" v-if="$root.is_superadmin">
					<span @click="clicked()" class="btn btn-clear btn-block btn-square">
						<i class="icon icon-building"></i>
						Organizaciones
					</span>
				</router-link>
				<router-link :to="'/requests'" class="" v-if="$root.is_superadmin">
					<span @click="clicked()" class="btn btn-clear btn-block btn-square">
						<i class="icon icon-chatbox-working"></i>
						Solicitudes
					</span>
				</router-link>
			</div>
		</div>

		<!-- <transition name="fade">
			<div @click="closeNav()" class="aux-nav" v-if="(openNav )"></div>
		</transition> -->
	
</template>

<script>
import {defineAsyncComponent} from 'vue'
import axios from 'axios';

export default {
components:{
Avatar:defineAsyncComponent(()=>import("../../Avatar/AvatarComponent.vue")),


},

	props: {
		user:{default:null},
		
			openNav:null,

		},

  computed: {
    items: function () {
      let menu = [
        { title: "Resumen", icon: "icon-th-large", url: "/summary" },
        { title: "Operaciones", icon: "icon-truck", url: "/operations" },
        { title: "Coordinaciones", icon: "icon-calendar-o", url: "/cordination" },
        { title: "Tracking", icon: "icon-truck", url: "/tracking" },
        { title: "Pagos", icon: "", url: "/payment" },
        { title: "Consultas", icon: "icon-search", url: "/queries" },
        { title: "Estadisticas", icon: "icon-bar-chart", url: "/stats" },
        { title: "Configuracion", icon: "icon-cog", url: "/profile" },
        { title: "Cerrar Sesion", icon: "icon", url: "/logout" },
        { title: "Organizaciones", icon: "icon", url: "/organizations" },
        { title: "Solicitudes", icon: "icon-user", url: "/request" },
      ];
	  	return menu;
    },
  },
  methods: {
    // closeNav() {
    //   Event.$emit("open-nav");
    // },

    clicked() {
    //   if (this.$root.isMobile) {
    //     Event.$emit("open-nav");
    //   }
	axios.get("http://localhost:8081/")
    },
  },
  
};
</script>


<style  lang="scss">
 @import "../../../sass/components/main-nav.scss";
</style>

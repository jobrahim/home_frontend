<template>
  <header id="mainHeader" :class="{ open: openNav }">
    <div class="inner">
      <div class="menu" @click="$emit('sidebar')">
        <i class="icon icon-bars"></i>
      </div>
      <div class="grid grid-xl-12 no-margin">
        <div class="col-xl-7">
          <h1 class="itl-logo">
            <img alt="ITL Track" src="../../../assets/Logo-ITL.jpg" />
          </h1>
        </div>
        <div class="user-dropdown 
        col-xl-5 text-right"
         @mouseleave="showDropdown = false" @click="showDropdown = !showDropdown">         
          <div class="float-right clear">
            <i class="icon icon-bell-two"></i>
            <img
              src="../../../assets/default-avatar.jpg"
              :alt="name"
              width="32"
              height="32"
            />
            <!-- <button @click="Userlogout">LOGOUT</button> -->
          </div>
          <transition name="slide-down-fade">
			<div class="user-dropdown-list" v-if="showDropdown">
				<ul>
					<li>
						<a @click="Userlogout">
							Cerrar Sesión
						</a>
					</li>
				</ul>
			</div>
		</transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import * as Keycloak from "keycloak-js";
export default {
  props: {
    openNav: null,
    break: { default: false },
    user: { default: null },
  },

  data() {
    return {
      notifications: null,
      showDropdown: false,
    };
  },

  methods: {
    Userlogout() {
      this.$keycloak.logout();
    },
  },
};
</script>
<style lang="scss">
    @import '../../../sass/components/user-dropdown.scss'; 
</style>



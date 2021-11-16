<template>
	<header id="mainHeader" :class="{ 'open': openNav }">
		<div class="inner">
			<div class="menu" @click="$emit('sidebar')">
				<i class="icon icon-bars"></i>
			</div>
			<div class="grid grid-xl-12 no-margin">
				
				<div class="col-xl-7">
					<h1 class="itl-logo">
                        <img alt="ITL Track"
                            src="../../../assets/Logo-ITL.jpg"
                            
									>
					</h1>
				</div>
				<div class="col-xl-5 text-right">
					<div class="float-right clear">
							<i class="icon icon-bell-two"></i>
					<img src="../../../assets/default-avatar.jpg" :alt="name" width= "32" height= "32">
				

						<!-- <user-dropdown
							v-if="user"
							:user="user"
						></user-dropdown> -->
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	// import { NotificationServices } from '../services/NotificationServices';

	export default {
		props: {
			openNav: null,
			break: { default: false },
			user: { default: null },
			
		},

		data() {
			return {
		
				notifications: null,
			}
		},

		// created() {
		// 	this.getNotifications();
		// 	setInterval(() => {
		// 		this.getNotifications();
		// 	}, 5000);
		// },

		methods: {
			// getNotifications() {
			// 	if( this.user ) {
			// 		this.notificationServices.index(1).then(notifications => this.notifications = notifications.data);
			// 	}
			// },

			// readNotification(notification) {
			// 	this.notificationServices.read(notification);
			// },

			
		}
	}
</script>



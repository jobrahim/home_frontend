<template>
	<div class="avatar-box" :class="{ 'hide-default': hideDefault }">
		<div class="avatar" :class="{
			'avatar-square': square,
			'avatar-round': !square,
			'small': small,
			'big': big,
			'no-subtext': (subText == '' || subText == null)
		}">
			<template v-if="avatar">
				<img :src="avatar" :alt="name">
			</template>
			<template v-else-if="!hideDefault">
				<img src="../../assets/default-avatar.jpg" :alt="name">
			</template>
		</div>
		<span class="avatar-name" v-if="name !== null" :title="name">
			{{ name }}
		</span>
		<template v-if="subText !== null">
			<br>
			<span class="avatar-sub-text" :title="subText">
				{{ subText }}
			</span>
		</template>
	</div>
</template>

<script>
	export default {
		props: {
			name: { default: null },
			subText: { default: null },
			avatar: { default: null },
			square: { type: Boolean, default: false },
			small: { type: Boolean, default: false },
			big: { type: Boolean, default: false },
			hideDefault: { type: Boolean, default: false },
		}
	}
</script>

<style lang="scss">
	@import '../../sass/components/avatar.scss'; 
</style>
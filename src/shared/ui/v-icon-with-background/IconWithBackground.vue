<script setup lang="ts">


const props = defineProps<{
	src: string
	alt: string
}>()

</script>

<template>
	<div class="icon-with-background">
		<img :src="props.src" :alt="props.alt">
	</div>
</template>

<style lang="scss" scoped>
.icon-with-background {
	width: 120px;
	aspect-ratio: 1;
	flex-shrink: 0;
	padding: 32px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--green-accent);

	img {
		max-width: 56px;
		flex-shrink: 0;
		aspect-ratio: 1;
	}

	@include mobile {
		width: 48px;
		height: 48px;
		padding: 0;

		img {
			max-width: 24px;
		}
	}
}
</style>

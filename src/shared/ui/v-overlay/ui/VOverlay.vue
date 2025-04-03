<script setup lang="ts">
const emits = defineEmits(['onClick'])
const onClick = () => {
	emits('onClick')
}
</script>

<template>
	<div class="overlay" @click.stop="onClick"></div>
</template>

<style scoped lang="scss">
.overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.75);
	z-index: 5;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	width: 100%;
}
</style>

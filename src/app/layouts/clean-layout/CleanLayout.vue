<script setup lang="ts"></script>
<template>
	<main class="main" ref="app">
		<div class="page">
			<slot name="default" />
		</div>
	</main>
</template>

<style scoped lang="scss">
.main {
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
}

.page {
	flex: 1 1 auto;
	display: flex;
	gap: 128px;
	flex-direction: column;
	margin: 0 auto;
	max-width: 1920px;
	width: 100%;

	@include tablet {
		gap: 48px;
	}

	@include mobile {
		gap: 32px;
	}
}
</style>

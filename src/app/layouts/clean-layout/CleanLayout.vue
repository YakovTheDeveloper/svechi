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
	flex-direction: column;
	margin: 0 auto;
	max-width: 1920px;
	width: 100%;
}
</style>

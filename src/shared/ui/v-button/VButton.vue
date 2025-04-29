<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	size?: 'default' | 'large'
	variant?: 'primary' | 'secondary'
	outline?: boolean
	disabled?: boolean
}

const {
	size = 'default',
	variant = 'primary',
	outline,
	disabled,
} = defineProps<Props>()

const classes = computed(() => [
	'btn',
	`btn-${variant}`,
	`btn-${size}`,
])
</script>

<template>
	<button :class="classes" :disabled>
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
.btn {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	padding: 20px 32px;
	border: 1px solid transparent;
	font-weight: 700;
	font-size: 24px;
	border-radius: 32px;

	&:disabled {
		background: var(--gray);
		color: var(--white);
		pointer-events: none;
	}

	@include laptop {
		font-size: 20px;
		padding: 18px 30px;

	}

	@include mobile {
		padding: 10px 16px;
		font-size: 14px;
	}

}

.btn-primary {
	color: var(--white);
	background: var(--red-accent);

}

.btn-white {
	background: var(--white);
}
</style>

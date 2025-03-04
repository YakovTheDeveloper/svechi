<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	size?: 'default' | 'large'
	radius?: 'xxs' | 'xs' | 's' | 'l'
	variant?: 'primary' | 'secondary'
	outline?: boolean
	disabled?: boolean
}

const {
	size = 'default',
	variant = 'primary',
	radius,
	outline,
	disabled,
} = defineProps<Props>()

const classes = computed(() => [
	'btn',
	`btn-${variant}`,
	`btn-${size}`,
	{ 'btn-outline': outline, [`btn-${radius}`]: radius },
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

	@include mobile{
		padding: 10px 16px;
		font-size: 14px;
	}

}

.btn-primary {
	color: var(--white);
	background: var(--red-accent);

	&.btn-outline {
		color: var(--yellow);
		background: transparent;
		border: 4px solid var(--yellow);
	}
}

.btn-white {
	background: var(--white);
}

</style>

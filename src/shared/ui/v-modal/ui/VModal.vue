<script setup lang="ts">
import { onUnmounted, watchEffect } from 'vue'
import { useBodyLock } from '@/shared/utils/useBodyLock.ts'
import { VOverlay } from '@/shared/ui/v-overlay'
import crossIcon from '@/app/assets/icons/cross.svg'
import { useStore } from '@/shared/stores/store'

const isOpen = defineModel({ type: Boolean, required: true })
const { lock, unlock } = useBodyLock()



watchEffect(() => {
	if (isOpen.value) lock()
	else unlock()
})

onUnmounted(() => unlock())
</script>

<template>
	<transition name="modal-animation">
		<div v-if="isOpen" @click="isOpen = false" :class="['modal', $attrs.class]">
			<div class="modal-top padding">
				<button @click="isOpen = false" class="modal-close-btn-mobile">
					<img :src="crossIcon" alt="">
				</button>
			</div>
			<div @click.stop class="modal-content">
				<button @click="isOpen = false" class="modal-close-btn">
					<img :src="crossIcon" alt="">
				</button>
				<div class="modal-body">
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
	<transition name="modal-overlay">
		<VOverlay v-if="isOpen" />
	</transition>
</template>

<style lang="scss">
.modal.modals-welcome {

	@include tablet {
		align-items: stretch !important;
	}

	@media (max-width: 900px) {
		padding-top: 32px;
	}

	.modal-content {
		flex-grow: 0;

		@media (max-width: 900px) {
			flex-grow: 1;
		}
	}
}
</style>

<style scoped lang="scss">
.modal {
	position: fixed;
	inset: 0;
	z-index: 6;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	&-top {
		width: 100%;

		@include tablet {
			margin: 24px 0;
		}

		@include mobile {
			margin: 16px 0;
		}
		
	}

	&-content {
		position: relative;
		max-width: 1792px;
		border-radius: 64px;
		background-color: var(--bg);
		padding: 64px;
		margin: 0 var(--padding-container);

		@include tablet {
			height: fit-content;
			// width: 100%;
			overflow: auto;
			padding: 48px;
			margin: 0 var(--padding-container-tablet) var(--padding-container-tablet);
			// margin-top: 6vh;
			border-radius: 80px;
			flex-grow: 1;
		}

		@include mobile {
			height: fit-content;
			// width: 100%;
			padding: 16px;
			margin: 0 var(--padding-container-mobile) var(--padding-container-mobile);
			// margin-top: 6vh;
			border-radius: 32px;
		}
	}

	&-body {
		height: 100%;
		// max-height: 90vh;
		overflow: auto;
	}


	&-close-btn {
		position: absolute;
		background-color: transparent;
		top: 48px;
		right: 48px;

		html[dir="rtl"] & {
			right: unset;
			left: 48px;
		}

		@include tablet {
			display: none;
		}

		@include mobile {}

		html[dir="rtl"] & {
			right: unset;
			left: 48px;
		}
	}

	&-close-btn-mobile {
		display: none;
		// position: fixed;
		height: 80px;
		width: 80px;
		margin-left: auto;
		top: 2vh;
		border-radius: 50%;
		background-color: var(--bg);
		align-items: center;
		justify-content: center;

		html[dir="rtl"] & {
			margin-right: auto;
			margin-left: unset;
		}

		@include tablet {
			display: flex;
			right: var(--padding-container-tablet);
		}

		@include mobile {
			display: flex;
			right: var(--padding-container-mobile);
			height: 40px;
			width: 40px;

			img {
				width: 16px;
				height: 16px;
			}
		}
	}

}

.modal-overlay-enter-active,
.modal-overlay-leave-active {
	transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-overlay-enter-from,
.modal-overlay-leave-to {
	opacity: 0;
}

.modal-animation-enter-active {
	transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-leave-active {
	transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
	opacity: 0;
	transform: scale(0.8);
}
</style>

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
	<teleport to="body">
		<transition name="modal-animation">
			<div v-if="isOpen" @click="isOpen = false" class="modal">
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
	</teleport>
</template>

<style scoped lang="scss">
.modal {
	position: fixed;
	inset: 0;
	z-index: 6;
	display: flex;
	justify-content: center;
	align-items: center;

	&-content {
		position: relative;
		// width: 100%;
		// max-width: 800px;
		max-width: 1792px;
		border-radius: 64px;
		background-color: var(--bg);
		padding: 64px;
	}

	&-body {
		max-height: 90dvh;
		overflow: auto;
	}

	&-close-btn {
		position: absolute;
		background-color: transparent;
		top: 48px;
		right: 48px;
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

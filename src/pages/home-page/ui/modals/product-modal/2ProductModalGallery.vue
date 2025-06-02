<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { computed, onMounted, ref } from 'vue'
import type { Swiper as SwiperClass } from 'swiper'
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { storeToRefs } from 'pinia'
import { useStore } from '@/shared/stores/store'
import { candlesPhotos } from '@/pages/home-page/ui/modals/imgPath'
import { useWindowSize } from '@/shared/composables/useWindowSize'
import type { SwiperOptions } from 'swiper/types'

const thumbsSwiper = ref<SwiperClass | null>(null)
const activeIndex = ref(0)

const onMainSwiper = (swiper: SwiperClass) => {
	activeIndex.value = swiper.realIndex
}

const setThumbsSwiper = (swiper) => {
	thumbsSwiper.value = swiper
}

const modules = [FreeMode, Navigation, Thumbs]

const store = storeToRefs(useStore())

const data = computed(() => {
	if (!store.currentModalProduct.value) return []
	const photos = candlesPhotos[store.currentModalProduct.value?.id]
	return photos
})

const thumbs = ref(null)

const { width } = useWindowSize()

const thumbDirection = computed(() => {
	if (width.value <= 1040) return 'horizontal'
	return 'vertical'
})

const defaultBreakpoints: SwiperOptions['breakpoints'] = {
	0: {
		spaceBetween: 8,
	},
	360: {
		spaceBetween: 8,
	},
	500: {
		spaceBetween: 24,
	},
	640: {
		spaceBetween: 32,
	},
}
onMounted(() => {
	thumbs.value = thumbsSwiper.value

	// Force Safari layout reflow by toggling a class
	if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
		const el = document.querySelector('.swiper-thumbs') as HTMLElement
		if (el) {
			el.classList.add('safari-reflow')
			setTimeout(() => el.classList.remove('safari-reflow'), 50)
		}
	}
})
</script>

<template>
	<div class="gallery-part">
		<swiper
			@swiper="setThumbsSwiper"
			@slideChange="onMainSwiper"
			:slides-per-view="5"
			:freeMode="true"
			:direction="thumbDirection"
			:watchSlidesProgress="true"
			:modules="modules"
			:breakpoints="defaultBreakpoints"
			class="swiper-thumbs"
		>
			<swiper-slide
				v-for="({ id, imgUrl }, index) in data.slice(0, 4)"
				:key="id"
				:class="[
					'swiper-thumbs-item',
					index === activeIndex && 'swiper-thumbs-item_active',
				]"
			>
				<img :src="imgUrl" />
			</swiper-slide>
		</swiper>
		<swiper
			@slideChange="onMainSwiper"
			:loop="true"
			:spaceBetween="10"
			:thumbs="{ swiper: thumbsSwiper }"
			:slidesPerView="1"
			:modules="modules"
			class="swiper-main"
		>
			<swiper-slide
				v-for="{ id, imgUrl } in data"
				:key="id"
				class="swiper-main-item"
			>
				<img :src="imgUrl" />
			</swiper-slide>
		</swiper>
	</div>
</template>

<style lang="scss" scoped>
.safari-reflow {
	transform: scale(1); // noop but triggers reflow
}
.gallery-part {
	display: flex;
	justify-content: start;
	gap: 32px;

	width: 100%;
	flex-grow: 1;
	// flex-shrink: 1;
	// flex-basis: 0;

	@media (max-width: 1400px) {
		flex-direction: column-reverse;
		gap: 24px;
	}

	@include mobile {
		gap: 8px;
	}

	// Main Swiper
	& .swiper-main {
		width: 100%;
		min-width: 0;
		max-width: 744px;
		aspect-ratio: 4 / 4; // Responsive aspect ratio
		flex: 1 1 auto;

		max-height: 100%;
		border-radius: 32px;
		overflow: hidden;

		@media (max-width: 1740px) {
			max-width: min(744px, 40vw);
			// aspect-ratio: auto;
			// height: auto;
		}

		@include tablet {
			max-width: 100%;
		}

		@include mobile {
			border-radius: 16px;
		}

		&-item {
			position: relative;
			width: 100%;
			height: fit-content;
			padding-top: 100%; // Keeps it square in Safari too
			border-radius: 16px;
			overflow: hidden;

			&_active {
				outline: 3px solid var(--black-secondary);
				outline-offset: -3px;
			}

			img {
				position: absolute;
				inset: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				user-select: none;
			}

			@include mobile {
				width: 48px;
			}
		}
	}

	// Thumbs Swiper
	& .swiper-thumbs {
		max-width: 128px;
		height: auto;
		display: flex;
		flex-direction: column;
		gap: 16px;

		@media (max-width: 1740px) {
			// flex-direction: row;
			// width: 100%;
			// height: auto;
		}

		&-item {
			position: relative;
			width: 100%;
			padding-top: 100%; //
			aspect-ratio: 1 / 1; // Keep this now
			border-radius: 16px;
			overflow: hidden;

			&_active {
				outline: 3px solid var(--black-secondary);
				outline-offset: -3px;
			}

			img {
				position: absolute;
				inset: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				user-select: none;
			}
			@include mobile {
				width: 48px;
			}
		}
	}
}
</style>

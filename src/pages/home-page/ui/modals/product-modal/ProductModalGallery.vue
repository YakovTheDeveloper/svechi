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
	if (width.value <= 1400) return 'horizontal'
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
		spaceBetween: 16,
	},
	640: {
		spaceBetween: 16,
	},
	768: {
		spaceBetween: 16,
	},
}
onMounted(() => {
	console.log(`output->mounted`)
	thumbs.value = thumbsSwiper.value

	if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
		const el = document.querySelector('.swiper-thumbs') as HTMLElement

		if (el) {
			// Force layout reflow
			void el.offsetHeight // <— THIS triggers reflow without visual change

			// Optional: flip a class to refresh computed layout
			el.classList.add('safari-reflow')
			requestAnimationFrame(() => {
				el.classList.remove('safari-reflow')
			})
		}

		setTimeout(() => {
			const el = document.querySelector('.swiper-thumbs') as HTMLElement
			if (el) {
				void el.offsetHeight
				el.classList.add('safari-reflow')
				requestAnimationFrame(() => {
					el.classList.remove('safari-reflow')
				})
			}
		}, 50)
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

	@media (max-width: 600px) {
		gap: 16px;
		flex-grow: 0;
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
		margin: 0;

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
			flex-grow: 0;
		}

		@include mobile {
			border-radius: 16px;
		}

		.swiper-wrapper {
		}

		&-item {
			position: relative;
			width: 100%;
			height: fit-content;
			padding-top: 100%; // Keeps it square in Safari too
			border-radius: 16px;
			overflow: hidden;

			&_active {
				// outline: 10px solid var(--black-secondary);
				// outline-offset: -10px;

				// border: 10px solid var(--black-secondary);
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
				padding-top: 100%;
				// width: 48px;
			}
		}
	}

	// Thumbs Swiper
	& .swiper-thumbs {
		width: 96px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		flex-shrink: 0;

		@media (max-width: 1400px) {
			// 💡 This makes the thumbs row instead of column
			flex-direction: row;
			max-width: 100%;
			width: 100%;
			height: 100px;
		}

		@media (max-width: 768px) {
			height: 72px;
		}

		@include mobile {
			height: 48px;
		}

		&-item {
			position: relative;
			padding-top: 0;
			border-radius: 16px;
			width: 96px !important; // force fixed square size
			height: 96px !important;
			overflow: hidden;

			border: 3px solid transparent;
			@media (max-width: 768px) {
				border: 2px solid transparent;
			}
			@include mobile {
				border: 1px solid transparent;
			}

			@media (max-width: 1400px) {
				width: 100%;
				padding-top: 0;
				width: 96px !important; // force fixed square size
				height: 96px !important;

				height: auto;
				flex-shrink: 0;
			}

			@media (max-width: 1400px) {
				width: 100%;
				padding-top: 0;
				width: 96px !important; // force fixed square size
				height: 96px !important;

				height: auto;
				flex-shrink: 0;
			}

			@media (max-width: 768px) {
				width: 72px !important; // force fixed square size
				height: 72px !important;
			}

			@include mobile {
				width: 48px !important;
				height: 48px !important;
			}

			&_active {
				border: 3px solid var(--black-secondary);
				@media (max-width: 768px) {
					border: 2px solid var(--black-secondary);
				}
				@include mobile {
					border: 1px solid var(--black-secondary);
				}
			}

			img {
				position: absolute;
				inset: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				user-select: none;
			}
		}
	}
}
</style>

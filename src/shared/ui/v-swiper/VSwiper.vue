<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar, Navigation } from 'swiper/modules'
import VButtonIcon from '../v-button/VButtonIcon.vue'
import { onMounted, ref, watch } from 'vue'
import type { SwiperOptions } from 'swiper/types'
import { useI18n } from 'vue-i18n'
import IconLeftArrow from '@/shared/icons/IconLeftArrow.vue'
import IconArrowRight from '@/shared/icons/IconArrowRight.vue'

const props = defineProps<{
	slides: { imgUrl: string; id: number; title?: string }[]
	scrollBarClass?: string
	breakpoints?: {
		[width: number]: SwiperOptions
		[ratio: string]: SwiperOptions
	}
	noFade?: boolean
}>()
const swiperRef = ref<{ swiper: any } | null>(null)
const { locale } = useI18n()
const scrollbarRef = ref(null)
const prevButtonRef = ref<InstanceType<typeof VButtonIcon> | null>(null)
const nextButtonRef = ref<InstanceType<typeof VButtonIcon> | null>(null)

const scrollbarOptions = ref({
	el: null,
	draggable: true,
})

const navigation = ref<{
	nextEl: HTMLButtonElement | null
	prevEl: HTMLButtonElement | null
}>({
	nextEl: null,
	prevEl: null,
})

function updateNavigation() {
	navigation.value = {
		nextEl: nextButtonRef.value?.getEl() || null,
		prevEl: prevButtonRef.value?.getEl() || null,
	}
}

const defaultBreakpoints: SwiperOptions['breakpoints'] = {
	320: {
		slidesPerView: 2,
		spaceBetween: 20,
	},
	480: {
		slidesPerView: 3,
		spaceBetween: 30,
	},
	640: {
		slidesPerView: 4,
		spaceBetween: 40,
	},
}

const breakpoints = ref<SwiperOptions['breakpoints']>(
	props.breakpoints ?? defaultBreakpoints,
)

watch(
	() => props.breakpoints,
	(newBreakpoints) => {
		breakpoints.value = newBreakpoints ?? defaultBreakpoints
	},
)

watch(navigation, (result) => {
	console.log(`output->NAVIGATION`, result)
})

onMounted(() => {
	updateNavigation()
	scrollbarOptions.value = {
		...scrollbarOptions.value,
		el: scrollbarRef.value,
	}
	console.log(`output->scrollbarRef.value`, scrollbarRef.value)
})
</script>

<template>
	<div class="swiper-wrapper" :class="{ 'no-fade': props.noFade }">
		<Swiper
			:key="locale"
			ref="swiperRef"
			:modules="[Scrollbar, Navigation]"
			:scrollbar="scrollbarOptions"
			:breakpoints="breakpoints"
			:rtl="true"
			:navigation="navigation"
		>
			<SwiperSlide v-for="slide in slides" :key="slide.id">
				<slot name="slide" :slide="slide">
					<!-- Fallback content if slot isn't provided -->
					<div class="gallery-item">
						<img :src="slide.imgUrl" alt="gallery-image" draggable="false" />
					</div>
				</slot>
			</SwiperSlide>
		</Swiper>
		<VButtonIcon ref="prevButtonRef" :class="['custom-prev']">
			<IconLeftArrow />
		</VButtonIcon>
		<VButtonIcon ref="nextButtonRef" :class="['custom-next']">
			<IconArrowRight />
		</VButtonIcon>
	</div>
	<div
		ref="scrollbarRef"
		:class="['custom-scrollbar', props.scrollBarClass]"
	></div>
</template>

<style lang="scss" scoped>
.gallery-swiper {
	position: relative;
	width: 100%;
}

.swiper-wrapper {
	position: relative;

	&:not(.no-fade) {
		&:has(button.custom-next:not(.swiper-button-disabled))::before {
			@include fade-overlay-right($width: 20%);
		}

		&:has(button.custom-prev:not(.swiper-button-disabled))::after {
			@include fade-overlay-left($width: 20%);
		}
	}

	&:has(button.custom-next.swiper-button-disabled)::before,
	&:has(button.custom-prev.swiper-button-disabled)::after {
		content: none;
	}
}

/* Optional default styling for images if no slot provided */
.gallery-item {
	border-radius: 64px;
	overflow: hidden;

	img {
		user-select: none;
		max-width: 100%;
		display: block;
	}
}

/* Scrollbar */
.custom-scrollbar {
	margin-top: 32px;
	height: 12px;
	background: #e0e0e0;
	border-radius: 3px;
}

.custom-scrollbar .swiper-scrollbar-drag {
	background: #007aff;
	border-radius: 3px;
}

/* Navigation buttons */
.custom-prev,
.custom-next {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: white;
	border: none;
	border-radius: 50%;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;

	@include tablet {
		display: none;
	}

	@include mobile {
		display: none;
	}
}

html[dir='rtl'] .custom-prev {
	right: -28px;
	left: unset;
}

.custom-prev {
	left: -28px;
}

html[dir='rtl'] .custom-next {
	left: -28px;
	right: unset;
}

.custom-next {
	right: -28px;
}

.custom-prev:hover,
.custom-next:hover {
	background: #f0f0f0;
}
</style>

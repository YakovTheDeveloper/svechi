<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar, Navigation } from 'swiper/modules'
import VButtonIcon from '../v-button/VButtonIcon.vue'
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import type { SwiperOptions } from 'swiper/types'

// Props
const props = defineProps<{
    slides: { imgUrl: string; id: number }[],
    slidesPerView?: number,
    spaceBetween?: number
    breakpoints?: {
        [width: number]: SwiperOptions;
        [ratio: string]: SwiperOptions;
    }
}>()

// Defaults if not provided
const slidesPerView = computed(() => props.slidesPerView ?? 3)
const spaceBetween = computed(() => props.spaceBetween ?? 32)

const scrollbarRef = ref(null)

const prevButtonRef = ref(null)
const nextButtonRef = ref<InstanceType<typeof VButtonIcon> | null>(null)

const navigation = ref({
    nextEl: null,
    prevEl: null
})

const scrollbarOptions = ref({
    el: null,
    draggable: true
})

onMounted(() => {
    navigation.value = {
        nextEl: nextButtonRef.value?.getEl(),
        prevEl: prevButtonRef.value?.getEl()
    }
    scrollbarOptions.value = {
        ...scrollbarOptions.value,
        el: scrollbarRef.value
    }
    console.log(navigation.value)
})



</script>

<template>
    <div class="swiper-wrapper">
        <Swiper :modules="[Scrollbar, Navigation]" :slides-per-view="slidesPerView" :space-between="spaceBetween"
            :scrollbar="scrollbarOptions" :navigation="navigation" :breakpoints="{
                960: {
                    slidesPerView: 2,
                    spaceBetween: 16
                }
            }
                ">
            <SwiperSlide v-for="slide in slides" :key="slide.id">
                <slot name="slide" :slide="slide">
                    <!-- Fallback content if slot isn't provided -->
                    <div class="gallery-item">
                        <img :src="slide.imgUrl" alt="gallery-image" draggable="false">
                    </div>
                </slot>
            </SwiperSlide>
        </Swiper>
        <VButtonIcon ref="prevButtonRef" class="custom-prev" :reverse="true" />
        <VButtonIcon ref="nextButtonRef" class="custom-next" />
    </div>

    <div ref="scrollbarRef" class="custom-scrollbar"></div>
</template>

<style lang="scss" scoped>
.gallery-swiper {
    position: relative;
    width: 100%;
}

.swiper-wrapper {
    position: relative;

    &:before {
        content: ''; // Required for pseudo-elements
        position: absolute; // Place over the swiper
        top: 0;
        right: 0;
        z-index: 2;
        height: 100%;
        width: 390px; // Width of the fade effect (adjust as needed)
        pointer-events: none; // Don’t block interaction with slides
        background: linear-gradient(270deg, #FEFBF2 3.72%, rgba(254, 251, 242, 0) 100%);
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
    width: 48px;
    height: 48px;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
}

.custom-prev {
    left: -28px;
}

.custom-next {
    right: -28px;
}

.custom-prev:hover,
.custom-next:hover {
    background: #f0f0f0;
}
</style>

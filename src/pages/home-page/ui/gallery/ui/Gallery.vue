<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar, Navigation } from 'swiper/modules'
import VSwiper from '@/shared/ui/v-swiper/VSwiper.vue'
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue'

const slides = [
    { imgUrl: '/img/gallery/1.png', id: 1 },
    { imgUrl: '/img/gallery/2.png', id: 2 },
    { imgUrl: '/img/gallery/3.png', id: 3 },
    { imgUrl: '/img/gallery/3.png', id: 4 },
    { imgUrl: '/img/gallery/2.png', id: 5 },
    { imgUrl: '/img/gallery/1.png', id: 6 }
]

const sliderBreakpoints = {
    480: {
        slidesPerView: 1.5,
        spaceBetween: 16
    },
    960: {
        slidesPerView: 4,
        spaceBetween: 32
    }
}

</script>

<template>
    <section class="gallery padding">
        <h1 class="subtitle">Галерея <VSpan variant="fill">тепла и уюта</VSpan>
        </h1>

        <VSwiper :slides="slides" :slides-per-view="3" :spaceBetween="32" :breakpoints="sliderBreakpoints"
            scroll-bar-class="gallery-scrollbar">
            <template #slide="{ slide }">
                <div class="gallery-item">
                    <img :src="slide.imgUrl" alt="gallery-image" draggable="false">
                </div>
            </template>
        </VSwiper>
    </section>
</template>

<style lang="scss" scoped>
.subtitle {
    margin-bottom: 64px;

    @include mobile{
        margin-bottom: 16px;
    }
}

.gallery-item {
    height: 432px;
    border-radius: 64px;
    overflow: hidden;

    img {
        user-select: none;
        // max-width: 100%;
        height: 100%;
        // object-fit: cover;
    }
}

:deep(.gallery-scrollbar) {
    @include tablet {
        display: none;
    }
}
</style>

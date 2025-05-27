<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar, Navigation } from 'swiper/modules'
import VSwiper from '@/shared/ui/v-swiper/VSwiper.vue'
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue'
import { useI18n } from 'vue-i18n'
import { getPublicUrl } from '@/shared/utils/getPublicUrl'
const { locale } = useI18n()

const slides = [
    { imgUrl: getPublicUrl('img/gallery/1.png'), id: 1 },
    { imgUrl: getPublicUrl('img/gallery/2.png'), id: 2 },
    { imgUrl: getPublicUrl('img/gallery/3.png'), id: 3 },
    { imgUrl: getPublicUrl('img/gallery/4.jpg'), id: 4 },
    { imgUrl: getPublicUrl('img/gallery/5.jpg'), id: 5 },
    { imgUrl: getPublicUrl('img/gallery/6.jpg'), id: 6 }
]

const sliderBreakpoints = {
    0: {
        slidesPerView: 1.25,
        spaceBetween: 16
    },
    500: {
        slidesPerView: 1.5,
        spaceBetween: 16
    },
    1060: {
        slidesPerView: 3,
        spaceBetween: 32
    }
}

</script>

<template>
    <section class="gallery padding" id="gallery">
        <h1 class="subtitle">
            <template v-if="locale === 'ru'">
                Галерея <VSpan variant="fill">тепла и уюта</VSpan>
            </template>
            <template v-else-if="locale === 'he'">
                גלריה של <VSpan variant="fill">חום וביתיות</VSpan>
            </template>
            <template v-else>
                Gallery of <VSpan variant="fill">Warmth and Comfort</VSpan>
            </template>
        </h1>

        <VSwiper :slides="slides" :breakpoints="sliderBreakpoints" scroll-bar-class="gallery-scrollbar">
            <template #slide="{ slide }">
                <div class="gallery-item">
                    <img loading="lazy" :src="slide.imgUrl" alt="gallery-image" draggable="false">
                </div>
            </template>
        </VSwiper>
    </section>
</template>

<style lang="scss" scoped>
.subtitle {
    margin-bottom: 64px;

    @include tablet {
        margin-bottom: 32px;
    }

    @include mobile {
        margin-bottom: 16px;
    }
}

.gallery-item {
    height: 432px;
    border-radius: 64px;
    overflow: hidden;

    @include mobile {
        height: 209px;
        border-radius: 24px;
    }

    img {
        user-select: none;
        // max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

:deep(.gallery-scrollbar) {
    @include tablet {
        display: none;
    }
}
</style>

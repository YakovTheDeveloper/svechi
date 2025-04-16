<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { computed, onMounted, ref } from 'vue';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { storeToRefs } from 'pinia';
import { useStore } from '@/shared/stores/store';
import { candlesPhotos } from '@/pages/home-page/ui/modals/imgPath';
import { useWindowSize } from '@/shared/composables/useWindowSize';
import type { SwiperOptions } from 'swiper/types';

const thumbsSwiper = ref<SwiperClass | null>(null);
const activeIndex = ref(0);

const onMainSwiper = (swiper: SwiperClass) => {
    activeIndex.value = swiper.realIndex;
};

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs]

const store = storeToRefs(useStore())

const data = computed(() => {
    if (!store.currentModalProduct.value) return []
    const photos = candlesPhotos[store.currentModalProduct.value?.id]
    return photos
})

const thumbs = ref(null)

onMounted(() => {
    thumbs.value = thumbsSwiper.value
})

const { width } = useWindowSize()

const thumbDirection = computed(() => {
    if (width.value <= 1740) return 'horizontal'
    return 'vertical'
})

const defaultBreakpoints: SwiperOptions['breakpoints'] = {
    0: {
        spaceBetween: 8
    },
    360: {
        spaceBetween: 8
    },
    500: {
        spaceBetween: 24
    },
    640: {
        spaceBetween: 32
    }
}

</script>


<template>
    <div class="gallery-part">
        <swiper @swiper="setThumbsSwiper" @slideChange="onMainSwiper" :slides-per-view="5" :freeMode="true"
            :direction="thumbDirection" :watchSlidesProgress="true" :modules="modules" :breakpoints="defaultBreakpoints"
            class="swiper-thumbs">
            <swiper-slide v-for="({ id, imgUrl }, index) in data" :key="id"
                :class="['swiper-thumbs-item', index === activeIndex && 'swiper-thumbs-item_active']">
                <img :src="imgUrl">
            </swiper-slide>
        </swiper>
        <swiper @slideChange="onMainSwiper" :loop="true" :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }"
            :slidesPerView="1" :modules="modules" class="swiper-main">
            <swiper-slide v-for="({ id, imgUrl }) in data" :key="id" class="swiper-main-item">
                <img :src="imgUrl">
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.gallery-part {
    display: flex;
    justify-content: start;
    gap: 32px;

    @media (max-width: 1740px) {
        flex-direction: column-reverse;
    }

    @include tablet {
        gap: 24px;
    }

    @include mobile {
        gap: 8px;
    }

    & .swiper-main {
        max-width: 744px;
        overflow: hidden;
        width: 100%;

        @media (max-width: 1740px) {
            width: 100%;
            max-width: 600px;
        }

        @include tablet {
            max-width: 100%;
        }

        &-item {
            aspect-ratio: 1;
            border-radius: 32px;
            overflow: hidden;

            @include mobile {
                border-radius: 16px;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    & .swiper-thumbs {
        width: 128px;
        height: 768px;

        @media (max-width: 1740px) {
            width: 100%;
            height: auto;
        }

        &-item {
            max-width: 128px;
            aspect-ratio: 1;
            border-radius: 16px;
            overflow: hidden;

            &_active {
                outline: 3px solid var(--black-secondary);
                outline-offset: -3px;
            }

            img {
                width: 100%;
                height: 100%;
                user-select: none;
            }

            @include mobile {
                width: 48px;
            }
        }

    }
}
</style>
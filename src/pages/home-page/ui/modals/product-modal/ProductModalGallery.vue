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

const thumbsSwiper = ref<SwiperClass | null>(null);

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


</script>


<template>
    <div class="gallery-part">
        <swiper @swiper="setThumbsSwiper" :slides-per-view="5" :spaceBetween="32" :freeMode="true"
            :direction="'vertical'" :watchSlidesProgress="true" :modules="modules" class="swiper-thumbs">
            <swiper-slide v-for="({ id, imgUrl }) in data" :key="id" class="swiper-thumbs-item">
                <img :src="imgUrl">
            </swiper-slide>
        </swiper>
        <swiper :loop="true" :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :slidesPerView="1" :modules="modules"
            class="swiper-main">
            <swiper-slide v-for="({ id, imgUrl }) in data" :key="id" class="swiper-main-item">
                <img :src="imgUrl">
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.gallery-part {
    width: 50%;
    display: flex;
    justify-content: start;
    gap: 32px;

    @media (max-width: 1740px) {
        flex-direction: column-reverse;
    }

    @include tablet {
        flex-direction: column;
    }

    @include mobile {
        gap: 8px;
    }

    & .swiper-main {
        width: 80%;
        overflow: hidden;

        &-item {
            max-width: 744px;
            aspect-ratio: 1;
            border-radius: 32px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    & .swiper-thumbs {
        width: 128px;
        height: 768px;

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
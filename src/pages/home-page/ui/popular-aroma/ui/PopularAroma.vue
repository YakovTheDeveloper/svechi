<script setup lang="ts">
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import VSwiper from '@/shared/ui/v-swiper/VSwiper.vue';
import IconWithBackground from '@/shared/ui/v-icon-with-background/IconWithBackground.vue';
import icon1 from '@/app/assets/icons/aroma/1.svg'
import icon2 from '@/app/assets/icons/aroma/2.svg'
import icon3 from '@/app/assets/icons/aroma/3.svg'
import icon4 from '@/app/assets/icons/aroma/4.svg'
import icon5 from '@/app/assets/icons/aroma/5.svg'
import icon6 from '@/app/assets/icons/aroma/6.svg'

import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import PopularAromaListMobile from './PopularAromaListMobile.vue';

const { t, locale } = useI18n()
const slides = computed(() => ([
    { imgUrl: icon1, id: 1, title: t('popular_aroma_item_1') },
    { imgUrl: icon2, id: 2, title: t('popular_aroma_item_2') },
    { imgUrl: icon3, id: 3, title: t('popular_aroma_item_3') },
    { imgUrl: icon4, id: 4, title: t('popular_aroma_item_4') },
    { imgUrl: icon5, id: 5, title: t('popular_aroma_item_5') },
    { imgUrl: icon6, id: 6, title: t('popular_aroma_item_6') },
    { imgUrl: icon6, id: 7, title: t('popular_aroma_item_7') },
    { imgUrl: icon6, id: 8, title: t('popular_aroma_item_8') },
    { imgUrl: icon6, id: 9, title: t('popular_aroma_item_9') },
    { imgUrl: icon6, id: 10, title: t('popular_aroma_item_10') },
    { imgUrl: icon6, id: 11, title: t('popular_aroma_item_11') },
    { imgUrl: icon6, id: 12, title: t('popular_aroma_item_12') },
    { imgUrl: icon6, id: 13, title: t('popular_aroma_item_13') },
    { imgUrl: icon6, id: 14, title: t('popular_aroma_item_14') },
    { imgUrl: icon6, id: 15, title: t('popular_aroma_item_15') },
    { imgUrl: icon6, id: 16, title: t('popular_aroma_item_16') },
    { imgUrl: icon6, id: 17, title: t('popular_aroma_item_17') },
    { imgUrl: icon6, id: 18, title: t('popular_aroma_item_18') },
    { imgUrl: icon6, id: 19, title: t('popular_aroma_item_19') },
    { imgUrl: icon6, id: 20, title: t('popular_aroma_item_20') },
    { imgUrl: icon6, id: 21, title: t('popular_aroma_item_21') },
    { imgUrl: icon6, id: 22, title: t('popular_aroma_item_22') },
    { imgUrl: icon6, id: 23, title: t('popular_aroma_item_23') },
    { imgUrl: icon6, id: 24, title: t('popular_aroma_item_24') },
    { imgUrl: icon6, id: 25, title: t('popular_aroma_item_25') },
    { imgUrl: icon6, id: 26, title: t('popular_aroma_item_26') },
    { imgUrl: icon6, id: 27, title: t('popular_aroma_item_27') },
    { imgUrl: icon6, id: 28, title: t('popular_aroma_item_28') },
    { imgUrl: icon6, id: 29, title: t('popular_aroma_item_29') },
    { imgUrl: icon6, id: 30, title: t('popular_aroma_item_30') },
    { imgUrl: icon6, id: 31, title: t('popular_aroma_item_31') },
    { imgUrl: icon6, id: 32, title: t('popular_aroma_item_32') },
    { imgUrl: icon6, id: 33, title: t('popular_aroma_item_33') },
    { imgUrl: icon6, id: 34, title: t('popular_aroma_item_34') }
]))


const sliderBreakpoints = {
    480: {
        slidesPerView: 3,
        spaceBetween: 16
    },
    960: {
        slidesPerView: 5,
        spaceBetween: 32
    },
    1500: {
        slidesPerView: 6,
        spaceBetween: 32
    }
}


</script>

<template>
    <div class="container padding">
        <section class="popular-aroma">
            <h2 class="subtitle">
                <template v-if="locale === 'ru'">
                    Самые <VSpan variant="fill">популярные</VSpan> ароматы
                </template>
                <template v-else>
                    Most <VSpan variant="fill">Popular</VSpan> Fragrances
                </template>
            </h2>
            <div class="popular-aroma__content">
                <VSwiper :slides="slides" :breakpoints="sliderBreakpoints">
                    <template #slide="{ slide }">
                        <div class="popular-aroma__item">
                            <IconWithBackground :src="slide.imgUrl" alt="aroma-icon" />
                            <p class="bold">{{ slide.title }}</p>
                        </div>
                    </template>
                </VSwiper>
            </div>
            <PopularAromaListMobile />
        </section>
    </div>
</template>

<style lang="scss" scoped>
.subtitle {
    margin-bottom: 64px;
    z-index: 1;
    position: relative;

    @include tablet {
        margin-bottom: 32px;
    }

    @include mobile {
        margin-bottom: 32px;
    }
}

.popular-aroma {
    position: relative;

    &:after {
        width: 100%;
        height: 230px;
        content: "";
        position: absolute;
        z-index: 0;
        top: 0;
        transform: translateY(-75%);
        background: url('@/app/assets/decorations/popular-aroma/1.svg') no-repeat;
        background-position: 31% 0;
        background-size: auto;

        @include tablet {
            display: none;
        }
    }

    &__item {
        height: 280px;
        padding: 32px;
        gap: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: var(--bg-2);
        border-radius: 64px;

        img {
            width: 100%;
        }
    }

    &__content {
        // display: flex;

        @include mobile {
            display: none;
        }
    }
}
</style>

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

const partOne = computed(() => slides.value.slice(0, Math.ceil(slides.value.length / 2)))
const partTwo = computed(() => slides.value.slice(Math.ceil(slides.value.length / 2)))

</script>

<template>
    <div class="popular-aroma-mobile">
        <div class="popular-aroma-mobile-inner">
            <ul class="popular-aroma-mobile__list">
                <li class="popular-aroma-mobile-item" v-for="item in partOne" :key="item.id">
                    <IconWithBackground :src="item.imgUrl" />
                    <p class="popular-aroma-mobile-item__text">
                        {{ item.title }}
                    </p>
                </li>
            </ul>
            <ul class="popular-aroma-mobile__list">
                <li class="popular-aroma-mobile-item" v-for="item in partTwo" :key="item.id">
                    <IconWithBackground :src="item.imgUrl" />
                    <p class="popular-aroma-mobile-item__text">
                        {{ item.title }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.popular-aroma-mobile {
    display: none;
    width: 100%;
    position: relative;

    &::after {
        @include fade-overlay-right(16%); // Apply with default or custom width
    }

    @include mobile {
        display: block;
    }

    &__list {
        display: flex;
        gap: 8px;
    }
}

.popular-aroma-mobile-inner {
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: auto;
}

.popular-aroma-mobile-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 8px 8px 10px;
    width: 105px;
    height: 105px;
    flex-shrink: 0;
    background-color: var(--bg-2);
    border-radius: 24px;

    &__text {
        font-size: 10px;
        font-weight: 700;
        text-align: center;
    }


}
</style>

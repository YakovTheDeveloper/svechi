<script setup lang="ts">
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import VSwiper from '@/shared/ui/v-swiper/VSwiper.vue';
import IconWithBackground from '@/shared/ui/v-icon-with-background/IconWithBackground.vue';
import { useI18n } from 'vue-i18n';
import PopularAromaListMobile from './PopularAromaListMobile.vue';
import { useGetSlides } from './useGetSlides';

const { locale } = useI18n()
const { slides } = useGetSlides()
const sliderBreakpoints = {
    480: {
        slidesPerView: 3,
        spaceBetween: 16
    },
    960: {
        slidesPerView: 4,
        spaceBetween: 32
    },
    1800: {
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
                <template v-else-if="locale === 'he'">
                    הניחוחים <VSpan variant="fill">הנמכרים</VSpan> ביותר:
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
                            <p class="bold popular-aroma__item-text">{{ slide.title }}</p>
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
        margin-bottom: 16px;
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

        @include popular-aroma-breakpoint {
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
        line-height: normal;

        img {
            width: 100%;
        }
    }

    &__content {
        // display: flex;

        @include popular-aroma-breakpoint {
            display: none;
        }
    }
}
</style>

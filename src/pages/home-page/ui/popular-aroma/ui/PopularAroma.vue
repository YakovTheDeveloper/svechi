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

const slides = [
    { imgUrl: icon1, id: 1, title: 'Ладан' },
    { imgUrl: icon2, id: 2, title: 'Кожа и древесина' },
    { imgUrl: icon3, id: 3, title: 'Марокканский кашемир' },
    { imgUrl: icon4, id: 4, title: 'Дерево сандалаи жасмин' },
    { imgUrl: icon5, id: 5, title: 'Амбра, табак' },
    { imgUrl: icon6, id: 6, title: 'По мотивам духов Santal 33' }
]

const sliderBreakpoints = {
    480: {
        slidesPerView: 3,
        spaceBetween: 16
    },
    960: {
        slidesPerView: 6,
        spaceBetween: 32
    }
}


</script>

<template>
    <div class="container padding">
        <section class="popular-aroma">
            <h2 class="subtitle">
                Самые <VSpan variant="fill">популярные</VSpan> ароматы
            </h2>
            <VSwiper :slides="slides" :breakpoints="sliderBreakpoints">
                <template #slide="{ slide }">
                    <div class="popular-aroma__item">
                        <IconWithBackground :src="slide.imgUrl" alt="aroma-icon" />
                        <p class="bold">{{ slide.title }}</p>
                    </div>
                </template>
            </VSwiper>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.subtitle {
    margin-bottom: 64px;
}

.popular-aroma {

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
}
</style>

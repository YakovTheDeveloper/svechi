<script setup lang="ts">
import IconWithBackground from '@/shared/ui/v-icon-with-background/IconWithBackground.vue';


import { computed } from 'vue';
import { useGetSlides } from './useGetSlides';
import { useScrollFade } from '../../our-advantages/ui/useScrollFade';
const { slides } = useGetSlides()
const { containerRef, fadeClasses } = useScrollFade();

const partOne = computed(() => slides.value.slice(0, Math.ceil(slides.value.length / 2)))
const partTwo = computed(() => slides.value.slice(Math.ceil(slides.value.length / 2)))

</script>

<template>
    <div class="popular-aroma-mobile" :class="fadeClasses">
        <div class="popular-aroma-mobile-inner"  ref="containerRef">
            <ul class="popular-aroma-mobile__list">
                <li class="popular-aroma-mobile-item" v-for="item in partOne" :key="item.id">
                    <IconWithBackground :src="item.imgUrl" alt="aroma-icon" />
                    <p class="popular-aroma-mobile-item__text">
                        {{ item.title }}
                    </p>
                </li>
            </ul>
            <ul class="popular-aroma-mobile__list">
                <li class="popular-aroma-mobile-item" v-for="item in partTwo" :key="item.id">
                    <IconWithBackground :src="item.imgUrl" alt="aroma-icon" />
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

    @include mobile {
        display: block;
    }

    &__list {
        display: flex;
        gap: 8px;
    }
}


.fade-left {
    @include tablet {
        &:before {
            @include fade-overlay-left($width: 15%);
        }
    }
}

.fade-right {
    @include tablet {
        &:after {
            @include fade-overlay-right($width: 15%);
        }
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

<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import VButton from '@/shared/ui/v-button/VButton.vue';
import Navbar from '../../Navbar.vue';
import HeroTitle from '../../HeroTitle.vue';
import OurCandles from '@/widgets/ourCandles/ui/OurCandles.vue';
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import VButtonIcon from '@/shared/ui/v-button/VButtonIcon.vue';
import CandleProductList from './CandleProductList/CandleProductList.vue';

</script>

<template>
    <div class="container padding">
        <section class="candle-products">
            <div class="candle-products__description">
                <h1 class="title">Свечи, согревающие <VSpan variant="fill">сердца</VSpan>
                </h1>
                <VButton class="candle-products__contact-btn">
                    Написать нам
                </VButton>
            </div>
            <CandleProductList />
            <VButton class="candle-products__contact-btn_mobile">
                Написать нам
            </VButton>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.candle-products {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 32px;

    @include tablet {
        position: relative;

        &::after {
            @include fade-overlay-right(120px); // Apply with default or custom width
        }
    }

    @include mobile {
        &::after {
            display: none;
        }
    }

    @include mobile {
        gap: 16px;
        grid-template-columns: 1fr;
    }

    &__contact-btn {
        display: flex;
        margin-top: auto;


        @include mobile {
            display: none;
        }

        &_mobile {
            display: none;

            @include mobile {
                display: inline-block;
                width: fit-content;
            }
        }
    }

    &__description {
        max-width: 424px;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

}
</style>

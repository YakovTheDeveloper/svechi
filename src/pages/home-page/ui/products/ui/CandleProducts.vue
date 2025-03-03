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
        </section>
    </div>
</template>

<style lang="scss" scoped>
.candle-products {
    display: flex;
    gap: 32px;

    @include tablet {
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: relative;

        &::after {
            @include fade-overlay-right(120px); // Apply with default or custom width
        }
    }

    &__contact-btn {
        margin-top: auto;
    }

    &__description {
        max-width: 424px;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

}
</style>

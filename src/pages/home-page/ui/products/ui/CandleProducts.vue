<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import VButton from '@/shared/ui/v-button/VButton.vue';
import Navbar from '../../Navbar.vue';
import HeroTitle from '../../HeroTitle.vue';
import OurCandles from '@/widgets/ourCandles/ui/OurCandles.vue';
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import VButtonIcon from '@/shared/ui/v-button/VButtonIcon.vue';
import CandleProductList from './CandleProductList/CandleProductList.vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n()
</script>

<template>
    <div class="container padding">
        <section class="candle-products">
            <div class="candle-products__description">

                <h1 class="title">
                    <template v-if="locale === 'ru'">
                        Свечи, согревающие <VSpan variant="fill">сердца</VSpan>
                    </template>
                    <template v-else>
                        Candles that Warm <VSpan variant="fill">Hearts</VSpan>
                    </template>
                </h1>
                <VButton class="candle-products__contact-btn">
                    {{ $t('contact_write_us') }}
                </VButton>
            </div>
            <CandleProductList />
            <VButton class="candle-products__contact-btn_mobile">
                {{ $t('contact_write_us') }}
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

    @media (max-width: 1000px) {
        gap: 16px;
        grid-template-columns: 1fr;
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


        @media (max-width: 1000px){
            display: none;
        }

        &_mobile {
            display: none;

            @media (max-width: 1000px){
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

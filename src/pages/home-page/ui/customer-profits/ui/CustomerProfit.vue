<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import VButton from '@/shared/ui/v-button/VButton.vue';
import Navbar from '../../Navbar.vue';
import HeroTitle from '../../HeroTitle.vue';
import OurCandles from '@/widgets/ourCandles/ui/OurCandles.vue';
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import VButtonIcon from '@/shared/ui/v-button/VButtonIcon.vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n()

</script>

<template>
    <div class="container padding">
        <section class="customer-profit padding">
            <div class="customer-profit__description padding-vertical">
                <h1 class="title">
                    <template v-if="locale === 'ru'">
                        Выгодные
                        <VSpan variant="fill">условия</VSpan> для
                        <VSpan variant="underlined">постоянных</VSpan> клиентов
                    </template>
                    <template v-else-if="locale === 'he'">
                        <VSpan variant="fill">תנאים</VSpan> מיוחדים ללקוחות
                        <VSpan variant="underlined">קבועים</VSpan>
                    </template>
                    <template v-else>
                        Favorable <VSpan variant="fill">Conditions</VSpan> for <VSpan variant="underlined">Regular
                        </VSpan> Customers
                    </template>
                </h1>
                <p class="text customer-profit__text">
                    {{ $t('customer_profit_text') }}
                </p>
            </div>
            <div class="customer-profit__img padding-vertical">
                <img src="/img/customer-profit/1.png" alt="customer-profit">
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.title {
    margin-bottom: 32px;

    @include tablet {
        font-size: 48px;
        line-height: normal;
    }

    @include mobile {
        font-size: 24px;
        line-height: normal;
        margin-bottom: 16px;
    }
}

.text {
    color: var(--black-secondary);
}

.customer-profit {
    display: flex;
    gap: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    // align-items: stretch;
    background: url('/img/customer-profit/bg.svg') no-repeat;
    background-size: 1024px;
    background-position: 50% 30%;
    background-color: var(--bg-2);
    border-radius: 64px;
    position: relative;

    &:before,
    &:after {
        content: '';
        position: absolute;
        z-index: 0;

        @include tablet {
            display: none;
        }
    }

    &:before {
        width: 516px;
        height: 217px;
        top: -30%;
        left: 26%;
        background: url('@/app/assets/decorations/customer-profit/1.svg') center no-repeat;

        @include rtl-flip;
        @include rtl{
            left: 47%;
            top: -48%;
        }
    }

    &:after {
        width: 690px;
        height: 253px;
        bottom: -32%;
        left: 21%;
        background: url('@/app/assets/decorations/customer-profit/2.svg') center no-repeat;
    }

    @include tablet {
        margin-top: 64px;

        grid-template-columns: 1fr;
        background-size: 120%;
        background-position: 20% -20%;
        gap: 0;
    }

    @include mobile {
        background-size: 108%;
        background-position: 57% 0;
    }

    &__text {
        max-width: 664px;

        @include tablet {
            max-width: unset;
        }
    }

    &__description {
        max-width: 800px;
        flex-shrink: 0;
        z-index: 2;
    }

    &__img {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        position: relative;
        min-width: 30%;

        @include tablet {
            min-width: 100%;
            height: 450px;
            order: -1;
        }

        @include mobile {
            height: 200px;
        }

        img {
            min-width: 450px;
            max-width: 150%;
            object-fit: cover;
            position: absolute;
            right: 37%;
            top: 40%;
            transform: translate(50%, -50%);

            @include tablet {
                min-width: unset;
                max-width: 100%;
                position: absolute;
                top: 43%;
                right: 48%;
            }
        }
    }
}
</style>

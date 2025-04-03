<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import VButton from '@/shared/ui/v-button/VButton.vue';
import Navbar from '../../Navbar.vue';
import HeroTitle from '../../HeroTitle.vue';
import OurCandles from '@/widgets/ourCandles/ui/OurCandles.vue';
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import VButtonIcon from '@/shared/ui/v-button/VButtonIcon.vue';
import { useI18n } from 'vue-i18n';
import IconArrowRight from '@/shared/icons/IconArrowRight.vue';
import { scrollToId } from '@/shared/utils/scrollToId';
const { locale } = useI18n()
</script>

<template>
    <div class="container padding">
        <section class="unique-design">
            <div class="unique-design__points">
                <h1 class="title">
                    <template v-if="locale === 'ru'">
                        <VSpan variant="fill">Уникальный</VSpan> дизайн
                    </template>
                    <template v-else-if="locale === 'he'">
                        <VSpan variant="fill">מיוחד</VSpan> עיצוב
                    </template>
                    <template v-else>
                        <VSpan variant="fill">Unique</VSpan> Design
                    </template>
                </h1>
                <div class="unique-design__benefits">
                    <p class="unique-design__benefits-title bold">
                        <!-- Наши преимущества: -->
                        {{ $t('unique_design_benefits_title') }}
                    </p>
                    <div class="unique-design__benefits-list">
                        <VBadge variant="primary" class="unique-design__badge">
                            <!-- Потрясающий аромат -->
                            {{ $t('unique_design_benefits_aroma') }}
                        </VBadge>
                        <VBadge variant="primary" class="unique-design__badge">
                            <!-- Уникальный дизайн -->
                            {{ $t('unique_design_benefits_unique_design') }}
                        </VBadge>
                        <VBadge variant="primary" class="unique-design__badge">
                            <!-- Индивидуальные решения -->
                            {{ $t('unique_design_benefits_individual_solutions') }}
                        </VBadge>
                    </div>
                </div>
            </div>
            <div class="unique-design__img">
                <img src="/img/unique-design/1.png" alt="candle">
            </div>
            <div class="unique-design__description">
                <p class="text">
                    {{ $t('unique_design_text') }}

                    <!-- Создаем уникальные свечи ручной работы, которые идеально впишутся в любой интерьер.
                    Мы поможем
                    выбрать аромат, форму и дизайн, соответствующие вашему стилю. Напишите нам, и мы с радостью
                    предложим индивидуальные решения, чтобы ваша свеча стала настоящим украшением вашего пространства!
                 -->
                </p>
                <VButtonIcon :label="$t('our_candles')" @click="scrollToId('candle-products')">
                    <IconArrowRight />
                </VButtonIcon>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.container{
    z-index: 2;
}
.title {
    margin-bottom: 40px;
    position: relative;

    @include tablet {
        max-width: 590px;
        margin-bottom: 24px;
    }

    @include mobile {
        margin-bottom: 16px;
    }


    &:after {
        position: absolute;
        content: '';
        top: -100px;
        right: -248px;
        background: url('@/app/assets/decorations/unique-design/1.svg') center no-repeat;
        width: 560px;
        height: 93px;

        @include rtl-flip;

        @include rtl {
            right: 248px;
        }

        @media (max-width: 1400px) {
            display: none;
        }

    }
}

.unique-design {
    display: grid;
    justify-content: space-between;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 1400px) {
        grid-template-columns: 1fr;
        gap: 48px;
    }

    &__benefits {
        display: flex;
        flex-direction: column;
        gap: 32px;

        @include tablet {
            gap: 16px;
        }

        &-title {
            font-size: 32px;

            @include mobile {
                font-size: 14px;
            }
        }

        &-list {
            display: flex;
            flex-direction: column;
            gap: 16px;

            @include tablet {
                flex-direction: row;
                flex-wrap: wrap;
            }
        }
    }

    &__badge {
        font-weight: 400;

        @include tablet {
            align-items: center;
            text-align: center;
            flex-grow: 1;
        }

        @include mobile {
            flex-grow: 0;
        }

    }

    &__description {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: end;
        color: var(--black-secondary);

        @include tablet {
            gap: 24px;
            align-items: start;
        }
    }

    &__img {
        max-width: 424px;
        margin: 0 auto;
        aspect-ratio: 1;
        flex-shrink: 1;
        position: relative;

        @include mobile {
            max-width: 159px;
        }


        img {
            width: 100%;
            aspect-ratio: 1;
            object-fit: cover;
            border-radius: 50%;
            overflow: hidden;
        }

        &:before,
        &:after {
            content: '';
            position: absolute;
            z-index: 1;

            @include mobile {
                display: none;
            }
        }

        &:before {
            width: 480px;
            height: 110px;
            bottom: 18px;
            left: -382px;
            background: url('@/app/assets/decorations/unique-design/candle-line-2.svg') center no-repeat;

            @include rtl-flip;

            @include rtl {
               left: 342px;
            }

            @include tablet {
                background: url('@/app/assets/decorations/unique-design/candle-line-2_tablet.svg') center no-repeat;
                width: 376px;
                height: 266px;
                bottom: -38px;
                left: -150px;
            }
        }

        &:after {
            width: 300px;
            height: 122px;
            top: 10px;
            right: -79px;
            background: url('@/app/assets/decorations/unique-design/candle-line-1.svg') center no-repeat;

            @include rtl-flip;

            @include rtl {
                right: 200px;
            }

            @include tablet {
                width: 258px;
                height: 223px;
                background: url('@/app/assets/decorations/unique-design/candle-line-1_tablet.svg') center no-repeat;
                top: -40px;
                right: -109px;
            }
        }

    }
}
</style>

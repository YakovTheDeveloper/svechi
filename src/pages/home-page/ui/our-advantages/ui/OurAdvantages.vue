<script setup lang="ts">
import VButton from '@/shared/ui/v-button/VButton.vue';
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import OurAdvantagesItem from './OurAdvantagesItem.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { getPublicUrl } from '@/shared/utils/getPublicUrl';
import { useScrollFade } from './useScrollFade';

const { containerRef, fadeClasses } = useScrollFade();
const { locale, t } = useI18n()

const MOCK_DATA = computed(() => {
    return [
        {
            imgUrl: getPublicUrl('img/our-advantages/1.svg'),
            description: t('our_advantages_item_1_description'),
            title: t('our_advantages_item_1_title'),

        },
        {
            imgUrl: getPublicUrl('img/our-advantages/2.svg'),
            description: t('our_advantages_item_2_description'),
            title: t('our_advantages_item_2_title'),
        },
        {
            imgUrl: getPublicUrl('img/our-advantages/3.svg'),
            description: t('our_advantages_item_3_description'),
            title: t('our_advantages_item_3_title'),
        },
        {
            imgUrl: getPublicUrl('img/our-advantages/4.svg'),
            description: t('our_advantages_item_4_description'),
            title: t('our_advantages_item_4_title'),
        },
        {
            imgUrl: getPublicUrl('img/our-advantages/5.svg'),
            description: t('our_advantages_item_5_description'),
            title: t('our_advantages_item_5_title'),
        },
        {
            imgUrl: getPublicUrl('img/our-advantages/6.svg'),
            description: t('our_advantages_item_6_description'),
            title: t('our_advantages_item_6_title'),
        },
    ]
})



</script>

<template>
    <div class="container padding">
        <section class="our-advantages">
            <h2 class="subtitle">

                <template v-if="locale === 'ru'">
                    <VSpan variant="underlined" class="subtitle-span">Мы заботимся</VSpan>

                    о вашем уюте — вот почему <VSpan variant="fill">нам
                        доверяют</VSpan>
                </template>
                <template v-else-if="locale === 'he'">
                    <VSpan variant="underlined" class="subtitle-span">אנו דואגים</VSpan>
                    לאווירה המיוחדת בבית שלכם – לכן <VSpan variant="fill">בוטחים בנו</VSpan>
                </template>
                <template v-else>
                    <VSpan variant="underlined" class="subtitle-span">We care</VSpan>

                    about your comfort — that's why you <VSpan variant="fill">trust us</VSpan>
                </template>
            </h2>
        </section>
        <div class="our-advantages__list-container" :class="fadeClasses">
            <ul class="our-advantages__list" ref="containerRef">
                <template v-for="data in MOCK_DATA">
                    <OurAdvantagesItem :='data' />
                </template>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.subtitle {
    margin-bottom: 64px;
    color: var(--black-primary);
    line-height: 170%;

    @include tablet {
        margin-bottom: 32px;
        line-height: 150%;
    }

    &-span {
        // @include tablet {
        //     display: none;
        // }

        // &_mobile {
        //     display: none;

        //     @include tablet {
        //         display: inline-block;
        //     }
        // }
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

.our-advantages {
    position: relative;



    &__list {
        display: flex;
        gap: 32px;
        flex-wrap: wrap;
        padding-left: 64px;
        padding-right: 64px;
        justify-content: space-evenly;


        @include tablet {
            overflow: auto;
            flex-wrap: nowrap;
        }

        @include mobile {
           padding: 0;
            gap: 8px;
        }

    }

    &__list-container {
        border-radius: 64px;
        background-color: var(--bg-2);
        padding: 64px;
        padding-left: unset;
        position: relative;

        @include tablet {
            overflow: auto;
            padding-right: unset;
            border-radius: 64px;
            overflow-y: hidden;
        }

        @include mobile {
            padding: 8px;
            border-radius: 32px;
        }
    }
}
</style>

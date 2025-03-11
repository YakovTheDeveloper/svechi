<script setup lang="ts">
import VButton from '@/shared/ui/v-button/VButton.vue';
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import OurAdvantagesItem from './OurAdvantagesItem.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { getPublicUrl } from '@/shared/utils/getPublicUrl';

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
                    <span class="subtitle-span_mobile">Мы заботимся</span>
                    о вашем уюте — вот почему <VSpan variant="fill">нам
                        доверяют</VSpan>
                </template>
                <template v-else>
                    <VSpan variant="underlined" class="subtitle-span">We care</VSpan>
                    <span class="subtitle-span_mobile">We care</span>
                    about your comfort — that's why you <VSpan variant="fill">trust us</VSpan>
                </template>
            </h2>
        </section>
        <div class="our-advantages__list-container">
            <ul class="our-advantages__list">
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

    @include tablet {
        margin-bottom: 32px;
    }

    &-span {

        @include tablet {
            display: none;
        }

        &_mobile {
            display: none;

            @include tablet {
                display: inline-block;
            }
        }
    }
}

.our-advantages {

    &__list {
        display: flex;
        gap: 32px;
        flex-wrap: wrap;
        padding-left: 64px;
        justify-content: space-evenly;


        @include tablet {
            overflow: auto;
            flex-wrap: nowrap;
        }

        @include mobile {
            padding-left: 0;
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
        }

        @include mobile {
            padding: 8px;
            border-radius: 32px;

            &:after {
                @include fade-overlay-right($width: 20%)
            }
        }
    }
}
</style>

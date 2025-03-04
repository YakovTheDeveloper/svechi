<script setup lang="ts">
import VButton from '@/shared/ui/v-button/VButton.vue';
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import OurAdvantagesItem from './OurAdvantagesItem.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n()

const MOCK_DATA = computed(() => {
    return [
        {
            imgUrl: '/img/our-advantages/1.svg',
            description: t('our_advantages_item_1_description'),
            title: t('our_advantages_item_1_title'),

        },
        {
            imgUrl: '/img/our-advantages/2.svg',
            description: 'Мы создаем ароматы, которые подчеркивают ваш стиль и атмосферу дома, а также учитываем индивидуальные предпочтения.',
            title: 'Уникальные ароматы и индивидуальный подход',
        },
        {
            imgUrl: '/img/our-advantages/3.svg',
            description: 'В наличии свечи разных объемов и времени горения, что позволяет подобрать идеальный вариант для любого случая.',
            title: 'Разнообразие форм и размеров',
        },
        {
            imgUrl: '/img/our-advantages/4.svg',
            description: 'Мы оперативно доставляем заказы в любую точку страны, чтобы ваши свечи радовали вас как можно быстрее.',
            title: 'Быстрая доставка по Израилю',
        },
        {
            imgUrl: '/img/our-advantages/5.svg',
            description: 'Наши свечи — это не только уют и аромат, но и прекрасное украшение интерьера или продуманный подарок.',
            title: 'Идеальный подарок и стильный декор',
        },
        {
            imgUrl: '/img/our-advantages/6.svg',
            description: 'Мы часто радуем клиентов скидками и предлагаем самые доступные цены на рынке свечей ручной работы.',
            title: 'Лучшие цены и регулярные акции',
        },
    ]
})



</script>

<template>
    <div class="container padding">
        <section class="our-advantages">
            <h2 class="subtitle">
                <VSpan variant="underlined subtitle-span">Мы заботимся</VSpan>
                <span class="subtitle-span_mobile">Мы заботимся</span>
                о вашем уюте — вот почему <VSpan variant="fill">нам
                    доверяют</VSpan>
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

    }

    &__list-container {
        border-radius: 64px;
        background-color: var(--bg-2);
        padding: 64px;
        padding-left: unset;

        @include tablet {
            overflow: auto;
        }
    }
}
</style>

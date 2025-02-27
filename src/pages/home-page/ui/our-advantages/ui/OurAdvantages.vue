<script setup lang="ts">
import VButton from '@/shared/ui/v-button/VButton.vue';
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import OurAdvantagesItem from './OurAdvantagesItem.vue';

const MOCK_DATA = [
    {
        imgUrl: '/img/our-advantages/1.svg',
        description: 'Наши свечи изготовлены из 100% натуральных компонентов, не содержат вредных веществ и полностью безопасны для здоровья.',
        title: 'Натуральный состав и безопасность',
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
</script>

<template>
    <div class="container padding">
        <section class="our-advantages">
            <h2 class="subtitle">
                <VSpan variant="underlined">Мы заботимся</VSpan>
                о вашем уюте — вот почему <VSpan variant="fill">нам
                    доверяют</VSpan>
            </h2>
        </section>
        <ul class="our-advantages__list padding padding-vertical">
            <template v-for="data in MOCK_DATA">
                <OurAdvantagesItem :='data' />
            </template>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.subtitle {
    margin-bottom: 64px;
    color: var(--black-primary);
}

.our-advantages {

    &__list {
        display: flex;
        gap: 32px;
        flex-wrap: wrap;
        border-radius: 64px;
        background-color: var(--bg-2);

    }
}
</style>

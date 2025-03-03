<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import VButton from '@/shared/ui/v-button/VButton.vue';
import Navbar from '../../Navbar.vue';
import HeroTitle from '../../HeroTitle.vue';
import OurCandles from '@/widgets/ourCandles/ui/OurCandles.vue';
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import VButtonIcon from '@/shared/ui/v-button/VButtonIcon.vue';

</script>

<template>
    <div class="container padding">
        <section class="customer-profit padding">
            <div class="customer-profit__description padding-vertical">
                <h1 class="title">
                    Выгодные
                    <VSpan variant="fill">условия</VSpan> для
                    <VSpan variant="underlined">постоянных</VSpan> клиентов

                </h1>
                <p class="text">Для крупных заказов мы предлагаем выгодные скидки, особенно для тех, кто
                    планирует приобретать свечи на постоянной основе. Мы ценим долгосрочное сотрудничество и готовы
                    предложить вам лучшие условия. Напишите нам, и мы подберем идеальные решения для вашего бизнеса или
                    проекта!</p>
            </div>
            <div class="customer-profit__img">
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
}

.text {
    color: var(--black-secondary);
}

.customer-profit {
    display: flex;
    gap: 32px;
    align-items: center;
    background: url('/img/customer-profit/bg.svg') no-repeat;
    background-size: 1024px;
    background-position: 50% 30%;
    background-color: var(--bg-2);
    border-radius: 64px;

    @include tablet {
        flex-direction: column-reverse;
        background-size: 120%;
        background-position: 20% -20%;
        gap: 0;
    }

    &__description {
        max-width: 800px;
        flex-shrink: 0;
        z-index: 2;
    }

    &__img {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 100%;

        @include tablet {
            width: 100%;
            height: 480px;
        }

        img {
            width: 150%;
            object-fit: cover;
            position: absolute;
            transform: translate(-5%, 5%);

            @include tablet {
                position: absolute;
                top: 50%;
                right: 68%;
                transform: translate(50%, -50%);
            }
        }
    }
}
</style>

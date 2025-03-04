<script setup lang="ts">
import VButton from '@/shared/ui/v-button/VButton.vue';
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';


</script>

<template>
    <div class="container padding">
        <section class="about-us">
            <div class="about-us__img">
                <img src="/img/about-us/1.png" alt="">
            </div>
            <div class="about-us__text-content">
                <h2 class="subtitle">О нашей <VSpan variant="fill">мастерской</VSpan>
                </h2>
                <p>
                    Всем привет! Я Дарья Агафонова, и я создаю свечи ручной работы с уникальными ароматами. Каждая свеча
                    сделана с любовью, из 100% натуральных компонентов, безопасных для здоровья. В отличие от массово
                    производимых свечей с парафином и синтетическими ароматами, мои свечи не содержат вредных веществ,
                    что делает их идеальными для вашего дома.
                    <br />
                    <br />
                    Я предлагаю широкий ассортимент свечей, подходящих под любой интерьер и предпочтения. У нас есть
                    различные ароматы: от свежих и легких до насыщенных и уютных, а также различные объемы с разным
                    временем горения. Каждая свеча индивидуальна и подбирается под ваш интерьер.
                    <br />
                    <br />
                    Доставка по всему
                    Израилю.
                    <br />
                    <br />
                    Свечи ручной работы — это не только безвредные и безопасные продукты, но и отличный способ украсить
                    дом. Они добавят уюта в любую комнату, будь то спальня, гостиная, ванная комната или даже офис.
                    <br />
                    <br />
                    Пишите, я помогу вам выбрать идеальные свечи, которые станут частью вашего уюта в доме или добавит
                    магии вечерним моментам на улице!
                </p>
                <VButton class="about-us__order-btn">
                    Оформить заказ
                </VButton>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.title {
    margin-bottom: 32px;
}

.subtitle {
    color: var(--black-primary);
}

.text {
    color: var(--black-secondary);
}

.about-us {
    display: flex;
    gap: 32px;

    @media (max-width: 1400px) {
        flex-direction: column;
    }

    @include tablet {
        flex-direction: column;
    }

    &__img {
        padding: 60px 76px;
        max-width: 728px;
        flex-shrink: 0;
        position: relative;

        img {
            max-width: 100%;
            object-fit: contain;
        }

        &:after {
            position: absolute;
            top: 13%;
            right: 0;
            z-index: -1;
            content: '';
            width: 152px;
            height: 160px;
            background: url('/img/about-us/quotation-mark.png') center no-repeat;
        }
    }

    &__text-content {
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding-right: 120px;
        position: relative;
        color: var(--black-secondary);
        align-items: start;

        &:after {
            position: absolute;
            bottom: 18%;
            right: 3%;
            z-index: -1;
            content: '';
            width: 152px;
            height: 160px;
            -moz-transform: scale(-1, 1);
            -webkit-transform: scale(-1, 1);
            -o-transform: scale(-1, 1);
            -ms-transform: scale(-1, 1);
            transform: scale(-1, 1);
            background: url('/img/about-us/quotation-mark.png') center no-repeat;
        }
    }

    &__order-btn {
        margin-top: 64px;

        @include tablet {
            margin-top: 0;
        }
    }
}
</style>

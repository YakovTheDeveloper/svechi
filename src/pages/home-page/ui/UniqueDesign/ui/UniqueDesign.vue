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
        <section class="unique-design">
            <div class="unique-design__points">
                <h1 class="title">
                    <VSpan variant="fill">Уникальный</VSpan> дизайн
                </h1>
                <div class="unique-design__benefits">
                    <p class="text-l bold">Наши преимущества:</p>
                    <div class="unique-design__benefits-list">
                        <VBadge variant="primary" class="unique-design__badge">Потрясающий аромат</VBadge>
                        <VBadge variant="primary" class="unique-design__badge">Уникальный дизайн</VBadge>
                        <VBadge variant="primary" class="unique-design__badge">Индивидуальные решения</VBadge>
                    </div>
                </div>
            </div>
            <div class="unique-design__img">
                <img src="/img/unique-design/1.png" alt="candle">
            </div>
            <div class="unique-design__description">
                <p class="text">Создаем уникальные свечи ручной работы, которые идеально впишутся в любой интерьер.
                    Мы поможем
                    выбрать аромат, форму и дизайн, соответствующие вашему стилю. Напишите нам, и мы с радостью
                    предложим индивидуальные решения, чтобы ваша свеча стала настоящим украшением вашего пространства!
                </p>
                <VButtonIcon label="Наши свечи" />
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.title {
    margin-bottom: 40px;
    position: relative;

    &:after{
        position: absolute;
        content:'';
        top: -100px;
        right: -330px;
        background: url('@/app/assets/decorations/unique-design/1.svg') center no-repeat;
        width: 560px;
        height: 93px;

    }
}

.unique-design {
    display: grid;
    gap: 108px;
    grid-template-columns: 1fr 1fr 1fr;

    &__benefits {
        display: flex;
        flex-direction: column;
        gap: 32px;

        &-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
    }

    &__badge {
        font-weight: 400;
    }

    &__description {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: end;
        color: var(--black-secondary);
    }

    &__img {
        max-width: 424px;
        margin: 0 auto;
        aspect-ratio: 1;
        border-radius: 50%;
        overflow: hidden;

        img {
            max-width: 100%;
            object-fit: cover;
        }
    }
}
</style>

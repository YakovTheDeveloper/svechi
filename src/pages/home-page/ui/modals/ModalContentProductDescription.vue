<script setup lang="ts">

import VButton from '@/shared/ui/v-button/VButton.vue';
import { ref } from 'vue'

</script>

<template>
    <div class="modal-content-product-description">
        <div>
            <p class="modal-content-product-description__title bold">Свечи в стеклянной банке, 360 мл.</p>
            <p class="modal-content-product-description__text">Свечи в металлической банке объемом 200 мл — это
                сочетание современного дизайна и длительного горения от 25 часов. Они идеально подойдут для создания
                уюта в любом уголке вашего дома. Пишите нам, и мы предложим свечи, которые гармонично впишутся в ваш
                интерьер!</p>
        </div>
        <p class="modal-content-product-description__price">160 ₪</p>
        <VButton>Написать нам</VButton>
    </div>
</template>

<style lang="scss" scoped>
.modal-content-product-description {
    display: flex;
    gap: 64px;
    flex-direction: column;
    align-items: start;

    &__title {
        font-size: 48px;
        margin-bottom: 32px;
    }

    &__text {
        font-size: 24px;
        color: var(--black-secondary);
    }

    &__price {
        color: var(--black-primary);
        font-size: 48px;
        font-weight: 700;
    }


}
</style>

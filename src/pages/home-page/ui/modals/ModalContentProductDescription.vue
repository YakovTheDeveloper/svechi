<script setup lang="ts">

import { useStore } from '@/shared/stores/store';
import VButton from '@/shared/ui/v-button/VButton.vue';
import { ref } from 'vue'

const store = useStore()

</script>

<template>
    <div class="modal-content-product-description">
        <div>
            <p class="modal-content-product-description__title bold">
                <template v-if="store.currentModalProduct?.amount">
                    {{ store.currentModalProduct?.title }}, {{ store.currentModalProduct?.amount }} {{ $t('unit_ml') }}.
                </template>
                <template v-else>
                    {{ store.currentModalProduct?.title }}.
                </template>
            </p>
            <p class="modal-content-product-description__text">{{ store.currentModalProduct?.description }}</p>
        </div>
        <p class="modal-content-product-description__price">{{ store.currentModalProduct?.price }} ₪</p>
        <VButton class="modal-content-product-description__order-button">
            {{ $t('contact_write_us') }}
        </VButton>
    </div>
</template>

<style lang="scss" scoped>
.modal-content-product-description {
    display: flex;
    gap: 64px;
    flex-direction: column;
    align-items: start;

    @include tablet {
        gap: 48px;
        flex-grow: 1;
    }

    @include mobile {
        gap: 16px;
    }

    &__title {
        font-size: 48px;
        margin-bottom: 32px;

        @include mobile {
            font-size: 20px;
            margin-bottom: 8px;
        }
    }

    &__text {
        font-size: 24px;
        color: var(--black-secondary);

        @include mobile {
            font-size: 14px;
        }
    }

    &__price {
        color: var(--black-primary);
        font-size: 48px;
        font-weight: 700;

        @include mobile {
            font-size: 24px;
        }
    }

    &__order-button {
        margin-top: auto;
    }


}
</style>

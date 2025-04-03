<script setup lang="ts">
import IconArrowRight from '@/shared/icons/IconArrowRight.vue';
import { useStore } from '@/shared/stores/store';
import type { Product } from '@/shared/types/product';
import { VBadge } from '@/shared/ui/v-badge';
import { VButton } from '@/shared/ui/v-button';
import VButtonIcon from '@/shared/ui/v-button/VButtonIcon.vue';

const emits = defineEmits(['onClick'])

const props = defineProps<Product>()

const store = useStore()

</script>

<template>
    <li class="candleItem">
        <div class="candleItem__image-container">
            <img :src="props.imgUrl" alt="">
        </div>
        <div class="candleItem__text">
            <p class="text candleItem__text-title">{{ props.title }}</p>
            <p class="candleItem__text-amount" v-if="props.amount">{{ props.amount }} {{ props.unit }}</p>
        </div>
        <VBadge variant="secondary">36 {{ $t('scents') }}</VBadge>
        <VButtonIcon @click="emits('onClick')">
            <IconArrowRight />
        </VButtonIcon>
    </li>
</template>

<style lang="scss" scoped>
.candleItem {
    display: grid;
    gap: 32px;
    padding: 12px 0;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto 50% 1fr auto;
    border-bottom: 1px solid var(--black-third);

    @media (max-width: 850px) {
        gap: 4px;
    }

    &__text {
        display: flex;
        flex-direction: column;
        font-weight: 500;
        color: var(--black-primary);

        @include mobile {
            font-size: 12px;
            font-weight: 500;
        }

        &-title {}

        &-amount {}
    }

    &__image-container {
        width: 96px;
        height: 96px;
        border-radius: 24px;
        overflow: hidden;
        background-color: var(--black-third);

        @include mobile {
            width: 36px;
            height: 36px;
            border-radius: 9px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }


}
</style>

<script setup lang="ts">

</script>
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
        <div class="candleItem__text" @click="emits('onClick')">
            <p>{{ props.title }}</p>
            <p v-if="props.amount">{{ $t('volume') }} {{ props.amount }} {{ props.unit
                }}
            </p>
        </div>
        <div class="candleItem__last">
            <VBadge variant="secondary">36 {{ $t('scents') }}</VBadge>
            <VButtonIcon @click="emits('onClick')" class="candleItem__button">
                <IconArrowRight />
            </VButtonIcon>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.candleItem {
    display: grid;
    gap: 32px;
    padding: 12px 0;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto 1fr auto;
    border-bottom: 1px solid var(--black-third);

    @media (max-width: 1800px) {
        gap: 8px;
    }

    @include laptop {
        padding: 9px 0;
        gap: 12px;
    }

    @include tablet {
        padding: 12px 0;
    }

    @media (max-width: 850px) {
        gap: 4px;
    }

    &__text {
        display: flex;
        flex-direction: column;
        font-weight: 500;
        color: var(--black-primary);
        cursor: pointer;
        width: fit-content;

        @include laptop {
            font-size: 18px;
        }

        @include mobile {
            font-size: 12px;
            font-weight: 500;
        }
    }

    &__image-container {
        width: 96px;
        height: 96px;
        border-radius: 24px;
        overflow: hidden;
        background-color: var(--black-third);

        @include laptop {
            width: 70px;
            height: 70px;
        }

        @media (max-width: 600px) {
            width: 75px;
            height: 75px;
        }

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

    &__button {
        @media (max-width: 1400px) {
            gap: 8px;
        }
    }

    &__last {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }


}
</style>

<script setup lang="ts">

</script>
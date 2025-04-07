<script setup lang="ts">
import { useStore } from '@/shared/stores/store';
import type { Product } from '@/shared/types/product';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const props = defineProps<{
    product: Product
}>()

const { openModal } = useStore()

const onClick = () => openModal(props.product)

const shouldHaveComma = computed(() => {
    if (locale.value === 'he') {
        return false
    }
    return !!props.product.amount
})

</script>

<template>
    <li class="candle-product-item" @click="onClick">
        <div class="candle-product-item__img">
            <img :src="props.product.imgUrl" alt="goods-image">
        </div>
        <div class="candle-product-item__main">
            <p class="candle-product-item__name">
                <span>{{ props.product.title }}<span v-if="shouldHaveComma">,</span>
                </span>
                <span v-if="props.product.amount" class="candle-product-item__amount"> {{
                    props.product.amount }} {{
                        props.product.unit }}
                </span>

            </p>
            <div class="candle-product-item__price">
                <button @click="onClick">
                    <p class="text underline bold black">
                        {{ $t('more') }}
                        <svg class="candle-product-item__plus-icon" width="12" height="13" viewBox="0 0 12 13"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.9453 5.44531H7.05469V1.55469C7.05469 0.972195 6.58249 0.5 6 0.5C5.41751 0.5 4.94531 0.972195 4.94531 1.55469V5.44531H1.05469C0.472195 5.44531 0 5.91751 0 6.5C0 7.08249 0.472195 7.55469 1.05469 7.55469H4.94531V11.4453C4.94531 12.0278 5.41751 12.5 6 12.5C6.58249 12.5 7.05469 12.0278 7.05469 11.4453V7.55469H10.9453C11.5278 7.55469 12 7.08249 12 6.5C12 5.91751 11.5278 5.44531 10.9453 5.44531Z"
                                fill="#FB0738" />
                        </svg>
                    </p>
                </button>
                <p class="bold candle-product-item__price-text">
                    {{ props.product.price }}{{ " " }}{{ props.product.priceSign }}
                </p>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.candle-product-item {
    display: flex;
    flex-direction: column;
    max-width: 322px;
    height: 442px;
    background-color: var(--bg-2);
    border-radius: 32px;
    cursor: pointer;

    @include mobile {
        max-width: 100%;
        height: 100%;
    }

    &__name {
        display: flex;
        flex-direction: column;
        font-size: 18px;

        @include mobile {
            font-size: 14px;
        }
    }

    &__img {
        height: 322px;
        aspect-ratio: 1;

        @include mobile {
            height: 156px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        padding: 16px;

        @include mobile {
            padding: 24px 8px 16px;
        }
    }

    &__amount {
        display: block;

        @include mobile {
            display: inline;
        }
    }

    &__price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        white-space: nowrap;

        @include mobile {
            flex-direction: column-reverse;
            align-items: start;
            gap: 8px;
        }

        &-text {
            font-size: 28px;

            @include mobile {
                font-size: 18px;
            }
        }
    }

    &__plus-icon {
        display: inline-block;
        margin-left: 6px;

        @include mobile {
            height: 8px;
            margin-left: 1px;
        }
    }

}
</style>

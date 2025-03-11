<script setup lang="ts">
import { getPublicUrl } from '@/shared/utils/getPublicUrl';
import CandleProductItem from './CandleProductItem.vue';
import icon1 from '@/app/assets/icons/aroma/1.svg'

const MOCK_PRODUCTS = [
    {
        imgUrl: getPublicUrl('img/products/1.png'),
        description: 'Свечи в стеклянной банке, 360 мл.',
        price: 160,
        priceSign: '₪'
    },
    {
        imgUrl: getPublicUrl('img/products/2.png'),
        description: 'Свечи в стеклянной банке, 200 мл.',
        price: 95,
        priceSign: '₪'
    },
    {
        imgUrl: getPublicUrl('img/products/3.png'),
        description: 'Свечи в металлической банке, 200 мл.',
        price: 85,
        priceSign: '₪'
    },
    {
        imgUrl: getPublicUrl('img/products/4.png'),
        description: 'Свечи из ващины',
        price: 28,
        priceSign: '₪'
    },
]

</script>

<template>
    <div class="candle-product-list-container">
        <ul class="candle-product-list">
            <template v-for="product in MOCK_PRODUCTS">
                <CandleProductItem :product="product" />
            </template>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.candle-product-list-container {
    position: relative;
    overflow-x: auto;
}

.candle-product-list {
    display: flex;
    gap: 16px;

    @include mobile {
        // display: grid;
        // grid-template-columns: 1fr 1fr;
        flex-wrap: wrap;
    }
}
</style>

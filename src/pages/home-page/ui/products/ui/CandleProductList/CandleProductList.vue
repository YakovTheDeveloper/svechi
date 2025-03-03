<script setup lang="ts">
import CandleProductItem from './CandleProductItem.vue';


const MOCK_PRODUCTS = [
    {
        imgUrl: '/img/products/1.png',
        description: 'Свечи в стеклянной банке, 360 мл.',
        price: 160,
        priceSign: '₪'
    },
    {
        imgUrl: '/img/products/2.png',
        description: 'Свечи в стеклянной банке, 200 мл.',
        price: 95,
        priceSign: '₪'
    },
    {
        imgUrl: '/img/products/3.png',
        description: 'Свечи в металлической банке, 200 мл.',
        price: 85,
        priceSign: '₪'
    },
    {
        imgUrl: '/img/products/4.png',
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

    @include tablet {
        overflow-x: auto;

        // &::after {
        //     @include fade-overlay-right(390px); // Apply with default or custom width
        // }
    }
}

.candle-product-list {

    display: flex;
    gap: 16px;


}
</style>

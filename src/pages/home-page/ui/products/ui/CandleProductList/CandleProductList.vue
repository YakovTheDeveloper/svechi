<script setup lang="ts">
import { getPublicUrl } from '@/shared/utils/getPublicUrl';
import CandleProductItem from './CandleProductItem.vue';
import icon1 from '@/app/assets/icons/aroma/1.svg'

import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { t } = useI18n()


// todo - переиспользовать (вынести)
//@ts-ignore
const DATA: Product[] = computed(() => ([
    {
        id: 2,
        unit: t('unit_ml'),
        title: t('product_item_2'),
        amount: '360',
        imgUrl: getPublicUrl('img/products/1.png'),
        price: 160,
        priceSign: '₪',
        description: t('product_item_2_description'),
    },
    {
        id: 1,
        unit: t('unit_ml'),
        title: t('product_item_1'),
        amount: '200',
        imgUrl: getPublicUrl('img/products/2.png'),
        price: 95,
        priceSign: '₪',
        description: t('product_item_1_description'),
    },
    {
        id: 3,
        unit: t('unit_ml'),
        title: t('product_item_3'),
        amount: '200',
        imgUrl: getPublicUrl('img/products/3.png'),
        price: 85,
        priceSign: '₪',
        description: t('product_item_3_description'),
    },
    {
        id: 4,
        unit: t('unit_ml'),
        title: t('product_item_4'),
        amount: '',
        imgUrl: getPublicUrl('img/products/4.png'),
        price: 28,
        priceSign: '₪',
        description: t('product_item_4_description'),
    },
]))

</script>

<template>
    <div class="candle-product-list-container">
        <ul class="candle-product-list">
            <template v-for="product in DATA">
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(2, 300px);
    }
}
</style>

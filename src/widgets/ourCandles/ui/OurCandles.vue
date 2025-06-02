<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import OurCandlesItem from './OurCandlesItem.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useStore } from '@/shared/stores/store';
import type { Product } from '@/shared/types/product';
import glass360img from "@/app/assets/img/candles/glass360/1.png"
import glass200img from "@/app/assets/img/candles/glass200/1.png"
import metal360img from "@/app/assets/img/candles/metal/1.png"
import waxImg from "@/app/assets/img/candles/wax/1.png"

const { locale, t } = useI18n()

const { openModal } = useStore()

//@ts-ignore
const DATA: Product[] = computed(() => ([
    {
        id: 'glass360',
        unit: t('unit_ml'),
        title: t('product_item_2'),
        amount: '360',
        imgUrl: glass360img,
        price: 160,
        priceSign: t(''),
        description: t('product_item_2_description'),
    },
    {
        id: 'glass200',
        unit: t('unit_ml'),
        title: t('product_item_1'),
        amount: '200',
        imgUrl: glass200img,
        price: 95,
        priceSign: t(''),
        description: t('product_item_1_description'),
    },
    {
        id: 'metal360',
        unit: t('unit_ml'),
        title: t('product_item_3'),
        amount: '200',
        imgUrl: metal360img,
        price: 85,
        priceSign: t(''),
        description: t('product_item_3_description'),
    },
    {
        id: 'wax',
        unit: t('unit_ml'),
        title: t('product_item_4'),
        amount: '',
        imgUrl: waxImg,
        price: 28,
        priceSign: t(''),
        description: t('product_item_4_description'),
    },
]))



</script>

<template>
    <section class="ourCandles">
        <div class="ourCandles__heading">
            <h2 class="subtitle italic">
                {{ $t('our_candles') }}
            </h2>
            <VBadge variant="primary" class="ourCandles__badge">
                {{ $t('popular') }}
            </VBadge>
        </div>
        <ul class="ourCandles__list">
            <template v-for="item in DATA">
                <OurCandlesItem :="item" @on-click="openModal(item)" />
            </template>
        </ul>
        <!-- <p class="underline text bold">
            {{ $t('view_all') }}
        </p> -->
    </section>
</template>

<style lang="scss" scoped>
.subtitle {
    color: var(--black-primary);
}

.ourCandles {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @include laptop {
        gap: 16px;
    }

    @include mobile {
        gap: 16px;
    }

    &__badge {
        position: relative;
        bottom: -5px;
    }

    &__heading {
        display: flex;
        gap: 16px;
        align-items: center;
    }

    &__list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // gap: 16px;

        @include laptop {
            gap: 12px;
        }

        @include tablet {
            gap: 16px;
        }

    }
}
</style>

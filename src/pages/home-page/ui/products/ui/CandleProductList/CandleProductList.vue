<script setup lang="ts">
import { getPublicUrl } from '@/shared/utils/getPublicUrl'
import CandleProductItem from './CandleProductItem.vue'
import icon1 from '@/app/assets/icons/aroma/1.svg'

import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useScrollFade } from '../../../our-advantages/ui/useScrollFade'
const { t } = useI18n()

// todo - переиспользовать (вынести)
//@ts-ignore
const DATA: Product[] = computed(() => [
	{
		id: 'glass360',
		unit: t('unit_ml'),
		title: t('product_item_2'),
		amount: '360',
		imgUrl: getPublicUrl('img/products/1.png'),
		price: 160,
		priceSign: '₪',
		description: t('product_item_2_description'),
	},
	{
		id: 'glass200',
		unit: t('unit_ml'),
		title: t('product_item_1'),
		amount: '200',
		imgUrl: getPublicUrl('img/products/2.png'),
		price: 95,
		priceSign: '₪',
		description: t('product_item_1_description'),
	},
	{
		id: 'metal360',
		unit: t('unit_ml'),
		title: t('product_item_3'),
		amount: '200',
		imgUrl: getPublicUrl('img/products/3.png'),
		price: 85,
		priceSign: '₪',
		description: t('product_item_3_description'),
	},
	{
		id: 'wax',
		unit: t('unit_ml'),
		title: t('product_item_4'),
		amount: '',
		imgUrl: getPublicUrl('img/products/4.png'),
		price: 28,
		priceSign: '₪',
		description: t('product_item_4_description'),
	},
])

const { containerRef, fadeClasses } = useScrollFade()
</script>

<template>
	<div class="candle-product-list-container">
		<ul class="candle-product-list" ref="containerRef" :class="fadeClasses">
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
	overflow-y: hidden;
}

.fade-left {
	&:before {
		@media (max-width: 1200px) {
			@include fade-overlay-left($width: 4%);
		}

		@include mobile {
			content: none;
		}
	}
}

.fade-right {
	&:after {
		@media (max-width: 1200px) {
			@include fade-overlay-right($width: 4%);
		}
		right: 0;

		@include mobile {
			content: none;
		}
	}
}

.candle-product-list {
	display: flex;
	gap: 16px;
	overflow-x: auto;

	display: grid;
	grid-template-columns: repeat(4, 1fr);

	@include mobile {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(2, 320px);
	}
}
</style>

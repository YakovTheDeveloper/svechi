<script setup lang="ts">
import VButton from '@/shared/ui/v-button/VButton.vue'
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue'
import CandleProductList from './CandleProductList/CandleProductList.vue'
import { useI18n } from 'vue-i18n'
import { contact } from '@/shared/utils/contact'
const { locale } = useI18n()
</script>

<template>
	<div class="container padding" id="candle-products">
		<section class="candle-products">
			<div class="candle-products__description">
				<h1 class="title">
					<template v-if="locale === 'ru'">
						Свечи, согревающие <VSpan variant="fill">сердца</VSpan>
					</template>
					<template v-else-if="locale === 'he'">
						נרות המחממים את <VSpan variant="fill">הלבבות</VSpan>
					</template>
					<template v-else>
						Candles that Warm <VSpan variant="fill">Hearts</VSpan>
					</template>
				</h1>
				<VButton class="candle-products__contact-btn" @click="contact">
					{{ $t('contact_write_us') }}
				</VButton>
			</div>
			<CandleProductList ref="containerRef" />
			<VButton class="candle-products__contact-btn_mobile" @click="contact">
				{{ $t('contact_write_us') }}
			</VButton>
		</section>
	</div>
</template>

<style lang="scss" scoped>
.candle-products {
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 32px;
	position: relative;
	z-index: 1;

	&::before {
		width: 1755px;
		height: 554px;
		content: '';
		position: absolute;
		z-index: -1;
		bottom: 0;
		right: 0;
		left: 0;
		top: 0;
		// transform: translateY(-57%);
		// --original-transform: translateY(-57%);
		background: url('@/app/assets/decorations/products/1.svg') no-repeat;
		background-position: 89% 54%;
		background-size: contain;

		@include rtl-and-translateY(-57%);

		@include tablet {
			display: none;
		}
	}

	@include tablet {
		position: relative;
	}

	@media (max-width: 1000px) {
		gap: 16px;
		grid-template-columns: 1fr;
	}

	@include mobile {
		&::after {
			display: none;
		}
	}

	@include mobile {
		gap: 16px;
		grid-template-columns: 1fr;
	}

	&__contact-btn {
		display: flex;
		margin-top: auto;

		@media (max-width: 1000px) {
			display: none;
		}

		&_mobile {
			display: none;

			@media (max-width: 1000px) {
				display: inline-block;
				width: fit-content;
			}
		}
	}

	&__description {
		max-width: 424px;
		display: flex;
		flex-direction: column;
		align-items: start;

		@include laptop {
			max-width: 290px;
		}

		@media (max-width: 1000px) {
			max-width: 100%;
		}
	}
}
</style>

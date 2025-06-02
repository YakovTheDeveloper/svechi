<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue'
import VButton from '@/shared/ui/v-button/VButton.vue'
import Navbar from '../../Navbar.vue'
import HeroTitle from '../../HeroTitle.vue'
import OurCandles from '@/widgets/ourCandles/ui/OurCandles.vue'
import HeaderActions from './HeaderActions.vue'
import MenuMobile from './menu-mobile/MenuMobile.vue'
</script>

<template>
	<header class="container header" id="header">
		<div class="header__content padding-left">
			<Navbar class="header__navbar" />
			<HeroTitle class="header__title" />
			<OurCandles />
		</div>
		<HeaderActions />
		<MenuMobile />
	</header>
</template>

<style lang="scss" scoped>
// @import "styles/breakpoint.scss";

.header {
	display: flex;
	gap: 44px;
	display: grid;
	grid-template-columns: 47% 1fr;
	overflow: hidden;

	// @media (max-width: 1280px) {
	//     gap: 24px;
	// }

	@media (max-width: 1200px) {
		// flex-direction: column-reverse;
		gap: 32px;
		grid-template-columns: 1fr;
	}

	// @include tablet {
	//     flex-direction: column-reverse;
	// }

	&__content {
		display: flex;
		gap: 70px;
		flex-grow: 1;
		flex-direction: column;
		// justify-content: space-between;

		@media (max-width: 1200px) {
			padding-right: 64px;

			@include rtl {
				padding-left: 64px;
			}

			order: 1;
		}

		@include laptop {
			gap: 52px;
		}

		@include tablet {
			padding-right: var(--padding-container-tablet);

			@include rtl {
				padding-left: var(--padding-container-tablet);
			}
		}

		@include mobile {
			padding-right: var(--padding-container-mobile);

			@include rtl {
				padding-left: var(--padding-container-mobile);
			}
		}
	}

	&__navbar {
		@media (max-width: 1600px) {
			> :first-child {
				flex-wrap: nowrap;
				gap: 16px 0;
				font-size: 20px;
				justify-content: space-between;
				padding-top: 25px;
			}
		}

		@include header-breakpoint {
			display: none;
		}
	}

	&__title {
		@media (max-width: 1200px) {
			display: none;
		}
	}
}
</style>

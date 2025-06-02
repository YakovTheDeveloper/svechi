<script setup lang="ts">
import VIcon from '@/shared/ui/v-icon/VIcon.vue'
import { ref, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from './ui/Navbar.vue';
import HeroTitle from './ui/HeroTitle.vue';
import OurCandles from '@/widgets/ourCandles/ui/OurCandles.vue';
import Header from './ui/Header/ui/Header.vue';
import { UniqueDesign } from './ui/UniqueDesign';
import CandleProducts from './ui/products/ui/CandleProducts.vue';
import { CustomerProfit } from './ui/customer-profits';
import { AboutUs } from './ui/about-us';
import OurAdvantages from './ui/our-advantages/ui/OurAdvantages.vue';
import Footer from '@/widgets/footer/ui/Footer.vue';
import Gallery from './ui/gallery/ui/Gallery.vue';
import PopularAroma from './ui/popular-aroma/ui/PopularAroma.vue';
import VModal from '@/shared/ui/v-modal/ui/VModal.vue';
import ModalContentProduct from './ui/modals/ModalContentProduct.vue';
import { storeToRefs } from 'pinia';
import { useStore, useWelcomeStore } from '@/shared/stores/store';
import ToTheBeginnigButton from './ui/to-the-beginning-button/ToTheBeginnigButton.vue';
import WelcomeModalContent from './ui/modals/welcome-modal/WelcomeModalContent.vue';

// const store = useStore()
const store = storeToRefs(useStore())
const welcomeStore = storeToRefs(useWelcomeStore())
const { clearModalContent } = useStore()

// watchEffect(() => {
// 	console.log(`output->showModal`, store.showModal)
// })

watch(store.showModal, (isShow) => !isShow && clearModalContent())

</script>

<template>
	<Header class="section-margin-bottom" />
	<UniqueDesign class="section-margin-bottom" />
	<CandleProducts class="section-margin-bottom" />
	<CustomerProfit class="section-margin-bottom" />
	<Gallery class="section-margin-bottom" />
	<AboutUs class="section-margin-bottom" />
	<OurAdvantages class="section-margin-bottom" />
	<PopularAroma class="section-margin-bottom" />
	<Footer />
	<VModal v-model="store.showModal.value">
		<ModalContentProduct />
	</VModal>
	<ToTheBeginnigButton />
	<VModal v-model="welcomeStore.show.value" class="modals-welcome">
		<WelcomeModalContent />
	</VModal>
</template>

<style lang="scss">
#gallery {
	@include tablet {
		margin-bottom: 0;
	}
}
</style>

<style lang="scss" scoped>
// .home {
// 	height: 100vh;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	position: relative;
// }

.hidden {
	opacity: 0;
}
</style>

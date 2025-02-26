<script setup lang="ts">
import VIcon from '@/shared/ui/v-icon/VIcon.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from './ui/Navbar.vue';
import HeroTitle from './ui/HeroTitle.vue';
import OurCandles from '@/widgets/ourCandles/ui/OurCandles.vue';


const router = useRouter()

</script>

<template>
	<header>
		<Navbar />
		<HeroTitle/>
		<OurCandles/>
	</header>
</template>

<style lang="scss" scoped>
.home {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	gap: 80px;
}

.hidden {
	opacity: 0;
}
</style>

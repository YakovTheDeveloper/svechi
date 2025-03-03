<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import VButton from '@/shared/ui/v-button/VButton.vue';
import Navbar from '../../Navbar.vue';
import HeroTitle from '../../HeroTitle.vue';
import OurCandles from '@/widgets/ourCandles/ui/OurCandles.vue';
import HeaderActions from './HeaderActions.vue';

</script>

<template>
    <header class="container header">
        <div class="header__content padding-left">
            <Navbar class="header__navbar" />
            <HeroTitle class="header__title" />
            <OurCandles />
        </div>
        <HeaderActions />
    </header>
</template>

<style lang="scss" scoped>
// @import "styles/breakpoint.scss";

.header {
    display: flex;
    gap: 32px;

    @include tablet {
        flex-direction: column-reverse;
    }

    &__content {
        display: flex;
        gap: 80px;
        flex-direction: column;
    }

    &__navbar {
        @include tablet {
            display: none;
        }
    }

    &__title {
        @include tablet {
            display: none;
        }
    }
}
</style>

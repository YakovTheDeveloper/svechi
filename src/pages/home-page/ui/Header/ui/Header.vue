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

    // @media (max-width: 1400px) {
    //     flex-direction: column-reverse;
    // }

    @include tablet {
        flex-direction: column-reverse;
    }

    &__content {
        display: flex;
        gap: 70px;
        flex-grow: 1;
        flex-direction: column;

        @include tablet {
            padding-right: var(--padding-container-tablet);
        }

        @include mobile {
            padding-right: var(--padding-container-mobile);
        }
    }

    &__navbar {
        @include tablet {
            display: none;
        }

        // @media (max-width: 1400px) {
        //               display: none;
        // }
    }

    &__title {
        @include tablet {
            display: none;
        }
    }
}
</style>

<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import VButton from '@/shared/ui/v-button/VButton.vue';
import Navbar from '../../Navbar.vue';
import HeroTitle from '../../HeroTitle.vue';
import OurCandles from '@/widgets/ourCandles/ui/OurCandles.vue';
import HeaderActions from './HeaderActions.vue';
import MenuMobile from './menu-mobile/MenuMobile.vue';

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
    gap: 64px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 1200px) {
        // flex-direction: column-reverse;
        gap: 32px;
        grid-template-columns: 1fr
    }

    // @include tablet {
    //     flex-direction: column-reverse;
    // }

    &__content {
        display: flex;
        gap: 70px;
        flex-grow: 1;
        flex-direction: column;

        @media (max-width: 1200px) {
            order: 1;
        }

        @include tablet {
            padding-right: var(--padding-container-tablet);
        }

        @include mobile {
            padding-right: var(--padding-container-mobile);
        }
    }

    &__navbar {
        @include header-breakpoint {
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

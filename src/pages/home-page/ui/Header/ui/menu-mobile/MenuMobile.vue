<template>
    <div class="menu-mobile" v-show="show">
        <button class="menu-mobile-close-btn" @click="closeModal">
            <img :src="crossIcon" alt="">
        </button>
        <Navbar class="menu-mobile-navbar" v-on:after-nav="closeModal" />
        <Teleport to="body">
            <transition name="modal-overlay">
                <VOverlay v-show="show" />
            </transition>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { VOverlay } from '@/shared/ui/v-overlay';
import Navbar from '../../../Navbar.vue';
import crossIcon from '@/app/assets/icons/cross.svg'
import { useMobileMenuStore } from '@/shared/stores/store';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
const store = storeToRefs(useMobileMenuStore())
const { closeModal } = useMobileMenuStore()

const show = computed(() => store.show.value)
</script>

<style scoped lang="scss">
.menu-mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 80px 32px 48px;
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
    background-color: var(--bg);
    z-index: 6;

    &-close-btn {
        margin-bottom: 48px;
        padding: 16px;
        width: 64px;
        height: 64px;


        img{
            width: 100%;
            height: 100%;
        }
    }

    &-navbar {
        margin: 0 auto;
        max-width: 590px;

        >* {
            flex-direction: column;
            text-align: center;
            padding: 0;
        }
    }

    @include mobile {
        padding: 16px;
        border-bottom-left-radius: 32px;
        border-bottom-right-radius: 32px;

        &-close-btn {
            padding: 9px;
            height: 36px;
            width: 36px;
            margin-bottom: 25px;
        }
    }
}
</style>
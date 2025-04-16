<template>
    <button class="to-the-beginning-button" @click="onClick">
        <IconArrowUp />
    </button>
</template>

<script setup lang="ts">
import IconArrowRight from '@/shared/icons/IconArrowRight.vue';
import IconArrowUp from '@/shared/icons/IconArrowUp.vue';
import { scrollToId } from '@/shared/utils/scrollToId';

const onClick = () => {
    scrollToId('header')
}
</script>

<style scoped lang="scss">
.to-the-beginning-button {
    height: 72px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: fixed;
    bottom: 30px;
    right: var(--padding-container);
    background-color: var(--red-accent);
    z-index: 2;
    opacity: 0.7;

    @include tablet {
        right: var(--padding-container-tablet);
        opacity: 0.3;
    }

    @include mobile {
        right: var(--padding-container-mobile);
        height: 48px;
        opacity: 0.3;
    }
}
</style>
<template>
    <button class="to-the-beginning-button" @click="onClick">
        <IconArrowRight />
    </button>
</template>

<script setup lang="ts">
import IconArrowRight from '@/shared/icons/IconArrowRight.vue';
import { scrollToId } from '@/shared/utils/scrollToId';

const onClick = () => {
    scrollToId('header')
}
</script>

<style scoped>
.to-the-beginning-button {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    position: fixed;
    bottom: 30px;
    right: 30px;
    color: rgb(92, 204, 40);
    transform: rotate(-90deg) scale(1.3);
    z-index: 2;
}
</style>
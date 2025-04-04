<template>
    <button class="to-the-beginning-button" @click="onClick">

    </button>
</template>

<script setup lang="ts">
import { scrollToId } from '@/shared/utils/scrollToId';

const onClick = () => {
    scrollToId('header')
}
</script>

<style scoped>
.to-the-beginning-button {
    height: 40px;
    width: 40px;
    background-color: green;
    border-radius: 50%;
    position: fixed;
    bottom: 10px;
    right: 10px;
}
</style>
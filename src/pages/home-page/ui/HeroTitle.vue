<script setup lang="ts">
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import { useI18n } from 'vue-i18n';


const { locale } = useI18n()
</script>

<!-- Text should look like:
Свечи ручной работы 
с уникальными
ароматами
Best practice way to do specific wraps in landing -->

<template>
    <h1 class='title italic'>
        <template v-if="locale === 'ru'">
            <span class='line-break'>Свечи <VSpan variant="fill">ручной</VSpan> работы</span>
            <span class='line-break'> с <VSpan variant="underlined">уникальными </VSpan> </span>
            <span class='line-break'>ароматами</span>
        </template>
        <template v-else-if="locale === 'he'">
            <span class='line-break'>נרות עבודת <VSpan variant="fill">יד</VSpan> בעלי ניחוחים </span>
            <span class='line-break'><VSpan variant="underlined">ייחודים </VSpan></span>
        </template>
        <template v-else>
            <span class='line-break'>
                <VSpan variant="fill">Handmade</VSpan> candles
            </span>
            <span class='line-break'> with <VSpan variant="underlined">unique </VSpan> </span>
            <span class='line-break'>scents</span>
        </template>
    </h1>
</template>

<style lang="scss" scoped>
.title {
    color: var(--black-primary);
    max-width: 728px;
}

.line-break {
    display: block;
}
</style>

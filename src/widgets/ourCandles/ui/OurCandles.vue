<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import OurCandlesItem from './OurCandlesItem.vue';

</script>

<template>
    <section class="ourCandles">
        <div class="ourCandles__heading">
            <h2 class="subtitle italic">Наши свечи</h2>
            <VBadge variant="primary">Популярное</VBadge>
        </div>
        <ul class="ourCandles__list">
            <OurCandlesItem />
            <OurCandlesItem />
        </ul>
        <p class="underline text bold">Посмотреть все</p>
    </section>
</template>

<style lang="scss" scoped>
.subtitle {
    color: var(--black-primary);
}

.ourCandles {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @include mobile{
        gap: 16px;
    }

    &__heading {
        display: flex;
        gap: 16px;
        align-items: flex-end;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
</style>

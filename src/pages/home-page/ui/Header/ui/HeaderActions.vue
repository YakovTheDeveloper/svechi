<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import VButton from '@/shared/ui/v-button/VButton.vue';

</script>

<template>
    <div class="header-actions">
        <div class="header-actions__header">
            <div class="header-actions__header-side">
                <VButton variant="primary">Оформить заказ</VButton>
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-actions {
    padding: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    border-bottom-left-radius: 30px;

    background: url('img/header-bg.png') center no-repeat;
    background-size: cover;

    &__header {
        display: flex;
    }

    &__header-side{
        margin-left: auto;
    }
}
</style>

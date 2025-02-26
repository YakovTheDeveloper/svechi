<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import VButton from '@/shared/ui/v-button/VButton.vue';

</script>

<template>
    <div class="header-actions">
        <div>
            <VButton variant="primary">Оформить заказ</VButton>
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
}
</style>

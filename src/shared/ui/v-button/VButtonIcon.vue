<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ label?: string, reverse?: 'default' | 'rtl-only', }>()

const buttonEl = ref<HTMLButtonElement | null>(null)
defineExpose({
    getEl: () => buttonEl.value
})
</script>

<template>
    <button ref="buttonEl" class="btn-container">
        <p v-if="props.label" class="text bold btn-label">{{ props.label }}</p>
        <div :class="['btn-icon', reverse === 'default' ? 'btn-icon_reverse' : 'btn-icon_reverse-rtl-only']">
            <slot></slot>
        </div>
    </button>
</template>

<style lang="scss" scoped>
.btn-container {
    display: flex;
    align-items: center;
    gap: 16px;

    &:disabled .btn-icon {
        background-color: rgba(254, 227, 223, 1);
        cursor: not-allowed;
    }

    @include mobile {
        gap: 6px;
    }

}

.btn-icon {
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--red-accent);
    border-radius: 50%;
    flex-shrink: 0;

    @include mobile {
        height: 28px;
        width: 28px;
        padding: 11px;
    }

    svg {
        width: 12px;
        height: 20px;
    }

    &_reverse {
        -moz-transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
        -o-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
        transform: scale(-1, 1);
    }

    html[dir='rtl'] &_reverse-rtl-only {
        -moz-transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
        -o-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
        transform: scale(-1, 1);
    }

}
</style>

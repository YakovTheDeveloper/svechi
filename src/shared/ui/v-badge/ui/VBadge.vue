<script setup lang="ts">
const props = withDefaults(defineProps<{
    variant: 'primary' | 'secondary'
}>(), {
    variant: 'primary'
})

</script>

<template>
    <span :class="['badge', `badge_${props.variant}`]">
        <slot></slot>
    </span>
</template>

<style lang="scss" scoped>
.badge {
    height: 36px;
    font-size: 18px;
    line-height: 23px;
    padding: 6px 16px;
    border-radius: 28px;
    font-weight: 700;
    width: fit-content;
    border: 2px solid transparent;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;

    @include mobile {
        font-size: 10px;  
        height: fit-content;
        padding: 4px 6px;
        line-height: normal;
        border-width: 1px;
    }

    &_primary {
        color: var(--white);
        background-color: var(--green-accent);
    }

    &_secondary {
        background-color: transparent;
        font-weight: 400;
        border-color: var(--black-third);
        color: var(--black-secondary);
    }
}
</style>

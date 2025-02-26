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
    padding: 6px 16px;
    border-radius: 28px;
    font-weight: 700;
    width: fit-content;
    border: 2px solid transparent;

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

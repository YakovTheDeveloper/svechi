<script setup lang="ts">
const props = withDefaults(defineProps<{
    variant: 'fill' | 'underlined'
}>(), {
    variant: 'fill'
})


</script>

<template>
    <span :class="['span-text', props.variant]">
        <slot></slot>
    </span>
</template>

<style lang="scss" scoped>
.span-text {
    position: relative;
    z-index: 0;
    display: inline;
    white-space: nowrap;
}

.fill {
    color: var(--white);

    &:after {
        top: 0;
        left: -3%;
        transform: rotate(-2deg);
        position: absolute;
        content: '';
        background-color: red;
        width: 105%;
        height: 105%;
        z-index: -1;
    }
}

.underlined {
    overflow: hidden;

    &:after {
        content: '';
        position: absolute;
        bottom: -17%;
        left: -3%;
        height: 20px;
        width: 110%;
        background: url('curved-line.svg') center no-repeat;

        @include mobile {
            background-image: url('@/app/assets/decorations/text-span/curved-line-mobile.svg');
            bottom: -10px;
        }
    }
}
</style>

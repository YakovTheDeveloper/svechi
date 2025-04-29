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
        left: -9px;
        transform: rotate(-2.4deg);
        position: absolute;
        content: '';
        background-color: var(--red-accent);
        width: 106%;
        height: 105%;
        z-index: -1;

        @include mobile {
            left: -4px;
        }
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
        background: url('@/app/assets/decorations/text-span/curved-line.svg') center no-repeat;

        @media (max-width: 1441px) {
            bottom: -25%;
        }

        @include mobile {
            background-image: url('@/app/assets/decorations/text-span/curved-line-mobile.svg');
            bottom: -10px;
        }
    }
}
</style>

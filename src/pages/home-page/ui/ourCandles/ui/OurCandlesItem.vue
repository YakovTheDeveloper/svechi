<script setup lang="ts">
import { VBadge } from '@/shared/ui/v-badge';
import { VButton } from '@/shared/ui/v-button';
import VButtonIcon from '@/shared/ui/v-button/VButtonIcon.vue';


</script>

<template>
    <li class="candleItem">
        <div class="candleItem__image-container">
            <img src="" alt="">
        </div>
        <p class="text candleItem__text">Свечи в стеклянной банке объемом 360 мл</p>
        <VBadge variant="secondary">36 ароматов</VBadge>
        <VButtonIcon />
    </li>
</template>

<style lang="scss" scoped>
.candleItem {
    // display: grid;
    // gap: 32px;
    // padding: 12px 0;
    // align-items: center;
    // justify-content: space-between;
    // grid-template-columns: auto 1fr auto auto;
    // border-bottom: 1px solid var(--black-third);

    // &__image-container {
    //     width: 96px;
    //     height: 96px;
    //     border-radius: 24px;
    //     overflow: hidden;
    //     background-color: var(--black-third);

    //     @include mobile{
    //         height: 36px;
    //         width: 36px;
    //     }

    //     img {
    //         max-width: 100%;
    //     }
    // }

    // &__text {
    //     font-weight: 500;
    //     color: var(--black-primary);
    // }

}
</style>

<script setup lang="ts">

</script>
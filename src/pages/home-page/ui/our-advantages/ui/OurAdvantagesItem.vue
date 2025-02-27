<script setup lang="ts">
import IconWithBackground from '@/shared/ui/v-icon-with-background/IconWithBackground.vue';



const props = defineProps<{
    imgUrl: string
    title: string
    description: string
}>()

</script>

<template>
    <li class="our-advantages-item">
        <IconWithBackground :src="props.imgUrl" :alt="props.title" />
        <div class="our-advantages-item__text-content">
            <p class="bold our-advantages-item__title">
                {{ props.title }}
            </p>
            <p class="our-advantages-item__text text-s">
                {{ props.description }}
            </p>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.our-advantages-item {
    width: 533px;
    height: 400px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    border-radius: 64px;
    background-color: var(--bg);


    &__text-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
        text-align: center;
    }

    &__title {
        color: var(--black-primary);
        font-size: 36px;
    }
}
</style>

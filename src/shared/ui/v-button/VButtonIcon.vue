<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ label?: string, reverse?: boolean }>()

const buttonEl = ref<HTMLButtonElement | null>(null)
defineExpose({
    getEl: () => buttonEl.value
})
</script>

<template>
    <button ref="buttonEl" class="btn-container">
        <p v-if="props.label" class="text bold btn-label">{{ props.label }}</p>
        <div :class="['btn-icon', reverse && 'btn-icon_reverse']">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.00002 19.3334C1.73519 19.3349 1.4759 19.2576 1.25521 19.1112C1.03451 18.9648 0.862418 18.7559 0.760862 18.5114C0.659306 18.2668 0.632891 17.9975 0.684984 17.7378C0.737077 17.4781 0.865318 17.2399 1.05336 17.0534L8.12002 10L1.05336 2.94671C0.802285 2.69564 0.661234 2.35511 0.661234 2.00004C0.661234 1.82423 0.695863 1.65014 0.763143 1.48771C0.830424 1.32528 0.929038 1.1777 1.05336 1.05338C1.17767 0.929059 1.32526 0.830445 1.48769 0.763165C1.65012 0.695884 1.82421 0.661255 2.00002 0.661255C2.35509 0.661255 2.69562 0.802306 2.94669 1.05338L10.9467 9.05338C11.195 9.30319 11.3344 9.64113 11.3344 9.99338C11.3344 10.3456 11.195 10.6836 10.9467 10.9334L2.94669 18.9334C2.8232 19.0594 2.67594 19.1596 2.51344 19.2282C2.35094 19.2969 2.17643 19.3326 2.00002 19.3334Z"
                    fill="white" />
            </svg>
        </div>
    </button>
</template>

<style lang="scss" scoped>
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
    }

    svg {
        width: 12px;
        height: 20px;

        @include mobile {
            height: 9px;
            width: 5px;
        }
    }

    &_reverse {
        -moz-transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
        -o-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
        transform: scale(-1, 1);
    }
}

.btn-container {
    display: flex;
    align-items: center;
    gap: 16px;

    &:disabled .btn-icon {
        background-color: rgba(254, 227, 223, 1);
        cursor: not-allowed;
    }

    @include mobile{
		gap: 6px;
	}

}
</style>

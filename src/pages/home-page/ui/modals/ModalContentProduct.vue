<script setup lang="ts">

import { ref } from 'vue'
import ModalContentProductDescription from './ModalContentProductDescription.vue'
import { useStore } from '@/shared/stores/store'
import { getPublicUrl } from '@/shared/utils/getPublicUrl'
const data = [
    { imgUrl: getPublicUrl('img/product-desc/1.jpg'), id: 1 },
    { imgUrl: getPublicUrl('img/product-desc/2.jpg'), id: 2 },
    { imgUrl: getPublicUrl('img/product-desc/3.jpg'), id: 3 },
    { imgUrl: getPublicUrl('img/product-desc/4.jpg'), id: 4 },
]

const currentImage = ref(data[0].imgUrl)
const setCurrentImage = (src: string) => currentImage.value = src


</script>


<template>
    <div class="modal-product">
        <div class="modal-product__gallery-part">
            <div class="modal-product__thumbnails">
                <div @click="setCurrentImage(imgUrl)" v-for="({ id, imgUrl }) in data" :class="[
                    'modal-product__thumbnails-item',
                    imgUrl === currentImage && 'modal-product__thumbnails-item_active',
                ]" :key="id">
                    <img :src="imgUrl" alt="product" draggable="false">
                </div>
            </div>
            <div class="modal-product__current-image">
                <img :src="currentImage" alt="">
            </div>
        </div>
        <ModalContentProductDescription />
    </div>
</template>

<style lang="scss" scoped>
.modal-product {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr 1fr;

    @include tablet {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr;

        display: flex;
        flex-direction: column;

        height: 100%;
        // justify-content: space-between;
        gap: 48px;
    }

    @include mobile {
        gap: 16px;
    }

    &__gallery-part {
        display: flex;
        justify-content: start;
        gap: 32px;

        @media (max-width: 1740px) {
            flex-direction: column-reverse;
        }

        @include tablet {
            flex-direction: column;
        }

        @include mobile{
            gap: 8px;
        }
    }

    &__thumbnails {
        display: flex;
        flex-direction: column;
        gap: 16px;

        @media (max-width: 1740px) {
            flex-direction: row;
        }

        @include tablet {
            gap: 24px;
        }

        @include mobile {
            gap: 8px;
        }

        &-item {
            max-width: 128px;
            aspect-ratio: 1;
            border-radius: 16px;
            overflow: hidden;

            &_active {
                outline: 3px solid var(--black-secondary);
                outline-offset: -3px;
            }

            img {
                max-width: 100%;
                user-select: none;
            }

            @include mobile {
                width: 48px;
            }
        }

    }

    &__current-image {
        max-width: 744px;
        aspect-ratio: 1;
        // flex-shrink: 0;
        flex-grow: 1;
        overflow: hidden;
        border-radius: 32px;

        @media (max-width: 1740px) {
            flex-grow: 0;
        }

        @include tablet {
            order: -1;
            max-width: 100%;
        }

        img {
            width: 100%;
        }
    }
}
</style>

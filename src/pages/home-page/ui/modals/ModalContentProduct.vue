<script setup lang="ts">

import { ref } from 'vue'
import ModalContentProductDescription from './ModalContentProductDescription.vue'
const data = [
    { imgUrl: '/img/product-desc/1.jpg', id: 1 },
    { imgUrl: '/img/product-desc/2.jpg', id: 2 },
    { imgUrl: '/img/product-desc/3.jpg', id: 3 },
    { imgUrl: '/img/product-desc/4.jpg', id: 4 },
]

const currentImage = ref(data[0].imgUrl)
const setCurrentImage = (src: string) => currentImage.value = src

</script>


<template>
    <div class="modal-product">
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
        <ModalContentProductDescription />



    </div>
</template>

<style lang="scss" scoped>
.modal-product {
    display: flex;
    gap: 32px;

    &__thumbnails {
        display: flex;
        flex-direction: column;
        gap: 16px;

        &-item {
            width: 128px;
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
        }

    }

    &__current-image {
        width: 744px;
        flex-shrink: 0;
        overflow: hidden;
        border-radius: 32px;

        img {
            width: 100%;
        }
    }
}
</style>

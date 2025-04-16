<template>
    <div class="language-selector">
        <div class="language-selector-languages">
            <div @click="changeLanguage(lang.value)" :class="['language-selector-item', lang.value === locale && 'language-selector-item_active']"
                v-for="lang in languages" :key="lang.id">
                <div class="language-icon">
                    <img :src="lang.imgUrl" :alt="lang.value" />
                </div>
                {{ lang.display }}
            </div>
        </div>
    </div>
</template>

<script setup>
import icon1 from '@/app/assets/icons/language/ru.svg'
import icon2 from '@/app/assets/icons/language/isr.svg'
import icon3 from '@/app/assets/icons/language/en.svg'
import { useI18n } from 'vue-i18n'
import { useWelcomeStore } from '@/shared/stores/store'

const languages = [
    { imgUrl: icon1, id: 1, value: 'ru', display: 'Русский' },
    { imgUrl: icon2, id: 2, value: 'he', display: 'עברית' },
    { imgUrl: icon3, id: 3, value: 'en', display: 'English' },
]

const { closeModal } = useWelcomeStore()
const { locale } = useI18n()

const changeLanguage = (lang) => {
    locale.value = lang
    closeModal()
}
</script>

<style lang="scss" scoped>
.language-selector {
    display: flex;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    padding: 0 20px;

    @media (max-width: 900px) {
        padding: 0;
        justify-content: start;
    }

    &-title {
        font-size: 48px;
        margin-bottom: 64px;
        text-align: center;


        @media (max-width: 900px) {
            font-size: 24px;
            margin-top: 16px;
            margin-bottom: 32px;
        }

    }

    &-item {
        width: 216px;
        height: 216px;
        padding: 48px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 24px;
        background-color: var(--bg-2);
        border-radius: 48px;
        cursor: pointer;

        /* Active state */
        &_active {
            outline: 4px solid var(--red-accent);
            outline-offset: -3px;
            background-color: transparent;
        }

        /* Hover effect only if not active */
        &:not(&_active):hover {
            outline: 1px solid #000000;
        }


        @media (max-width: 900px) {
            width: 100%;
            font-size: 16px;
            height: auto;
            padding: 24px 0;
            justify-content: center;
            border-radius: 24px;
        }
    }

    &-languages {
        display: flex;
        justify-content: center;
        gap: 32px;
        padding: 2px;


        @media (max-width: 900px) {
            flex-grow: 1;
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-columns: 1fr;
            gap: 16px;
        }
    }
}

.language-icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    transition: border-color 0.3s;

    @media (max-width: 900px) {
        width: 48px;
        height: 48px;
    }
}

.language-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
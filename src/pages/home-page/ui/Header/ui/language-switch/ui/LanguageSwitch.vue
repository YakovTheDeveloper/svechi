<script setup lang="ts">
import { ref, computed } from 'vue'

import icon1 from '@/app/assets/icons/language/ru.svg'
import icon2 from '@/app/assets/icons/language/isr.svg'
import icon3 from '@/app/assets/icons/language/en.svg'

const languages = [
    { imgUrl: icon1, id: 1, value: 'ru' },
    { imgUrl: icon2, id: 2, value: 'isr' },
    { imgUrl: icon3, id: 3, value: 'en' },
]

const currentLanguage = ref(languages[0])

const filteredLanguages = computed(() =>
    languages.filter(lang => lang.id !== currentLanguage.value.id)
)

const isDropdownOpen = ref(false)

function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value
}

function selectLanguage(lang: typeof languages[number]) {
    currentLanguage.value = lang
    isDropdownOpen.value = false
}

const headingClasses = computed(() => ([
    'language-switch__heading', isDropdownOpen.value && 'language-switch__heading_open'
]))
</script>

<template>
    <div class="language-switch">
        <div :class="headingClasses" @click="toggleDropdown">
            <img :src="currentLanguage.imgUrl" :alt="currentLanguage.value">
        </div>
        <div v-if="isDropdownOpen" class="language-switch__dropdown">
            <div v-for="(language, index) in filteredLanguages" :key="language.id" class="language-switch__item"
                @click="selectLanguage(language)">
                <img :src="language.imgUrl" :alt="language.value">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.language-switch {
    --border-radius: 32px;

    position: relative;
    display: inline-block;

    &__heading {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border-radius: var(--border-radius);
        cursor: pointer;
        background-color: white;

        &_open {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;

            img{
                outline: 2px solid #000;
                outline-offset: -2px;
            }
        }

        img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
    }

    &__dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: white;
        border-bottom-right-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
        overflow: hidden;
        z-index: 10;
        min-width: 64px;
        display: flex;
        flex-direction: column;
    }

    &__item {
        padding: 8px;
        height: 58px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: white;
        transition: background-color 0.2s;

        &:hover {
            background-color: #f0f0f0;
        }

        img {
            width: 32px;
            height: 32px;
        }

    }
}
</style>

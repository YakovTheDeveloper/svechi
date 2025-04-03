<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function scrollToSection(id: string) {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <nav>
        <ul class="navbar-list">
            <li class="navbar-list__item navbar-list__item_active">
                <a>{{ $t('nav_main') }}</a>
            </li>
            <li class="navbar-list__item">
                <a @click.prevent="scrollToSection('footer')">{{ $t('nav_contacts') }}</a>
            </li>
            <li class="navbar-list__item">
                <a @click.prevent="scrollToSection('about-us')">{{ $t('nav_about_us') }}</a>
            </li>
            <li class="navbar-list__item">
                <a>{{ $t('nav_consulting') }}</a>
            </li>
            <li class="navbar-list__item">
                <a>{{ $t('nav_promotions') }}</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.navbar-list {
    display: flex;
    gap: 16px;
    padding-top: 68px;
    flex-wrap: wrap;


    &__item {
        color: rgba(79, 79, 79, 1);
        padding: 16px 24px;
        border-radius: 32px;

        &_active {
            background-color: var(--red-accent);
            font-weight: 700;
            color: var(--white);
        }
    }
}
</style>

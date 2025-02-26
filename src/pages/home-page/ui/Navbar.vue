<script setup lang="ts">
import VIcon from '@/shared/ui/v-icon/VIcon.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
    <nav>
        <ul class="navbar-list">
            <li class="navbar-list__item navbar-list__item_active">Главная</li>
            <li class="navbar-list__item">Контакты</li>
            <li class="navbar-list__item">О нас</li>
            <li class="navbar-list__item">Консультация</li>
            <li class="navbar-list__item">Акции</li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.navbar-list {
    display: flex;
    gap: 16px;


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

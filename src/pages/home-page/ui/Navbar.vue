<script setup lang="ts">
import { contact } from '@/shared/utils/contact';
import { scrollToId } from '@/shared/utils/scrollToId';
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
    onAfterNav?: () => void
}>()


const toAboutUs = () => {
    const isMobileOrTablet = window.innerWidth < 1000;
    scrollToId('about-us', isMobileOrTablet ? 0 : undefined);
    props.onAfterNav?.();
}

const toPromotions = () => {
    const isMobileOrTablet = window.innerWidth < 1000;
    scrollToId('promotions', isMobileOrTablet ? 40 : undefined);
    props.onAfterNav?.();
}

</script>

<template>
    <nav>
        <ul class="navbar-list">
            <li class="navbar-list__item navbar-list__item_active">
                <a>{{ $t('nav_main') }}</a>
            </li>
            <li class="navbar-list__item">
                <a @click.prevent="scrollToId('footer'); props.onAfterNav?.()">{{ $t('nav_contacts') }}</a>
            </li>
            <li class="navbar-list__item">
                <a @click.prevent="toAboutUs">{{ $t('nav_about_us') }}</a>
            </li>
            <li class="navbar-list__item">
                <a @click.prevent="contact(); props.onAfterNav?.()">{{ $t('nav_consulting') }}</a>
            </li>
            <li class="navbar-list__item">
                <a @click.prevent="toPromotions">{{ $t('nav_promotions') }}</a>
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
    line-height: normal;

    @include mobile {
        font-size: 14px;
    }


    &__item {
        color: rgba(79, 79, 79, 1);
        padding: 16px;
        border-radius: 32px;
        white-space: nowrap;

        @include mobile {
            padding: 10px;
        }

        &_active {
            background-color: var(--red-accent);
            font-weight: 700;
            color: var(--white);
        }
    }
}
</style>

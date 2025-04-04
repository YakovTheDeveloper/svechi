<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import VButton from '@/shared/ui/v-button/VButton.vue';
import LanguageSwitch from './language-switch';
import adminIcon from '@/app/assets/icons/admin.jpg'
import phoneIcon from '@/app/assets/icons/contact-phone.svg'
import fbIcon from '@/app/assets/icons/fb-2.svg'
import instIcon from '@/app/assets/icons/inst-2.svg'
import menuIcon from '@/app/assets/icons/burger.svg'
import HeroTitle from '../../HeroTitle.vue';
import { messages } from '@/app/assets/locales';
import { contact } from '@/shared/utils/contact';
import { useMobileMenuStore } from '@/shared/stores/store';
import { SocialLinks } from '@/shared/constants/socials';

const onWriteUs = () => {
    contact()
}

const { openModal } = useMobileMenuStore()

</script>

<template>
    <div class="header-actions">
        <div class="header-actions__header">
            <button class="header-actions__burger" @click="openModal">
                <img :src=menuIcon alt="menu">
            </button>
            <div class="header-actions__header-side">
                <!-- Оформить заказ -->
                <VButton variant="primary" @click="onWriteUs">
                    {{ $t('contact_order') }}
                </VButton>
                <LanguageSwitch />
            </div>
        </div>
        <HeroTitle class="header-actions__title-center" />
        <div class="header-actions__contacts">
            <component is="button" class="header-actions__contacts-item" @click="onWriteUs">
                <div class="header-actions__contacts-item-icons" :style="{ width: '100px' }">
                    <img :src="adminIcon" alt="contact-icon">
                    <img :src="phoneIcon" alt="contact-icon" class="header-actions__contacts-item-icons-phone">
                </div>
                <div class="header-actions__contacts-item-text">
                    <p class="header-actions__contacts-item-text__title">
                        {{ $t('contact_write_us_2') }}
                    </p>
                    <p class="header-actions__contacts-item-text__sub">
                        {{ $t('contact_admin') }}
                    </p>
                </div>
            </component>
            <component is="div" class="header-actions__contacts-item">
                <div class="header-actions__contacts-item-icons">
                    <a :href="SocialLinks.Fb" target='_blank'>
                        <img :src="fbIcon" alt="contact-icon">
                    </a>
                    <a :href="SocialLinks.Inst" target='_blank'>
                        <img :src="instIcon" alt="contact-icon">
                    </a>
                </div>
                <div class="header-actions__contacts-item-text">
                    <p class="header-actions__contacts-item-text__title">
                        {{ $t('contact_join') }}
                    </p>
                </div>
            </component>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-actions {
    padding: 64px;
    // height: 944px;
    max-width: 944px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    border-bottom-left-radius: 64px;
    background:
        url('/img/header-bg.png') center no-repeat,
        rgba(0, 0, 0, 0.3);
    background-size: cover;

    html[dir='rtl'] & {
        border-bottom-right-radius: 64px;
        border-bottom-left-radius: unset;
    }

    @media (max-width: 1600px) {
        padding: 64px 16px;
    }

    @include header-breakpoint {
        height: 960px;
        min-width: 100%;
        padding: 40px 32px;
        border-radius: 0 !important;
    }

    @include mobile {
        padding: 48px 16px 10px;
    }

    &::before {
        @include header-breakpoint {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.2);
            z-index: 0;
            pointer-events: none;
        }
    }

    @include mobile {
        height: 360px;
    }

    &__header {
        display: flex;
        z-index: 2;
        align-items: center;
    }

    &__burger {
        display: none;
        height: 64px;
        width: 64px;
        flex-shrink: 0;
        background-color: var(--white);
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        @include header-breakpoint {
            display: flex;
        }

        @include mobile {
            display: flex;
            height: var(--header-button-size-mobile);
            width: var(--header-button-size-mobile);
        }

        img {
            @include mobile {
                width: var(--header-button-icon-size-mobile);
                height: var(--header-button-icon-size-mobile);
            }
        }
    }

    &__title-center {
        position: relative;
        bottom: -35px;
        z-index: 1;
        display: none;
        word-wrap: break-word;
        // word-break: break-all;
        color: var(--white);

        @include header-breakpoint {
            display: inline-block;
        }
    }

    &__header-side {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-left: auto;
        flex-wrap: wrap;

        html[dir='rtl'] & {
            margin-left: unset;
            margin-right: auto;
        }

        @include mobile {
            gap: 7px;
        }
    }

    &__contacts {
        z-index: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        justify-content: space-between;

        @include mobile {
            visibility: hidden;
        }

        &-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            height: 72px;
            background-color: var(--white);
            border-radius: 35px;

            &-icons {
                display: flex;
                gap: 4px;

                &-phone {
                    transform: translateX(-17px);

                    html[dir="rtl"] & {
                        transform: translateX(17px);
                    }
                }

                a {
                    &:hover {
                        opacity: 0.7;
                    }
                }

            }

            &-text {
                display: flex;
                flex-direction: column;
                gap: 4px;
                align-items: start;

                &__title {
                    color: var(--black-primary);
                    font-size: 18px;
                    font-weight: 700;
                    pointer-events: none;
                }

                &__sub {
                    color: var(--black-secondary);
                    font-size: 14px;
                }
            }
        }

        &-icon {
            width: 56px;
            height: 56px;
        }
    }
}
</style>

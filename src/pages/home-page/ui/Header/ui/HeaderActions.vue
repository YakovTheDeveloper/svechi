<script setup lang="ts">
import VBadge from '@/shared/ui/v-badge/ui/VBadge.vue';
import VButton from '@/shared/ui/v-button/VButton.vue';
import LanguageSwitch from './language-switch';
import adminIcon from '@/app/assets/icons/admin.png'
import phoneIcon from '@/app/assets/icons/contact-phone.svg'
import fbIcon from '@/app/assets/icons/fb-2.svg'
import instIcon from '@/app/assets/icons/inst-2.svg'

</script>

<template>
    <div class="header-actions">
        <div class="header-actions__header">
            <div class="header-actions__header-side">
                <VButton variant="primary">Оформить заказ</VButton>
                <LanguageSwitch />
            </div>
        </div>
        <div class="header-actions__contacts">
            <component is="button" class="header-actions__contacts-item">
                <div class="header-actions__contacts-item-icons" :style="{ width: '100px' }">
                    <img :src="adminIcon" alt="contact-icon">
                    <img :src="phoneIcon" alt="contact-icon" :style="{ transform: 'translateX(-17px)' }">
                </div>
                <div class="header-actions__contacts-item-text">
                    <p class="header-actions__contacts-item-text__title">Напишите нам</p>
                    <p class="header-actions__contacts-item-text__sub">Администратор</p>
                </div>
            </component>
            <component is="a" class="header-actions__contacts-item">
                <div class="header-actions__contacts-item-icons">
                    <img :src="fbIcon" alt="contact-icon">
                    <img :src="instIcon" alt="contact-icon">
                </div>
                <div class="header-actions__contacts-item-text">
                    <p class="header-actions__contacts-item-text__title">Присоединяйтесь!</p>
                </div>
            </component>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-actions {
    padding: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    border-bottom-left-radius: 64px;

    background: url('img/header-bg.png') center no-repeat;
    background-size: cover;

    &__header {
        display: flex;
    }

    &__header-side {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-left: auto;
    }

    &__contacts {
        display: flex;
        justify-content: space-between;

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

<script setup lang="ts">
import VButton from '@/shared/ui/v-button/VButton.vue';
import VSpan from '@/shared/ui/v-span/ui/VSpan.vue';
import { contact } from '@/shared/utils/contact';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n()


</script>

<template>
    <div class="container padding">
        <section class="about-us" id="about-us">
            <div class="about-us__img">
                <img src="/img/about-us/1.png" alt="">
            </div>
            <div class="about-us__text-content">

                <h2 class="subtitle">
                    <template v-if="locale === 'ru'">
                        О нашей <VSpan variant="fill">мастерской</VSpan>
                    </template>
                    <template v-else-if="locale === 'he'">
                        על <VSpan variant="fill">המפעל</VSpan> שלנו
                    </template>
                    <template v-else>
                        About Our <VSpan variant="fill">Workshop</VSpan>
                    </template>
                </h2>

                <template v-if="locale === 'ru'">
                    <p>
                        Всем привет! Я Дарья Агафонова, и я создаю свечи ручной работы с уникальными ароматами. Каждая
                        свеча
                        сделана с любовью, из 100% натуральных компонентов, безопасных для здоровья. В отличие
                        от массово
                        производимых свечей с парафином и синтетическими ароматами, мои свечи не содержат вредных
                        веществ,
                        что делает их идеальными для вашего дома.
                        <br />
                        <br />
                        Я предлагаю широкий ассортимент свечей, подходящих под любой интерьер и предпочтения. У нас есть
                        различные ароматы: от свежих и легких до насыщенных и уютных, а также различные объемы с разным
                        временем горения. Каждая свеча индивидуальна и подбирается под ваш интерьер.
                        <br />
                        <br />
                        Доставка по всему
                        Израилю.
                        <br />
                        <br />
                        Свечи ручной работы — это не только безвредные и безопасные продукты, но и отличный способ
                        украсить
                        дом. Они добавят уюта в любую комнату, будь то спальня, гостиная, ванная комната или даже офис.
                        <br />
                        <br />
                        Пишите, я помогу вам выбрать идеальные свечи, которые станут частью вашего уюта в доме или
                        добавит
                        магии вечерним моментам на улице!
                    </p>
                </template>
                <template v-else-if="locale === 'en'">
                    <p>
                        Hello everyone! I’m Daria Agafonova, and I create handmade candles with unique fragrances. Each
                        candle is made with
                        love, from 100% natural components that are safe for your health. Unlike mass-produced candles
                        made
                        from paraffin
                        and synthetic fragrances, my candles do not contain harmful substances, making them perfect for
                        your
                        home.
                        <br />
                        <br />
                        I offer a wide range of candles suitable for any interior and preferences. We have various
                        fragrances: from fresh
                        and light to rich and cozy, as well as different sizes with varying burn times. Each candle is
                        unique and tailored
                        to your interior.
                        <br />
                        <br />
                        Delivery throughout Israel.
                        <br />
                        <br />
                        Handmade candles are not only safe and harmless products but also a great way to decorate your
                        home.
                        They will add
                        coziness to any room, whether it’s a bedroom, living room, bathroom, or even an office.
                        <br />
                        <br />
                        Feel free to reach out, and I will help you choose the perfect candles that will become part of
                        your
                        home’s comfort
                        or add magic to your evening moments outdoors!
                    </p>
                </template>
                <template v-else>
                    <p>
                        אהלן לכולם! אני, דריה אגפונוב, אני מייצרת נרות עבודת יד בעלי ניחוחים ייחודיים. כל נר מיוצר
                        מרכיבים טבעיים בדאגה לבריאות שלכם
                        </br>
                        </br>
                        אני מציעה מבחר של נרות המותא מים לכל בית ולכל העדפה.
                        בין המוצרים ישנם ניחוחים בין קלים ומרעננים לעמוקים ומחממים.
                        אנו מציעים נרות בעלי מגוון נפחים וזמני בעירה.
                        <br />
                        <br />
                        צשלוחים לכל הארץ
                        <br />
                        <br />
                        נרות עבודת יד הינם מוצרים בטוחים והם יקשטו כל חדר – חדר שינה, סלון, חדר אמבטיה או משרד.
                        <br />
                        <br />
                        כתבו לי ואעזור לכם לבחור נרות שיהיו לחלק מהאווירה הביתית או יוסיפו קסם לרגעי ערב בחוץ
                    </p>
                </template>

                <VButton class="about-us__order-btn" @click="contact">
                    {{ $t('contact_order') }}
                </VButton>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.title {
    margin-bottom: 32px;
}

.subtitle {
    color: var(--black-primary);
}

.text {
    color: var(--black-secondary);
}

.about-us {
    display: flex;
    gap: 32px;
    position: relative;

    @media (max-width: 1400px) {
        flex-direction: column;
    }

    @include tablet {
        flex-direction: column;
    }

    &:after {
        width: 100%;
        height: 206px;
        content: "";
        position: absolute;
        z-index: -1;
        bottom: 0;
        transform: translateY(63%);
        background: url('@/app/assets/decorations/about-us/1.svg') no-repeat;
        background-position: 36% 0;
        background-size: auto;

        @include tablet {
            display: none;
        }
    }

    &__img {
        padding: 60px 76px;
        max-width: 728px;
        flex-shrink: 0;
        position: relative;

        @include tablet {
            margin: 0 auto;
            padding: 40px 0 0;
            max-width: 75%;
        }

        img {
            max-width: 100%;
            object-fit: contain;
        }

        &:after {
            position: absolute;
            top: 13%;
            right: 0;
            z-index: -1;
            content: '';
            width: 152px;
            height: 160px;
            background: url('/img/about-us/quotation-mark.png') center no-repeat;

            @include rtl-flip;

            @include rtl {
                right: unset;
                left: 0;
            }

            @media (max-width: 1400px) {
                display: none;
            }

            // @include tablet {
            //     display: none;
            // }
        }
    }

    &__text-content {
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding-right: 120px;
        position: relative;
        color: var(--black-secondary);
        align-items: start;

        @include tablet {
            padding-right: 0;
        }

        @include mobile {
            font-size: 14px;
            gap: 16px;
        }

        &:after {
            position: absolute;
            bottom: 18%;
            right: 3%;
            z-index: -1;
            content: '';
            width: 152px;
            height: 160px;
            -moz-transform: scale(-1, 1);
            -webkit-transform: scale(-1, 1);
            -o-transform: scale(-1, 1);
            -ms-transform: scale(-1, 1);
            transform: scale(-1, 1);
            background: url('/img/about-us/quotation-mark.png') center no-repeat;



            // @include rtl-flip;

            @include rtl {
                right: unset;
                left: 0;
                bottom: 25%;
                -moz-transform: scale(1, 1);
                -webkit-transform: scale(1, 1);
                -o-transform: scale(1, 1);
                -ms-transform: scale(1, 1);
                transform: scale(1, 1);
            }

            @include tablet {
                bottom: 0%;
                right: 0;
                background-size: 50%;

            }
        }
    }

    &__order-btn {
        margin-top: 64px;

        @include tablet {
            margin-top: 0;
        }
    }
}
</style>

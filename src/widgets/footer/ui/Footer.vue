<script setup lang="ts">
import { SocialLinks } from '@/shared/constants/socials';
import { contact } from '@/shared/utils/contact';
import { scrollToId } from '@/shared/utils/scrollToId';

</script>

<template>
	<footer class="footer" id="footer">
		<div class="footer__inner">
			<div class="footer__content">
				<div class="footer__content-part">
					<p class="text-s">
						{{ $t('footer_benefit') }}
					</p>
					<div class="footer__content-part__delivery">
						<img loading="lazy" src="@/app/assets/icons/delivery.svg" alt="delivery-icon" />
						<p class="bold text">
							{{ $t('footer_delivery') }}
						</p>
					</div>
				</div>
				<div class="footer__content-part">
					<p class="footer__title">
						{{ $t('footer_about_company') }}
					</p>
					<ul class="footer__about-list">
						<li class="footer__list-item">
							<a href="" @click.prevent="scrollToId('about-us')">
								{{ $t('nav_about_us') }}
							</a>
						</li>
						<li class="footer__list-item">
							<a href="" @click.prevent="contact">
								{{ $t('nav_consulting') }}
							</a>
						</li>
					</ul>
				</div>
				<div class="footer__content-part">
					<p class="footer__title">
						{{ $t('nav_contacts') }}
					</p>
					<ul class="footer__contacts">
						<li class="footer__list-item">
							<a href="tel:+972532787532" class="footer__phone-link" dir="ltr">
								<img loading="lazy" src="@/app/assets/icons/phone.svg" alt="phone-icon">
								+972 53-278-7532
							</a>
						</li>
						<li>
							<ul class="footer__socials">
								<li>
									<a :href="SocialLinks.Fb" target='_blank'>
										<img loading="lazy" src="@/app/assets/icons/fb.svg" alt="facebook-icon">
									</a>
								</li>
								<li>
									<a :href="SocialLinks.Inst" target='_blank'>
										<img loading="lazy" src="@/app/assets/icons/inst.svg" alt="inst-icon">
									</a>
								</li>
								<li>
									<a href="https://wa.me/+972532787532" target='_blank'>
										<img loading="lazy" src="@/app/assets/icons/whatsapp.svg" alt="whatsapp-icon">
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<p class="footer__copyright">
				<span dir="ltr">Copyright @ 2025. All rights reserved.</span>
			</p>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {

	--gap: 32px;
	--gap-list: 24px;
	border-top-left-radius: 128px;
	border-top-right-radius: 128px;
	padding: 64px;
	position: relative;
	background-color: var(--green-accent-2);
	color: white;
	overflow: hidden;
	line-height: normal;

	@include tablet {
		margin-top: 16px;
		padding: 32px;
		border-top-left-radius: 64px;
		border-top-right-radius: 64px;
	}

	@include mobile {
		--gap: 12px;
		--gap-list: 12px;
		padding: 32px 16px;
		border-top-left-radius: 32px;
		border-top-right-radius: 32px;
	}

	&:after,
	&:before {
		width: 354px;
		height: 486px;
		content: "";
		position: absolute;
		background: url('@/app/assets/decorations/footer/1.svg') center no-repeat;
		z-index: 1;

		@include mobile {
			background-size: 50%;
		}
	}


	&:before {
		left: -150px;
		bottom: -192px;

		@include mobile {
			bottom: -92px;
		}
	}


	&:after {
		right: -150px;
		top: -10px;

		-moz-transform: scale(-1, 1);
		-webkit-transform: scale(-1, 1);
		-o-transform: scale(-1, 1);
		-ms-transform: scale(-1, 1);
		transform: scale(-1, 1);
	}

	&__title {
		font-size: 32px;
		font-weight: 700;

		@include mobile {
			font-size: 16px;
		}
	}

	&__list-item {
		font-size: 18px;
		color: rgba(255, 255, 255, 0.9);

		@include mobile {
			font-size: 14px;
		}
	}

	&__contacts {
		display: flex;
		gap: var(--gap-list);
		flex-direction: column;
	}

	&__socials {
		display: flex;
		gap: var(--gap-list);

		img {
			height: 56px;

			@include mobile {
				height: 32px;
			}
		}
	}

	&__about-list {
		display: flex;
		flex-direction: column;
		gap: var(--gap-list);
	}

	&__inner {
		margin: 0 auto;
		max-width: 1487px;

		@include tablet {
			max-width: 832px;
		}
	}

	&__content {
		display: flex;
		justify-content: space-between;
		gap: 16px;

		@media (max-width: 800px) {
			flex-direction: column;
			gap: 24px;
		}


		&-part {
			display: flex;
			flex-direction: column;
			gap: var(--gap);
			max-width: 365px;
			z-index: 2;

			.text-s {
				@include mobile {
					font-size: 14px;
				}
			}

			&__delivery {
				display: flex;
				gap: 6px;
				align-items: start;

				@include mobile {
					align-items: center;
				}

				img {
					margin-top: 6px;

					html[dir='rtl'] & {
						transform: scale(-1, 1);
					}

					@include mobile {
						margin-top: 0;
						margin-right: 2px;
						height: 15px;
					}
				}
			}

		}
	}

	&__copyright {
		border-top: 2px solid rgba(255, 255, 255, 0.1);
		color: rgba(255, 255, 255, 0.9);
		font-size: 16px;
		margin-top: 32px;
		padding: 32px 0 0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.6;

		@include mobile {
			margin-top: 16px;
			padding-top: 16px;
			font-size: 12px;
		}
	}

	&__phone-link {
		font-size: 24px;

		@include mobile {
			font-size: 14px;

			img {
				height: 18px;
			}
		}
	}





}
</style>

<script setup lang="ts">
import IconLogo from '@/shared/icons/IconLogo.vue'
</script>

<template>
	<footer class="footer">
		<div class="footer__content">
			<div class="footer__content-part">
				<p class="text-s">
					{{ $t('footer_benefit') }}
				</p>
				<div class="footer__content-part__delivery">
					<img src="@/app/assets/icons/delivery.svg" alt="delivery-icon" />
					<p class="bold text">
						Самовывоз возможен из города Бат-Ям
					</p>
				</div>
			</div>
			<div class="footer__content-part">
				<p class="footer__title">
					{{ $t('footer_about_company') }}
				</p>
				<ul class="footer__about-list">
					<li class="footer__list-item">
						<a href="">
							{{ $t('nav_about_us') }}
						</a>
					</li>
					<li class="footer__list-item">
						<a href="">
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
						<a href="" class="footer__phone-link">
							<img src="@/app/assets/icons/phone.svg" alt="">
							+053-278-75-32
						</a>
					</li>
					<li>
						<ul class="footer__socials">
							<li>
								<a href="">
									<img src="@/app/assets/icons/fb.svg" alt="facebook-icon">
								</a>
							</li>
							<li>
								<a href="">
									<img src="@/app/assets/icons/inst.svg" alt="inst-icon">
								</a>
							</li>
							<li>
								<a href="">
									<img src="@/app/assets/icons/whatsapp.svg" alt="whatsapp-icon">
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<p class="footer__copyright">
			Copyright @ 2025. All right reserved.
		</p>
	</footer>
</template>

<style lang="scss" scoped>
.footer {

	--gap: 32px;
	--gap-list: 24px;
	border-top-left-radius: 128px;
	border-top-right-radius: 128px;
	padding: 64px;
	background-color: var(--green-accent-2);
	color: white;

	@include tablet {
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

	&__content {
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1487px;
		gap: 16px;

		@include tablet{
			max-width: 832px;
		}

		@include mobile {
			flex-direction: column;
		}

		&-part {
			display: flex;
			flex-direction: column;
			gap: var(--gap);
			max-width: 365px;

			&__delivery {
				display: flex;
				gap: 6px;
				align-items: start;

				@include mobile {
					align-items: center;
				}

				img {
					margin-top: 6px;

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

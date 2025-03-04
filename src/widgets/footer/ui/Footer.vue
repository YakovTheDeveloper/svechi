<script setup lang="ts">
import IconLogo from '@/shared/icons/IconLogo.vue'
</script>

<template>
	<footer class="footer">
		<div class="footer__content">
			<div class="footer__content-part">
				<p class="text-s">
					Свечи ручной работы — это не только безвредные и безопасные продукты, но и отличный способ украсить
					дом.
				</p>
				<div class="footer__content-part__delivery">
					<img src="@/app/assets/icons/delivery.svg" alt="delivery-icon" />
					<p class="bold text">
						Самовывоз возможен из города Бат-Ям
					</p>
				</div>
			</div>
			<div class="footer__content-part">
				<p class="subtitle subtitle-s">О компании</p>
				<ul class="footer__about-list">
					<li>
						<a href="">О нас</a>
					</li>
					<li>
						<a href="">Консультация</a>
					</li>
				</ul>
			</div>
			<div class="footer__content-part">
				<p class="subtitle subtitle-s">Контакты</p>
				<ul class="footer__contacts">
					<li>
						<a href="">
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
									<img src="@/app/assets/icons/inst.svg" alt="facebook-icon">
								</a>
							</li>
							<li>
								<a href="">
									<img src="@/app/assets/icons/fb.svg" alt="facebook-icon">
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
.subtitle {
	font-style: normal;
}

.footer {

	--gap: 32px;
	--gap-small: 24px;

	color: rgba(255, 255, 255, 0.9);
	border-top-left-radius: 128px;
	border-top-right-radius: 128px;
	padding: 64px 216px;
	background-color: var(--green-accent-2);

	@include tablet {
		padding: 64px;
	}

	&__contacts {
		display: flex;
		gap: var(--gap-small);
		flex-direction: column;
	}

	&__socials {
		display: flex;
		gap: var(--gap-small);
	}

	&__about-list {
		display: flex;
		flex-direction: column;
		gap: var(--gap-small);

		a {
			font-size: 18px;
		}
	}

	&__content {
		display: flex;
		justify-content: space-between;
		margin: 0 auto;

		&-part {
			display: flex;
			flex-direction: column;
			gap: var(--gap);
			max-width: 365px;

			&__delivery {
				display: flex;
				gap: 6px;
				align-items: start;

				img {
					margin-top: 6px;
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
	}


}
</style>

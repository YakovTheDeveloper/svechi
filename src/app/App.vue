<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import { DefaultLayout } from '@/app/layouts'
import { ToastProvider } from '@/shared/ui/v-toast'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const route = useRoute()
const layout = computed(() => route.meta.layout || DefaultLayout)
watch(locale, (newLocale) => {
	document.documentElement.dir = newLocale === 'he' ? 'rtl' : 'ltr'
})

</script>

<template>
	<transition name="fade" mode="out-in">
		<component :is="layout">
			<template #default>
				<RouterView v-slot="{ Component }">
					<template v-if="Component">
						<transition name="fade" mode="out-in">
							<suspense>
								<component :is="Component" :key="route.fullPath"></component>
							</suspense>
						</transition>
					</template>
				</RouterView>
			</template>
		</component>
	</transition>
	<ToastProvider />
</template>

<style scoped></style>

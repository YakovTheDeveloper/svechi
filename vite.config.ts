import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
		viteImagemin({
			mozjpeg: {
				quality: 80,
			},
			optipng: {
				optimizationLevel: 3,
			},
			pngquant: {
				quality: [0.65, 0.9],
			},
			gifsicle: {
				optimizationLevel: 3,
			},
			webp: {
				quality: 80,
			},
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
                @use "@/app/assets/styles/breakpoint.scss" as *;
                @use "@/app/assets/styles/mixin.scss" as *;
            `,
			},
		},
	},
	define: {
		'process.env.BASE_URL': JSON.stringify(
			process.env.NODE_ENV === 'development' ? '/asdasdasd/' : '/svechi/',
		),
	},
	base: process.env.NODE_ENV === 'development' ? '/' : '/svechi/',
	build: {
		outDir: 'dist', // Default output directory for the build
		rollupOptions: {
			output: {
				// Ensure paths are correctly resolved
				assetFileNames: 'assets/[name].[hash][extname]',
				chunkFileNames: 'assets/[name].[hash].js',
				entryFileNames: 'assets/[name].[hash].js',
			},
		},
	},
})

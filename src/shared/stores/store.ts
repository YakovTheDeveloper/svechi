import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '../types/product'

export type Lang = 'Russian' | 'English' | 'China'

export const useStore = defineStore('store', () => {


	const currentModalProduct = ref<Product | null>(null)
	const clearModalContent = () => currentModalProduct.value = null

	const showModal = ref(false)
	const openModal = (data?: Product) => {
		if (data) currentModalProduct.value = data
		showModal.value = true
	}
	const closeModal = () => {
		showModal.value = false
	}

	return { showModal, openModal, closeModal, clearModalContent, currentModalProduct }
})


export const useMobileMenuStore = defineStore('mobile-menu-store', () => {

	const show = ref(false)
	const openModal = () => show.value = true
	const closeModal = () => show.value = false

	return { show, openModal, closeModal }
})

export const useWelcomeStore = defineStore('welcome-store', () => {

	const show = ref(true)
	const openModal = () => show.value = true
	const closeModal = () => show.value = false

	return { show, openModal, closeModal }
})
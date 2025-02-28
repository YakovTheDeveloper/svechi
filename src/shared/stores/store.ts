import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Lang = 'Russian' | 'English' | 'China'

export const useStore = defineStore('store', () => {

	const showModal = ref(false)
	const openModal = () => showModal.value = true

	return { showModal, openModal }
})
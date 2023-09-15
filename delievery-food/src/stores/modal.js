import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useModalStore = defineStore('modals', () => {
    const showCartModalWindow = ref(false)
    const showLoginModalWindow = ref(false)

    const changeCartVisibility = () => {
        showCartModalWindow.value = !showCartModalWindow.value
    }

    const changeLoginVisibility = () => {
        showLoginModalWindow.value = !showLoginModalWindow.value
    }

    return {
        showCartModalWindow,
        showLoginModalWindow,
        changeCartVisibility,
        changeLoginVisibility
    }
})
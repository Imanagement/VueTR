import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const cart = ref([])
    const addToCart = (product) => {
        if (getCartProductByID(product.id)) {
            alert("Продукт уже находится в Вашей корзине.")
            return
        }
        cart.value.push({
            id: product.id,
            quantity: 1,
            product: product
        })
        alert("Продукт был успешно добавлен в корзину.")
    }

    const removeFromCart = (cartProductID) => {
        cart.value = cart.value.filter(cartItem => cartItem.id !== cartProductID) || []
    }

    const getCartProductByID = (cartProductID) => {
        return cart.value.filter(cartProduct => cartProduct.id === cartProductID)[0]
    }

    const addQuantity = (cartProductID) => {
        const cartProduct = getCartProductByID(cartProductID)
        if (cartProduct) cartProduct.quantity++
    }

    const reduceQuantity = (cartProductID) => {
        const cartProduct = getCartProductByID(cartProductID)
        if (cartProduct) cartProduct.quantity > 1 ? cartProduct.quantity-- : removeFromCart(cartProductID)
    }

    const getCartTotalSummary = computed(() => {
        let summary = 0
        cart.value.forEach(cartItem => {
            summary += cartItem.quantity * cartItem.product.price
        })
        console.log(summary, "SUMMARY")
        return summary
    })

    const resetCart = () => {
        cart.value = []
    }

    return {
        cart,
        addToCart,
        removeFromCart,
        addQuantity,
        reduceQuantity,
        getCartTotalSummary,
        resetCart
    }
})
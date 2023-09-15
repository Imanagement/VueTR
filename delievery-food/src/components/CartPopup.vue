<script setup>
import { useModalStore } from '@/stores/modal'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const modalStore = useModalStore()
</script>

<template>
  <div class="modal modal-cart" v-if="modalStore.showCartModalWindow">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close" @click="modalStore.changeCartVisibility()">&times;</button>
      </div>
      <!-- /.modal-header -->
      <div class="modal-body">
        <div class="food-row" v-for="cartItem in cartStore.cart" :key="cartItem.id">
          <span class="food-name">{{ cartItem.product.name }}</span>
          <strong class="food-price">{{ cartItem.product.price }} ₽</strong>
          <div class="food-counter">
            <button class="counter-button" @click="cartStore.reduceQuantity(cartItem.id)">-</button>
            <span class="counter">{{ cartItem.quantity }}</span>
            <button class="counter-button" @click="cartStore.addQuantity(cartItem.id)">+</button>
          </div>
        </div>

      </div>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <span class="modal-pricetag">{{ cartStore.getCartTotalSummary }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button @click="cartStore.resetCart()" class="button clear-cart">Отмена</button>
        </div>
      </div>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>
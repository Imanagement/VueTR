<script setup>
import {ref, defineProps, computed} from 'vue'
import { useCartStore } from '@/stores/cart'
const props = defineProps(['product'])
const product = ref(props.product)
const cartStore = useCartStore()
const getProductImage = () => require('@/assets/img/' + product.value.image.src)
const getIngredients = computed(() => {
  return product.value.ingredients.map(ingredient => ingredient.name).join(', ')
})

</script>
<template>
  <div class="card">
    <img :src="getProductImage()" :alt="product.image.alt" class="card-image">
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ product.name }}</h3>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="ingredients">{{ getIngredients }}
        </div>
      </div>
      <!-- /.card-info -->
      <div class="card-buttons">
        <button @click="cartStore.addToCart(product)" class="button button-primary button-add-cart">
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ product.price }} ₽</strong>
      </div>
    </div>
    <!-- /.card-text -->
  </div>
</template>
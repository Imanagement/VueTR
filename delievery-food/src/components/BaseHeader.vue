<script setup>
import { useModalStore } from "@/stores/modal";
const modalStore = useModalStore()
</script>
<template>
  <div class="container">
    <header class="header">
      <a class="logo">
        <img src="@/assets/img/icon/logo.svg" alt="Logo" />
      </a>
      <label class="address">
        <input type="text" class="input input-address" placeholder="Адрес доставки" />
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        <button @click="modalStore.changeLoginVisibility()" class="button button-primary button-auth">
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button @click="modalStore.changeCartVisibility()" class="button button-cart" id="cart-button">
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
        <button class="button button-primary button-out">
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </button>
      </div>
    </header>
  </div>
</template>
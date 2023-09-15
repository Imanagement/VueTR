<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import CartPopup from '@/components/CartPopup.vue'
import LoginPopup from '@/components/LoginPopup.vue'
</script>

<template>
  <base-header />
  <router-view/>
  <base-footer />
  <cart-popup />
  <login-popup />
</template>

<style>
 @import '@/assets/css/normalize.css';
 @import '@/assets/css/style.css';
</style>

<script setup>
  import BaseHeader from '@/components/BaseHeader.vue'
  import BaseFooter from '@/components/BaseFooter.vue'
</script>

<template>
  <base-header />
  <router-view/>
  <base-footer />
</template>

<style>
 @import '@/assets/css/normalize.css';
 @import '@/assets/css/style.css';
</style>

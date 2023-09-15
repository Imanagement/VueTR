<script setup>
import SocialItems from '@/components/SocialItems.vue'
import FooterNavigation from '@/components/FooterNavigation.vue'
import BaseLogo from '@/components/icons/BaseLogo.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-block">
        <base-logo />
        <footer-navigation />
        <social-items />
      </div>
      <!-- /.footer-block -->
    </div>
  </footer>
</template>

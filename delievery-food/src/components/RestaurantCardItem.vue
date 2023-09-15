<script setup>
import { defineProps, ref, computed } from 'vue'

const props = defineProps(['item'])
const item = ref(props.item)
const getItemImage = () => require("@/assets/img/" + item.value.image.src)

const getLink = computed(() => {
  return `/restaurants/${item.value.id}/`
})

</script>
<template>
  <div class="card">
    <router-link :to="getLink" class="card card-restaurant">
      <img :src="getItemImage()" alt="image" class="card-image" />
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title">{{ item.name }}</h3>
          <span class="card-tag tag">{{ item.delieveryTime }} min</span>
        </div>
        <!-- /.card-heading -->
        <div class="card-info">
          <div class="rating">
            {{ item.rating }}
          </div>
          <div class="price">От {{ item.price }}</div>
          <div class="category">{{ item.category.name }}</div>
        </div>
        <!-- /.card-info -->
      </div>
      <!-- /.card-text -->
    </router-link>
    <!-- /.card -->
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { restaurants } from '@/data'
import RestaurantCardItem from '@/components/RestaurantCardItem.vue'
const getRestaurants = computed(() => {
  return restaurants
})
</script>
<template>
  <main class="main">
		<div class="container">
			<section class="container-promo">
				<section class="promo pizza">
					<h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
					<p class="promo-text">
						Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
					</p>
				</section>
			</section>
			<section class="restaurants">
				<div class="section-heading">
					<h2 class="section-title">Рестораны</h2>
					<label class="search">
						<input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
					</label>
				</div>
				<div class="cards cards-restaurants">
          <restaurant-card-item v-for="item in getRestaurants" :key="item.id" :item="item"/>
				</div>
				<!-- /.cards -->
			</section>
		</div>
		<!-- /.container -->
</main>
</template>

<script>
</script>

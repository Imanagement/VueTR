<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter} from 'vue-router'
import { pizzas, restaurants } from '@/data'
import ProductCardItem from '@/components/ProductCardItem.vue'

const restaurant = ref()
onMounted(() => {
  const route = useRoute()
  const router = useRouter()
  const restaurantID = route.params.id
  console.log(restaurants)
  console.log(restaurantID, "ID")
  const filter = restaurants.filter(restaurant => String(restaurant.id) === String(restaurantID))
  console.log(filter)
  if (!filter.length) router.push("/")
  restaurant.value = filter[0]
})

</script>
<template>
	<main class="main" v-if="restaurant">
		<div class="container">
			<section class="menu">
				<div class="section-heading">
					<h2 class="section-title restaurant-title">{{ restaurant.name }}</h2>
					<div class="card-info">
						<div class="rating">
							{{ restaurant.rating }}
						</div>
						<div class="price">От {{ restaurant.price }} ₽</div>
						<div class="category">{{ restaurant.category.name }}</div>
					</div>
					<!-- /.card-info -->
				</div>
				<div class="cards cards-menu">
          <product-card-item v-for="pizza in pizzas" :key="pizza.id" :product="pizza" />
				</div>
				<!-- /.cards -->
			</section>
		</div>
		<!-- /.container -->
	</main>
</template>
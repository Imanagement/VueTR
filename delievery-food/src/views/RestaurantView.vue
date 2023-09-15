<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter} from 'vue-router'
import { pizzas, restaurants } from '@/data'
import ProductCardItem from '@/components/ProductCardItem.vue'

const orderOptions = [
  {
    value: 'cost-less',
    label: "Подешевле",
  },
  {
    value: 'cost-more',
    label: "Подороже",
  }
]
const sort = ref()

const restaurant = ref()

onMounted(() => {
  const route = useRoute()
  const router = useRouter()
  const restaurantID = route.params.id
  const filter = restaurants.filter(restaurant => String(restaurant.id) === String(restaurantID))
  if (!filter.length) router.push("/")
  restaurant.value = filter[0]
})

const getPizzas = computed(() => {
  if (!sort.value) return pizzas
  const result = pizzas.sort((a, b) => a.price - b.price)
  if (sort.value !== 'cost-more') return result
  return result.reverse()
})

</script>
<template>
	<main class="main" v-if="restaurant">
		<div class="container">
			<section class="menu">
				<div class="section-heading">
          <div class="section-heading-title-info">
            <h2 class="section-title restaurant-title">{{ restaurant.name }}</h2>
            <div class="card-info">
          <div class="rating">
            {{ restaurant.rating }}
          </div>
          <div class="price">От {{ restaurant.price }} ₽</div>
          <div class="category">{{ restaurant.category.name }}</div>
        </div>
          </div>
          <div class="section-ordering">
            <el-select-v2 v-model="sort" :options="orderOptions"/>
          </div>
					<!-- /.card-info -->
				</div>
				<div class="cards cards-menu">
          <product-card-item v-for="pizza in getPizzas" :key="pizza.id" :product="pizza" />
				</div>
				<!-- /.cards -->
			</section>
		</div>
		<!-- /.container -->
	</main>
</template>

<style scoped>
.section-heading-title-info {
  display: flex;
}
.section-heading {
  justify-content: space-between;
}
</style>
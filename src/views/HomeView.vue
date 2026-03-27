<template>
  <section class="page">
    <div class="page-header">
      <h1>Clima</h1>
      <p>Consulta clima actual de distintas ciudades y revisa su pronóstico semanal.</p>
    </div>

    <SearchBar @search="handleSearch" />

    <p v-if="loading" class="status">Cargando...</p>
    <p v-if="error" class="error">{{ error }}</p>

    <div v-if="locations.length" class="locations-grid">
    <div
      v-for="loc in locations"
      :key="loc.id"
      class="location-card"
    >
      <div class="card-header">
        <div>
          <h3>{{ loc.name }}</h3>
          <p v-if="loc.admin1" class="muted">{{ loc.admin1 }}</p>
        </div>

        <span class="country-badge">
          {{ loc.country }}
        </span>
      </div>

      <div v-if="loc.current" class="weather-box">
        <p class="temp">{{ loc.current.temperature_2m }}°</p>
        <p>Viento: {{ loc.current.wind_speed_10m }} km/h</p>
        <p>Humedad: {{ loc.current.relative_humidity_2m }}%</p>
      </div>

      <p v-else class="muted">No se pudo cargar el clima actual.</p>

      <button class="primary-btn" @click="goToDetail(loc)">
        Ver más información
      </button>
    </div>
    </div>
          
<p>La aplicación inicia con Santiago de Chile como caso de prueba. Puedes ingresar cualquier ciudad en el buscador para obtener su clima en tiempo real.</p>
<p>Si detectas algún error o tienes sugerencias, eres bienvenido/a a compartir feedback o contribuir al proyecto.</p>

  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import SearchBar from '@/components/SearchBar.vue'

const store = useStore()
const router = useRouter()

const locations = computed(() => store.getters.locations)
const loading = computed(() => store.getters.loading)
const error = computed(() => store.getters.error)

const handleSearch = async (query) => {
  await store.dispatch('fetchLocations', query)
}

const goToDetail = (loc) => {
  router.push(`/detail/${loc.id}`)
}

onMounted(async () => {
  if (!locations.value.length) {
    await store.dispatch('fetchLocations', 'Santiago de Chile')
  }
})
</script>
<template>
  <section class="page" v-if="location">
    <div class="page-header">
      <h1>{{ location.name }}, {{ location.country }}</h1>
      <p v-if="location.admin1" class="muted">{{ location.admin1 }}</p>
    </div>

    <p v-if="loading" class="status">Cargando pronóstico...</p>
    <p v-if="error" class="error">{{ error }}</p>

    <div v-if="forecast" class="detail-content">
      <div class="panel">
        <h2>Ubicación</h2>
        <LocationMap
          :lat="location.latitude"
          :lon="location.longitude"
          :label="`${location.name}, ${location.country}`"
        />
      </div>

      <div class="detail-layout">
        <div class="panel">
          <h2>Pronóstico 7 días</h2>

          <div class="forecast-grid">
            <div
              v-for="(date, i) in forecast.daily.time"
              :key="date"
              class="forecast-card"
            >
              <p><strong>{{ date }}</strong></p>
              <p>Máx: {{ forecast.daily.temperature_2m_max[i] }}°</p>
              <p>Mín: {{ forecast.daily.temperature_2m_min[i] }}°</p>
              <p>Lluvia: {{ forecast.daily.precipitation_sum[i] }} mm</p>
            </div>
          </div>
        </div>

        <div class="side-panels">
          <div class="panel">
            <WeatherStats :stats="stats" />
          </div>

          <div class="panel">
            <WeatherAlerts :alerts="alerts" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="page" v-else>
    <p class="error">No se encontró la ciudad seleccionada.</p>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import WeatherStats from '@/components/WeatherStats.vue'
import WeatherAlerts from '@/components/WeatherAlerts.vue'
import LocationMap from '@/components/LocationMap.vue'
import { calculateWeeklyStats, generateAlerts } from '@/utils/weatherStats'

const route = useRoute()
const store = useStore()

const location = computed(() =>
  store.getters.locations.find(
    (l) => String(l.id) === String(route.params.id)
  )
)

const forecast = computed(() => store.getters.forecast)
const loading = computed(() => store.getters.loading)
const error = computed(() => store.getters.error)

const stats = computed(() => {
  if (!forecast.value) return null
  return calculateWeeklyStats(forecast.value.daily)
})

const alerts = computed(() => {
  if (!forecast.value) return []
  return generateAlerts(forecast.value.daily)
})

onMounted(async () => {
  if (location.value) {
    await store.dispatch('fetchForecast', location.value)
  }
})
</script>
<template>
  <div ref="mapContainer" class="map-box"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const props = defineProps({
  lat: {
    type: Number,
    required: true
  },
  lon: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    default: 'Ubicación'
  }
})

const mapContainer = ref(null)
let mapInstance = null

onMounted(() => {
  if (!mapContainer.value) return

  mapInstance = L.map(mapContainer.value).setView([props.lat, props.lon], 10)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapInstance)

  L.marker([props.lat, props.lon])
    .addTo(mapInstance)
    .bindPopup(props.label)
})

onBeforeUnmount(() => {
  if (mapInstance) {
    mapInstance.remove()
    mapInstance = null
  }
})
</script>

<style scoped>
.map-box {
  width: 100%;
  height: 260px;
  border-radius: 16px;
  overflow: hidden;
}
</style>
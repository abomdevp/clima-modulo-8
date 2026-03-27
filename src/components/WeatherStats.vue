<template>
  <div v-if="stats">
    <h3>Promedios</h3>
    <p>Máxima absoluta: {{ stats.absoluteMax }}°</p>
    <p>Mínima absoluta: {{ stats.absoluteMin }}°</p>
    <p>Promedio de máximas: {{ stats.avgMax }}°</p>
    <p>Promedio de mínimas: {{ stats.avgMin }}°</p>
    <p>Días lluviosos: {{ stats.rainyDays }}</p>

    <div style="margin-top: 12px;">
      <h4>Tipos de clima</h4>
      <ul>
        <li v-for="(count, type) in stats.weatherCounts" :key="type">
          {{ type }}: {{ count }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: Object
})
</script>
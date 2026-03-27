<template>
  <div>
    <h3>Alertas meteorológicas</h3>

    <ul style="margin-top: 12px;">
      <li v-for="(alert, i) in alerts" :key="i">
        {{ alert }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  alerts: {
    type: Array,
    default: () => []
  }
})
</script>
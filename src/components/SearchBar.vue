<template>
  <form class="search-bar" @submit.prevent="submit">
    <input
      v-model="query"
      type="text"
      placeholder="Buscar ciudad (ej: Santiago, Buenos Aires, Madrid)"
    />
    <button type="submit" class="primary-btn">Buscar</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const query = ref('Santiago de Chile')

const submit = () => {
  if (!query.value.trim()) return
  emit('search', query.value.trim())
}
</script>
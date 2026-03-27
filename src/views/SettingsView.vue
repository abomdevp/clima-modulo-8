<template>
  <section class="page">
    <div class="page-header">
      <h1>Configuración</h1>
      <p>Selecciona la unidad de temperatura para la aplicación.</p>
    </div>

    <div class="panel settings-panel">
      <label class="radio-option">
        <input
          type="radio"
          value="celsius"
          v-model="unit"
          @change="changeUnit"
        />
        Celsius (°C)
      </label>

      <label class="radio-option">
        <input
          type="radio"
          value="fahrenheit"
          v-model="unit"
          @change="changeUnit"
        />
        Fahrenheit (°F)
      </label>

      <p class="muted">
        Unidad actual guardada: <strong>{{ temperatureUnit }}</strong>
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const temperatureUnit = computed(() => store.getters.temperatureUnit)
const unit = ref(temperatureUnit.value)

watch(temperatureUnit, (newValue) => {
  unit.value = newValue
})

const changeUnit = () => {
  store.dispatch('updateTemperatureUnit', unit.value)
}
</script>
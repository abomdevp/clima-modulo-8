import { createStore } from 'vuex'
import { searchLocations, getWeatherByCoords } from '@/api/weather'

export default createStore({
  state: {
    locations: [],
    selectedLocation: null,
    forecast: null,
    loading: false,
    error: null,
    preferences: {
    temperatureUnit: localStorage.getItem('temperatureUnit') || 'celsius'
  }
  },

  mutations: {
    SET_LOCATIONS(state, locations) {
      state.locations = locations
    },
    SET_SELECTED_LOCATION(state, location) {
      state.selectedLocation = location
    },
    SET_FORECAST(state, forecast) {
      state.forecast = forecast
    },
    SET_LOADING(state, value) {
      state.loading = value
    },
    SET_ERROR(state, value) {
      state.error = value
    },
    SET_TEMPERATURE_UNIT(state, unit) {
      state.preferences.temperatureUnit = unit
      localStorage.setItem('temperatureUnit', unit)
    }
  },

  actions: {
    async fetchLocations({ commit, state }, query) {
        commit('SET_LOADING', true)
        commit('SET_ERROR', null)

        try {
        const results = await searchLocations(query)

        const enriched = await Promise.all(
            results.map(async (place) => {
            try {
                const weather = await getWeatherByCoords(
                place.latitude,
                place.longitude,
                state.preferences.temperatureUnit
                )

                return {
                ...place,
                current: weather.current
                }
            } catch {
                return {
                ...place,
                current: null
                }
            }
            })
        )

        commit('SET_LOCATIONS', enriched)
        } catch (error) {
        commit('SET_ERROR', 'Error al buscar ciudades')
        } finally {
        commit('SET_LOADING', false)
        }
    },

    async fetchForecast({ commit, state }, location) {
        commit('SET_LOADING', true)
        commit('SET_ERROR', null)

        try {
        const data = await getWeatherByCoords(
            location.latitude,
            location.longitude,
            state.preferences.temperatureUnit
        )

        commit('SET_SELECTED_LOCATION', location)
        commit('SET_FORECAST', data)
        } catch (error) {
        commit('SET_ERROR', 'Error al cargar pronóstico')
        } finally {
        commit('SET_LOADING', false)
        }
    },

    updateTemperatureUnit({ commit }, unit) {
        commit('SET_TEMPERATURE_UNIT', unit)
    }
    },

  getters: {
    locations: (state) => state.locations,
    selectedLocation: (state) => state.selectedLocation,
    forecast: (state) => state.forecast,
    loading: (state) => state.loading,
    error: (state) => state.error,
    temperatureUnit: (state) => state.preferences.temperatureUnit
  }
})
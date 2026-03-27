import axios from 'axios'

// API de geocoding (buscar ciudades)
const geoApi = axios.create({
  baseURL: 'https://geocoding-api.open-meteo.com/v1'
})

// API de clima
const weatherApi = axios.create({
  baseURL: 'https://api.open-meteo.com/v1'
})

// Buscar ciudades por nombre
export const searchLocations = async (query) => {
  const response = await geoApi.get('/search', {
    params: {
      name: query,
      count: 5,
      language: 'es',
      format: 'json'
    }
  })

  return response.data.results || []
}

// Obtener clima actual + forecast
export const getWeatherByCoords = async (lat, lon, unit = 'celsius') => {
  const response = await weatherApi.get('/forecast', {
    params: {
      latitude: lat,
      longitude: lon,
      current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum',
      forecast_days: 7,
      timezone: 'auto',
      temperature_unit: unit
    }
  })

  return response.data
}
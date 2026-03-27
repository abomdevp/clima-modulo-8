import { getWeatherLabel } from './weatherCodeMap'

// Estadísticas
export const calculateWeeklyStats = (daily) => {
  if (!daily) return null

  const maxTemps = daily.temperature_2m_max
  const minTemps = daily.temperature_2m_min
  const codes = daily.weather_code
  const rains = daily.precipitation_sum

  const absoluteMax = Math.max(...maxTemps)
  const absoluteMin = Math.min(...minTemps)

  const avgMax = maxTemps.reduce((a, b) => a + b, 0) / maxTemps.length
  const avgMin = minTemps.reduce((a, b) => a + b, 0) / minTemps.length

  const weatherCounts = codes.reduce((acc, code) => {
    const label = getWeatherLabel(code)
    acc[label] = (acc[label] || 0) + 1
    return acc
  }, {})

  const rainyDays = rains.filter((r) => r > 0).length

  return {
    absoluteMax,
    absoluteMin,
    avgMax: avgMax.toFixed(1),
    avgMin: avgMin.toFixed(1),
    weatherCounts,
    rainyDays
  }
}

// Alertas
export const generateAlerts = (daily) => {
  if (!daily) return []

  const alerts = []

  const maxTemps = daily.temperature_2m_max
  const rains = daily.precipitation_sum

  const hotDays = maxTemps.filter((t) => t >= 30).length
  const rainyDays = rains.filter((r) => r >= 5).length

  if (hotDays >= 3) {
    alerts.push('🔥 Posible ola de calor')
  }

  if (rainyDays >= 3) {
    alerts.push('🌧 Semana lluviosa')
  }

  if (alerts.length === 0) {
    alerts.push('Sin alertas relevantes')
  }

  return alerts
}
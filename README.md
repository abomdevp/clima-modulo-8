# App de Clima

Aplicación SPA desarrollada con Vue 3, Vue Router, Vuex y Axios que consume una API real de clima para mostrar clima actual, pronóstico semanal, estadísticas meteorológicas y alertas simples. Además, incorpora un mapa interactivo con Leaflet y mejoras visuales como badges de país para diferenciar ciudades con el mismo nombre.

## Enlace

github.com/abomdevp/clima-modulo-8

## Descripción general

Este proyecto fue desarrollado como aplicación final del bootcamp Desarrollo de aplicaciones front-end, integrando conceptos de:

- HTML
- CSS
- JavaScript
- Consumo de APIs
- Vue 3
- Vue Router
- Vuex
- Manejo de estado global
- Componentización
- Estadísticas y alertas meteorológicas
- Persistencia de preferencias con localStorage

La aplicación permite buscar ciudades reales, consultar su clima actual, revisar su pronóstico semanal, visualizar estadísticas calculadas a partir de los datos obtenidos, generar alertas meteorológicas simples y ubicar la ciudad seleccionada en un mapa interactivo.

## Tecnologías utilizadas

- Vue 3
- Vite
- Vue Router
- Vuex
- Axios
- Leaflet
- Iconify
- Open-Meteo API

## Funcionalidades principales
- Home con listado de ciudades y clima actual.
- Vista de detalle con:
  - pronóstico de 7 días
  - estadísticas semanales
  - alertas meteorológicas
  - mapa interactivo de la ubicación
- Vista de configuración para cambiar unidad de temperatura:
  - Celsius
  - Fahrenheit
- Búsqueda dinámica de ciudades reales.
- Persistencia de preferencia de temperatura con localStorage.
- Manejo de estados:
  - carga
  - error
- Mejoras visuales en cards:
  - badge de país para diferenciar ciudades con el mismo nombre
  - región mostrada en texto secundario
  - temperatura destacada
  - mejor comprensión visual del resultado consultado
- Footer con enlace visual a GitHub usando Iconify.

## API utilizada

La aplicación utiliza Open-Meteo para obtener datos meteorológicos reales.

Endpoints utilizados

- Geocoding API:
  - Búsqueda de ciudades por nombre
   
- Forecast API:
  - Clima actual
  - Humedad
  - Viento
  - Código meteorológico
  - Temperaturas máximas y mínimas
  - Precipitación

## Librerías instaladas

Este proyecto utiliza las siguientes librerías principales:

```bash
npm install vue-router vuex@next axios leaflet @iconify/vue
```

## Requisitos y ejecución del proyecto en local
<img width="32" height="32" alt="image" src="https://github.com/user-attachments/assets/9f405a7d-31f3-430b-8446-b0261876ceb2" /> Node.js

Instalación
`npm install`

Ejecutar
`npm run dev`

## Mejoras implementadas

Durante el cierre del proyecto se incorporaron varias mejoras para enriquecer la experiencia visual y funcional:

1. Mapa interactivo en la vista de detalle

    Se agregó la librería Leaflet para mostrar la ubicación geográfica de la ciudad seleccionada en un mapa interactivo dentro de la vista de detalle.

2. Badge de país en las cards del Home

    Se añadió un badge visual con el país de cada resultado para facilitar la comprensión cuando la búsqueda devuelve ciudades con el mismo nombre en distintos países.
      
    Ejemplo:
      
    Santiago, Chile
    Santiago, República Dominicana
    Santiago, México
      
    Esto mejora la lectura y evita confusiones al navegar entre resultados.

3. Footer con icono de GitHub

    Se incorporó Iconify para mostrar un icono de GitHub en el footer de la aplicación, entregando una salida visual más limpia y profesional.

## Capturas del Proyecto

Home
<img width="1914" height="678" alt="image" src="https://github.com/user-attachments/assets/e771eede-8e4d-4a20-b21d-2e7e1dacaae9" />

Detalle de Ciudad
<img width="1894" height="925" alt="image" src="https://github.com/user-attachments/assets/a81d1519-3fce-4cb7-8bdc-8d69da7866ac" />

Configuración
<img width="1914" height="423" alt="image" src="https://github.com/user-attachments/assets/d38687de-04b1-46db-adcc-78cce0fd94c5" />

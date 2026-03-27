<template>
  <div class="app-shell">
    <header class="topbar">
      <div class="topbar-content">
        <h2>Clima</h2>

        <nav class="nav-links">
          <RouterLink to="/">Inicio</RouterLink>
          <RouterLink to="/settings">Configuración</RouterLink>
        </nav>
      </div>
    </header>

    <main class="container">
      <RouterView />
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-inline">
        <span>Desarrollado por Francisco González - Sugerencias en</span>
        <a
          href="https://github.com/abomdevp"
          target="_blank"
          rel="noopener noreferrer"
          class="github-link"
          aria-label="GitHub de Francisco González"
        >
          <Icon icon="mdi:github" width="24" height="24" />
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { Icon } from '@iconify/vue'
</script>
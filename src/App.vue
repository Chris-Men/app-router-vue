<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header
      class="flex items-center h-16 px-4 border-b border-gray-200 bg-white shadow-sm sm:h-20 md:px-6 lg:px-8"
    >
      <div>
        <a
          class="flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          href="#"
        >
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
          <span class="hidden sm:inline-block">Acme Corporation</span>
        </a>
      </div>

      <nav class="ml-auto space-x-6 flex items-center h-10 text-sm sm:space-x-8 md:text-base">
        <RouterLink to="/" class="text-gray-600 hover:text-indigo-600 transition-colors"
          >Principal</RouterLink
        >
        <RouterLink
          to="/contactopagina"
          class="text-gray-600 hover:text-indigo-600 transition-colors"
          >Contacto</RouterLink
        >
        <RouterLink
          to="/featurespagina"
          class="text-gray-600 hover:text-indigo-600 transition-colors"
          >Features</RouterLink
        >
        <RouterLink
          to="/preciospagina"
          class="text-gray-600 hover:text-indigo-600 transition-colors"
          >Precios</RouterLink
        >
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center py-10 bg-gray-50">
      <RouterView />
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer
      class="flex items-center h-16 px-4 border-t border-gray-200 bg-white shadow-inner sm:h-20 md:px-6 lg:px-8"
    >
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Acme Corporation. Todos los derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>

<script lang="ts" setup>
// Las importaciones de las páginas están comentadas porque suponemos que se están manejando a través de rutas
// import principalpagina from './modules/landing/pages/principalpagina.vue'
// import contactopagina from './modules/landing/pages/contactopagina.vue'
// import featurespagina from './modules/landing/pages/featurespagina.vue'
// import preciospagina from './modules/landing/pages/preciospagina.vue'
</script>

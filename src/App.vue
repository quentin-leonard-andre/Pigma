<script>
  import { RouterLink, RouterView } from "vue-router";

  export default{
    components: {
      RouterLink, RouterView
    }
  }
</script>

<template>
  <header class="flex flex-col items-center bg-light-600 p-1">
    <!-- Logo -->
    <a href="/">
      <img 
        src="./assets/images/pigma_logo.png"
        class="max-w-[80px]"
      />
    </a>

    <!-- Barre de liens -->
    <nav 
      class="p-3 w-full flex flex-wrap gap-4"
    >
      <RouterLink 
        to="/"
        class="hover:text-primary-500"
        :class="{'text-primary-500': $route.name == 'home'}"
      >
        Accueil
      </RouterLink>

      <RouterLink 
        to="/buttons"
        class="hover:text-primary-500"
        :class="{'text-primary-500': $route.name == 'buttons'}"
      >
        Boutons
      </RouterLink>

      <RouterLink 
        to="/cards"
        class="hover:text-primary-500"
        :class="{'text-primary-500': $route.name == 'cards'}"
      >
        Cartes
      </RouterLink>
    </nav>
  </header>

  <RouterView/>
</template>
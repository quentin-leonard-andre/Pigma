<script>
  import { RouterLink, RouterView } from "vue-router";

  export default{
    components: {
      RouterLink, RouterView
    }
  }
</script>

<template>
  <header>
      <nav>
        <RouterLink 
          to="/"
        >
          Accueil
        </RouterLink>
      </nav>
  </header>

  <RouterView/>
</template>
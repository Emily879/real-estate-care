<template>
  <v-app>
    <!-- Conditionally render Header based on route -->
    <Header v-if="showHeader" />

    <v-main>
      <router-view />
    </v-main>

    <!-- Conditionally render Footer based on route -->
    <FooterComponent v-if="showFooter" />
  </v-app>
</template>

<script>
import { computed } from 'vue'; 
import Header from './components/Header.vue';
import FooterComponent from './components/Footer.vue'; 
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    Header,
    FooterComponent, 
  },
  setup() {
    const route = useRoute();

    // Determine if Header should be shown
    const showHeader = computed(() => {
      return route.path !== '/login' && route.path !== '/2fa';
    });

    // Show Footer except on login or 2FA screens
    const showFooter = computed(() => {
      return route.path !== '/login' && route.path !== '/2fa';
    });

    return {
      showHeader,
      showFooter,
    };
  },
};
</script>

<style scoped>
/* Any global styles needed */
</style>

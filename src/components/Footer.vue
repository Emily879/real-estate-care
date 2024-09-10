<template>
  <v-footer class="bottom-nav" app>
    <v-row justify="space-around">
      <v-col class="footer-item" cols="auto">

          <v-icon icon @click="goToOpenInspections" class="footer-icon">mdi-wrench</v-icon>

        <span>Active Task</span>
      </v-col>
      
      <v-col class="footer-item" cols="auto">
          <v-icon icon @click="goToSearch" class="footer-icon">mdi-magnify</v-icon>   
        <span>Search</span>
      </v-col>
      
      <v-col class="footer-item" cols="auto">
          <v-icon icon @click="goToKnowledgeBase" class="footer-icon">mdi-information</v-icon>
        <span>Information</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    goToOpenInspections() {
      this.$router.push('/open-inspections');
    },
    goToSearch() {
      this.$router.push('/search');
    },
    goToKnowledgeBase() {
      this.$router.push('/knowledge-base');
    }
  }
}
</script>

<style scoped>
.v-btn {
background-color: transparent ; 
box-shadow: none; 
}

.v-icon {
    color: var(--icon);
    font-size: 1.5rem;
  }



</style>

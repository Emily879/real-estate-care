<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card @click="goToOpenInspections" class="card">
            <v-card-title>Open Inspections</v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card @click="goToCompletedInspections" class="card">
            <v-card-title>Completed Inspections</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
  
      const goToOpenInspections = () => {
        router.push('/open-inspections');
      };
  
      const goToCompletedInspections = () => {
        router.push('/completed-inspections');
      };
  
      return {
        goToOpenInspections,
        goToCompletedInspections,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  
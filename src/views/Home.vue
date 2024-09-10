<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card 
          @click="goToOpenInspections" 
          class="card" 
          tabindex="0" 
          role="button" 
          aria-label="Go to Open Inspections"
        >
          <v-icon class="icon">mdi-bookmark-outline</v-icon>
          <v-card-title class="card-title">Open Inspections</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card 
          @click="goToCompletedInspections" 
          class="card" 
          tabindex="0" 
          role="button" 
          aria-label="Go to Completed Inspections"
        >
          <v-icon class="icon">mdi-check-circle</v-icon>
          <v-card-title class="card-title">Completed Inspections</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card 
          @click="goToKnowledgeBase" 
          class="card" 
          tabindex="0" 
          role="button" 
          aria-label="Go to Knowledge Base"
        >
          <v-icon class="icon">mdi-dots-grid</v-icon>
          <v-card-title class="card-title">Knowledge Base</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card 
          @click="goToSettings" 
          class="card" 
          tabindex="0" 
          role="button" 
          aria-label="Go to Settings"
        >
          <v-icon class="icon">mdi-cog</v-icon>
          <v-card-title class="card-title">Settings</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import Header from '@/components/Header.vue'; 
import { useRouter } from 'vue-router';

export default {
  name: 'HomeComp',
  components: {
    Header
  },
  setup() {
    const router = useRouter();

    const goToOpenInspections = () => {
      router.push('/open-inspections');
    };

    const goToCompletedInspections = () => {
      router.push('/completed-inspections');
    };

    const goToKnowledgeBase = () => {
      router.push('/knowledge-base');
    };

    const goToSettings = () => {
      router.push('/settings');
    };

    return {
      goToOpenInspections,
      goToCompletedInspections,
      goToKnowledgeBase,
      goToSettings
    };
  }
};
</script>

<style scoped>


.card {
    display: flex;
    flex-direction: column;
    align-items: center;
   padding: 1rem 0;
}
.icon {
    font-size: 5rem;
   
}



.card-title {
    font-size: 1.3rem;
}
</style>

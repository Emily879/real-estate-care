<template>
  <v-container>
    <!-- Displaying categories with their associated files -->
    <v-card 
      v-for="(category, index) in knowledgeBaseStore.knowledgeBase" 
      :key="index" 
      class="mb-4 card"
    >
      <h1>Knowledge Base</h1>

      <v-card-title>{{ category.name }}</v-card-title>
      <v-list>
        <v-list-item 
          v-for="file in category.files" 
          :key="file.id"
          tabindex="0" 
          role="listitem"
        >
          <v-list-item-content>
            <v-list-item-title>{{ file.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ file.description }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn 
              :href="file.url" 
              target="_blank" 
              download
              tabindex="0"
              aria-label="Download {{ file.name }}"
            >
              Download
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

  
  <script>
  import { useKnowledgeBaseStore } from '@/stores/knowledgeBase'
  import { onMounted } from 'vue'
  
  export default {
    setup() {
      const knowledgeBaseStore = useKnowledgeBaseStore()
  
      onMounted(() => {
        knowledgeBaseStore.fetchKnowledgeBase()
      })
  
      return {
        knowledgeBaseStore
      }
    }
  }
  </script>



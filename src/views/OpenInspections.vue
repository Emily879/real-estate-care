<template>
  <v-container>
    <v-row>
      <!-- Loop through active inspections -->
      <v-col v-for="inspection in activeInspections" :key="inspection.id" cols="12" md="6">
        <v-card 
          @click="viewInspection(inspection.id)" 
          class="card" 
          role="button" 
          aria-label="View Inspection for {{ inspection.location }}"
          tabindex="0"
        >
          <v-card-title>{{ inspection.location }}</v-card-title>
          <v-list-item-subtitle>{{ formatDate(inspection.date) }}</v-list-item-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { useInspectionsStore } from '@/stores/inspections'
import { defineComponent, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'OpenInspections',
  setup() {
    const inspectionsStore = useInspectionsStore()
    const router = useRouter()
    const activeInspections = computed(() => inspectionsStore.getActiveInspections())

    onMounted(() => {
      inspectionsStore.fetchInspections()
    })

    const formatDate = (dateStr) => {
      const [day, month, year] = dateStr.split(' ')
      return `${day} ${month} ${year}`
    }

    const viewInspection = (id) => {
      router.push({ name: 'InspectionDetail', params: { id } })
    }

    return {
      activeInspections,
      viewInspection,
      formatDate
    }
  }
})
</script>

<style scoped>
/* Add any styles you need here */
</style>

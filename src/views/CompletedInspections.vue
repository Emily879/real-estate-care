<template>
  <v-container>
    <v-row>
      <v-col v-for="inspection in completedInspections" :key="inspection.id" cols="12">
        <v-card 
          @click="viewInspection(inspection.id)" 
          class="card" 
          tabindex="0" 
          role="button" 
          aria-label="View details of inspection at {{ inspection.location }} on {{ formatDate(inspection.date) }}"
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
  name: 'CompletedInspections',
  setup() {
    const inspectionsStore = useInspectionsStore()
    const router = useRouter()

    const completedInspections = computed(() => inspectionsStore.getCompletedInspections())

    onMounted(() => {
      inspectionsStore.fetchInspections().catch(error => {
        console.error('Failed to fetch inspections:', error)
      })
    })

    const formatDate = (dateStr) => {
      const [day, month, year] = dateStr.split(' ')
      return `${day} ${month} ${year}`
    }

    const viewInspection = (id) => {
      router.push({ name: 'InspectionDetail', params: { id } })
    }

    return {
      completedInspections,
      viewInspection,
      formatDate
    }
  }
})
</script>


  
 
<style scoped>

</style>


  
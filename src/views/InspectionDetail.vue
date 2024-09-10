<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-row>
        <v-col>
          <v-card v-if="inspection">
            <v-card-title class="title">{{ inspection.location }}</v-card-title>
            <v-card-subtitle>Inspector: {{ inspection.inspector }}</v-card-subtitle>

            <!-- Display Current Status -->
            <v-card-subtitle>Status: {{ inspection.status }}</v-card-subtitle>

            <!-- Conditional Buttons Based on Inspection Status -->
            <div v-if="inspection.status === 'In Progress'">
              <v-btn @click="markAsCompleted" class="mark-btn">Mark as Completed</v-btn>
            </div>

            <div v-if="inspection.status === 'Completed'">
              <v-btn @click="markAsInProgress">Mark as In Progress</v-btn>
            </div>

            <!-- Dynamic form for different report types -->
            <div v-if="form.damageReport">
              <h3>Damage Report</h3>
              <v-text-field v-model="form.damageReport.location" label="Location" />
              <v-radio-group v-model="form.damageReport.newDamage" :rules="[v => !!v || 'This field is required']">
                <v-radio color="var(--secondary-color)" label="New Damage" value="true" />
                <v-radio color="var(--secondary-color)" label="Existing Damage" value="false" />
              </v-radio-group>
              <v-select v-model="form.damageReport.damageType" :items="['Calamity', 'Vandalism', 'Normal Use']" label="Damage Type" />
              <v-text-field v-model="form.damageReport.date" label="Date" type="date" />
              <v-radio-group v-model="form.damageReport.urgentActionRequired">
                <v-radio color="var(--secondary-color)" label="Urgent" value="true" />
                <v-radio color="var(--secondary-color)" label="Not Urgent" value="false" />
              </v-radio-group>
              <v-textarea v-model="form.damageReport.description" label="Description" />
              <v-file-input label="Upload Photos" multiple @change="onPhotoUpload" />
            </div>

            <div v-if="form.maintenanceReport">
              <h3>Maintenance Report</h3>
              <v-text-field v-model="form.maintenanceReport.location" label="Location" />
              <v-select v-model="form.maintenanceReport.maintenanceType" :items="['Plumbing', 'Electrical', 'Painting']" label="Maintenance Type" />
              <v-radio-group v-model="form.maintenanceReport.urgentActionRequired">
                <v-radio color="var(--secondary-color)" label="Urgent" value="true" />
                <v-radio color="var(--secondary-color)" label="Not Urgent" value="false" />
              </v-radio-group>
              <v-select v-model="form.maintenanceReport.costEstimate" :items="['0-500', '500-1,500', '1,500+']" label="Cost Estimate" />
            </div>

            <div v-if="form.technicalInstallationReport">
              <h3>Technical Installation Report</h3>
              <v-text-field v-model="form.technicalInstallationReport.location" label="Location" />
              <v-select v-model="form.technicalInstallationReport.installationType" :items="['Cooling', 'Heating', 'Ventilation', 'Electricity', 'Security']" label="Installation Type" />
              <v-text-field v-model="form.technicalInstallationReport.reportedMalfunction" label="Reported Malfunction" />
              <v-text-field v-model="form.technicalInstallationReport.testProcedure" label="Test Procedure" />
              <v-radio-group v-model="form.technicalInstallationReport.approved">
                <v-radio color="var(--secondary-color)" label="Approved" value="true" />
                <v-radio color="var(--secondary-color)" label="Not Approved" value="false" />
              </v-radio-group>
              <v-textarea v-model="form.technicalInstallationReport.comments" label="Comments" />
            </div>

            <div v-if="form.modificationInventory">
              <h3>Modification Inventory</h3>
              <v-text-field v-model="form.modificationInventory.existingSituation" label="Existing Situation and Documented Modifications" />
              <v-text-field v-model="form.modificationInventory.location" label="Location of Modification" />
              <v-select v-model="form.modificationInventory.executedBy" :items="['Tenant', 'Contractor', 'Unknown']" label="Executed By" />
              <v-text-field v-model="form.modificationInventory.description" label="Modification Description" />
              <v-select v-model="form.modificationInventory.actionToBeTaken" :items="['Accept', 'Inspect', 'Remove', 'Adjust and Inspect']" label="Action to be Taken" />
              <v-textarea v-model="form.modificationInventory.comments" label="Comments" />
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn v-if="!form.damageReport"  outlined @click="addReportType('Damage Report')">Add Damage Report</v-btn>
          <v-btn v-if="!form.maintenanceReport" outlined @click="addReportType('Maintenance Report')">Add Maintenance Report</v-btn>
          <v-btn v-if="!form.technicalInstallationReport"  outlined @click="addReportType('Technical Installation Report')">Add Technical Installation Report</v-btn>
          <v-btn v-if="!form.modificationInventory"  outlined @click="addReportType('Modification Inventory')">Add Modification Inventory</v-btn>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col class="text-center">
          <v-btn @click="submitForm" class="mark-btn">Submit</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { useInspectionsStore } from '@/stores/inspections'
import { defineComponent, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'InspectionDetail',
  setup() {
    const inspectionsStore = useInspectionsStore()
    const route = useRoute()
    const router = useRouter()
    const inspection = computed(() => inspectionsStore.selectedInspection)
    const form = computed(() => inspectionsStore.form)

    const submitForm = async () => {
      try {
        await inspectionsStore.submitForm()
        router.push('/success')
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    }

    const addReportType = (type) => {
      inspectionsStore.addReportType(type)
    }

    const onPhotoUpload = (event) => {
      inspectionsStore.onPhotoUpload(event)
    }

    const markAsCompleted = () => {
      if (inspection.value) {
        inspection.value.status = 'Completed'
        inspectionsStore.submitForm()
      }
    }

    const markAsInProgress = () => {
      if (inspection.value) {
        inspection.value.status = 'In Progress'
        inspectionsStore.submitForm()
      }
    }

    onMounted(() => {
      const id = parseInt(route.params.id, 10)
      if (id) {
        const inspectionItem = inspectionsStore.inspections.find(i => i.id === id)
        if (inspectionItem) {
          inspectionsStore.loadInspection(inspectionItem)
        } else {
          console.error('Inspection not found')
        }
      } else {
        console.error('Invalid inspection ID')
      }
    })

    return {
      inspection,
      form,
      submitForm,
      addReportType,
      onPhotoUpload,
      markAsCompleted,
      markAsInProgress
    }
  }
})
</script>

<style scoped>
.v-container {
  max-width: 100%;
}

.v-form {
  width: 100%;
}

.card {
  overflow: hidden;
  margin: 0;
}

.mark-btn {
  margin-top: 16px;
}
</style>

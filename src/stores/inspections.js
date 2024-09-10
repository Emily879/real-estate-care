import { defineStore } from 'pinia'

export const useInspectionsStore = defineStore('inspections', {
  state: () => ({
    inspections: [],
    selectedInspection: null,
    form: {
      damageReport: null,
      maintenanceReport: null,
      technicalInstallationReport: null,
      modificationInventory: null
    }
  }),
  actions: {
    async fetchInspections() {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/66d8bd57e41b4d34e42a4e8a/latest', {
          headers: {
            'X-Master-Key': '$2a$10$jI22u8i/O5/813.GcbnohOxQPEbyPVAY2LHk0Wmg2hDW1mchyRaVS',
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        this.inspections = data.record.inspections
      } catch (error) {
        console.error('Error fetching inspections:', error)
      }
    },
    getActiveInspections() {
      return this.inspections.filter(inspection => inspection.status === 'In Progress')
    },
    getCompletedInspections() {
      return this.inspections.filter(inspection => inspection.status === 'Completed')
    },
    loadInspection(inspection) {
      if (inspection) {
        this.selectedInspection = inspection
        this.form = {
          damageReport: inspection.damageReport || null,
          maintenanceReport: inspection.maintenanceReport || null,
          technicalInstallationReport: inspection.technicalInstallationReport || null,
          modificationInventory: inspection.modificationInventory || null
        }
      }
    },
    async updateInspectionStatus(id, status) {
      try {
        const index = this.inspections.findIndex(i => i.id === id)
        if (index !== -1) {
          this.inspections[index].status = status
          await fetch(`https://api.jsonbin.io/v3/b/66d8bd57e41b4d34e42a4e8a`, {
            method: 'PUT',
            headers: {
              'X-Master-Key': '$2a$10$jI22u8i/O5/813.GcbnohOxQPEbyPVAY2LHk0Wmg2hDW1mchyRaVS',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inspections: this.inspections })
          })
        }
      } catch (error) {
        console.error('Error updating status:', error)
      }
    },
    onPhotoUpload(event) {
      const files = event.target.files
      this.form.damageReport.photos = Array.from(files).map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }))
    },
    submitForm() {
      console.log('Form submitted:', this.form)
    },
    addReportType(type) {
      switch (type) {
        case 'Damage Report':
          this.form.damageReport = this.form.damageReport || {}
          break
        case 'Maintenance Report':
          this.form.maintenanceReport = this.form.maintenanceReport || {}
          break
        case 'Technical Installation Report':
          this.form.technicalInstallationReport = this.form.technicalInstallationReport || {}
          break
        case 'Modification Inventory':
          this.form.modificationInventory = this.form.modificationInventory || {}
          break
        default:
          break
      }
    }
  }
})

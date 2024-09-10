import { defineStore } from 'pinia'

export const useKnowledgeBaseStore = defineStore('knowledgeBase', {
  state: () => ({
    knowledgeBase: []
  }),
  actions: {
    async fetchKnowledgeBase() {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/66d9b83cacd3cb34a87ee19a/latest', {
          headers: {
            'X-Master-Key': '$2a$10$jI22u8i/O5/813.GcbnohOxQPEbyPVAY2LHk0Wmg2hDW1mchyRaVS',
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        this.knowledgeBase = data.record.categories 
      } catch (error) {
        console.error('Error fetching knowledge base:', error)
      }
    }
  }
})

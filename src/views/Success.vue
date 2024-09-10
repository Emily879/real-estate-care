<template>
    <v-container>
      <v-row>
        <v-col class="text-center">
          <v-card>
            <v-card-title>
              <v-icon large>mdi-check-circle-outline</v-icon>
              <span class="ml-3">Submission Successful!</span>
            </v-card-title>
            <v-card-subtitle>
              Your details have been successfully submitted.
            </v-card-subtitle>
            <v-card-actions class="justify-center">
              <v-btn @click="goHome" class="mark-btn">Back to Home</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'Success',
    setup() {
      const router = useRouter()
  
      const goHome = () => {
        router.push('/')
      }
  
      return {
        goHome
      }
    }
  }
  </script>
  
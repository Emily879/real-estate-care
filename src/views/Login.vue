<template>
  <v-container>
    <v-form @submit.prevent="handleLogin">
      <!-- Username Field -->
      <v-text-field 
        v-model="username" 
        label="Username" 
        aria-label="Username"
        required
      />

      <!-- Password Field -->
      <v-text-field 
        v-model="password" 
        label="Password" 
        type="password" 
        aria-label="Password"
        required
      />

      <!-- Submit Button -->
      <v-btn 
        type="submit" 
        aria-label="Login"
      >
        Login
      </v-btn>

      <!-- Error Alert -->
      <v-alert 
        v-if="error" 
        type="error"
        role="alert" 
        aria-live="assertive"
      >
        {{ error }}
      </v-alert>
    </v-form>
  </v-container>
</template>

  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
      const username = ref('');
      const password = ref('');
      const error = ref('');
  
      const handleLogin = () => {
        if (username.value === 'testuser' && password.value === 'password') {
          localStorage.setItem('auth', 'false'); 
          router.push('/2fa'); // Redirect to 2FA page
        } else {
          error.value = 'Invalid username or password';
        }
      };
  
      return {
        username,
        password,
        error,
        handleLogin
      };
    }
  };
  </script>


<style scoped>
.v-alert {
  margin-top: 1rem;
}
</style>
  
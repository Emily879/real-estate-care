<template>
  <v-container>
    <v-form @submit.prevent="verifyCode">
      <v-text-field v-model="code" label="Verification Code" />
      <v-btn type="submit">Verify</v-btn>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-form>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const code = ref('');
    const error = ref('');

    const verifyCode = () => {
      // Simulate 2FA code verification
      if (code.value === '123456') {
        localStorage.setItem('auth', 'true'); // Set authenticated state
        router.push('/'); // Redirect to home
      } else {
        error.value = 'Invalid verification code';
      }
    };

    return {
      code,
      error,
      verifyCode
    };
  }
};
</script>

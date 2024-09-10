import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    user: {
      username: 'Jan de Vries',
      avatar: 'https://example.com/avatar.png', // Placeholder URL
      email: 'jandevries@example.com',
    },
    preferences: {
      isDarkTheme: false, 
      notifications: true,
      sounds: true,
      language: 'en', 
    },
  }),
  actions: {
    updateUserDetails(newDetails) {
      this.user = { ...this.user, ...newDetails };
    },
    updatePreferences(newPreferences) {
      this.preferences = { ...this.preferences, ...newPreferences };
    }
  }
});

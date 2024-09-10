<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>Accountgegevens</v-card-title>
          <v-card-text>
            <v-avatar size="100">
              <v-img :src="userDetails.avatar"></v-img>
            </v-avatar>
            <v-file-input label="Upload new avatar" @change="updateAvatar" />
            <v-text-field v-model="userDetails.username" label="Gebruikersnaam" />
            <v-text-field v-model="userDetails.email" label="E-mail" />
            <v-btn @click="saveUserDetails">Opslaan</v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>Voorkeuren</v-card-title>
          <v-card-text>
            <v-switch
              v-model="preferences.isDarkTheme"
              label="Dark Theme"
              @change="applyTheme"
            />
            <v-switch
              v-model="preferences.notifications"
              label="Toon meldingen"
            />
            <v-switch v-model="preferences.sounds" label="Geluiden" />
            <v-select
              v-model="preferences.language"
              :items="['nl', 'en']"
              label="Taal"
            />
            <v-btn @click="savePreferences" class="save-btn">Save Preferences</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Success Dialog -->
    <v-dialog v-model="dialog.visible" max-width="290">
      <v-card>
        <v-card-title class="headline">Success</v-card-title>
        <v-card-text>
          Your preferences have been saved successfully!
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog.visible = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useSettingsStore } from '@/stores/settings';
import { useTheme } from 'vuetify';

export default {
  setup() {
    const settingsStore = useSettingsStore();
    const theme = useTheme(); // Vuetify's theme management

    const userDetails = ref({
      username: settingsStore.user.username,
      email: settingsStore.user.email,
      avatar: settingsStore.user.avatar
    });

    const preferences = ref({
      isDarkTheme: settingsStore.preferences.isDarkTheme,
      notifications: settingsStore.preferences.notifications,
      sounds: settingsStore.preferences.sounds,
      language: settingsStore.preferences.language
    });

    const dialog = ref({
      visible: false
    });

    const updateAvatar = (e) => {
      const file = e.target.files[0];
      if (file) {
        const avatarURL = URL.createObjectURL(file);
        userDetails.value.avatar = avatarURL;
        settingsStore.updateUserDetails({ avatar: avatarURL });
      }
    };

    const saveUserDetails = () => {
      settingsStore.updateUserDetails(userDetails.value);
    };

    const savePreferences = () => {
      settingsStore.updatePreferences(preferences.value);
      applyTheme();
      dialog.value.visible = true; // Show success dialog
    };

    const applyTheme = () => {
      const selectedTheme = preferences.value.isDarkTheme ? 'dark' : 'light';
      theme.global.name.value = selectedTheme; // Set theme
    };

    // Watching for theme changes in preferences and apply the new theme
    watch(() => preferences.value.isDarkTheme, (newValue) => {
      applyTheme();
    });

    // Applying the initial theme when component is mounted
    onMounted(() => {
      applyTheme();
    });

    return {
      userDetails,
      preferences,
      updateAvatar,
      saveUserDetails,
      savePreferences,
      applyTheme,
      dialog
    };
  }
};
</script>

<style scoped>
.save-btn {
  margin-top: 16px;
}
</style>

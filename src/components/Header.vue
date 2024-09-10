<template>
  <v-app-bar color="var(--primary-color)" app>
    <v-container>
      <v-row class="header-row" no-gutters>
        <!-- App title -->
        <v-col class="logo-col" cols="auto" @click="goToHome">
          <img src="@/assets/logo-light.svg" alt="logo and link to home" class="header-logo logo" />
          <v-toolbar-title class="slogan">
            <h1>RealEstateCare</h1>
            <p>Caring is in our nature</p>
          </v-toolbar-title>
        </v-col>
        <v-spacer></v-spacer>
        <!-- Settings and notifications icons -->
        <v-col class="icon-col" cols="auto">
 
            <v-icon icon @click="goToNotifications">mdi-bell</v-icon>
   

            <v-icon icon @click="goToSettings">mdi-cog</v-icon>


            <v-icon @click="logout">mdi-logout</v-icon>

        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Header',
  setup() {
    const router = useRouter();

    const goToSettings = () => {
      router.push('/settings');
    };

    const goToNotifications = () => {
      alert('Notifications clicked!');
    };

    const logout = () => {
      localStorage.removeItem('auth');
      router.push('/login');
    };

    const goToHome = () => {
      router.push('/');
    };

    return {
      goToSettings,
      goToNotifications,
      logout,
      goToHome
    };
  },
};
</script>

<style scoped>
.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-col {
  display: flex;
  align-items: center;
  gap: 5px;
}



.slogan {
  color: white;

}

.v-icon {
    color: var(--icon);
    font-size: 1.5rem;
  }




.icon-col {
  display: flex;
  align-items: center;
}

.icon-col .v-btn {
  margin-left: 10px; 
}

@media (max-width: 600px) {
 
  .slogan h1 {
    font-size: 1.2rem; 
  }

  .slogan p {
    font-size: 0.8rem; 
  }

  .v-icon {
   
    margin-left: 5px; 
  }
}
</style>

// vuetify.js
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        primary: 'rgba(0, 6, 10, 1)',
        secondary: 'rgb(0, 133, 125)',
      },
      dark: {
        primary: '#111919',
        secondary: '#03DAC6',
        'on-dark': '#ffffff'      },
    },
    defaultTheme: 'light' 
  }
});

export default vuetify;

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvIfFeFKUJ-MDlKiKCQlZsw2lrWNRT1HI",
  authDomain: "globalautomation-4e1d7.firebaseapp.com",
  projectId: "globalautomation-4e1d7",
  storageBucket: "globalautomation-4e1d7.appspot.com",
  messagingSenderId: "617057397256",
  appId: "1:617057397256:web:34f76ac9d268cd90947fbd",
  measurementId: "G-VT49KWLMEW"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top'
    })),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};

// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkMrrSp7NhxvZytFW3F70k5i1Bl6bmckc',
  authDomain: 'fashion-app-a5cd4.firebaseapp.com',
  projectId: 'fashion-app-a5cd4',
  storageBucket: 'fashion-app-a5cd4.appspot.com',
  messagingSenderId: '346109720702',
  appId: '1:346109720702:web:eaf9c641e405756270802f'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

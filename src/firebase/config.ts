// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// Use environment variables for production deployment
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBI-DUaFGsZp8zDTBKqen3dwV10iaTl3tc",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "innovate-graphicz.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "innovate-graphicz",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "innovate-graphicz.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "308183112275",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:308183112275:web:2ba2e4389de67cc58d44a6",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-7YPRGD7EMD"
};

// Initialize Firebase with error handling
let app;
let analytics;
let auth;
let db;

try {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  auth = getAuth(app);
  db = getFirestore(app);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
  // Fallback initialization
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    console.log('Firebase fallback initialization successful');
  } catch (fallbackError) {
    console.error('Firebase fallback initialization failed:', fallbackError);
    throw new Error('Failed to initialize Firebase');
  }
}

export { app, analytics, auth, db };

// Export types for TypeScript
export interface LeadData {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}

export interface Lead extends LeadData {
  id: string;
}
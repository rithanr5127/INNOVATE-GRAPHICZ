// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// Direct configuration for production deployment
const firebaseConfig = {
  apiKey: "AIzaSyBI-DUaFGsZp8zDTBKqen3dwV10iaTl3tc",
  authDomain: "innovate-graphicz.firebaseapp.com",
  projectId: "innovate-graphicz",
  storageBucket: "innovate-graphicz.firebasestorage.app",
  messagingSenderId: "308183112275",
  appId: "1:308183112275:web:2ba2e4389de67cc58d44a6",
  measurementId: "G-7YPRGD7EMD"
};

// Initialize Firebase with error handling
let app: any;
let analytics: any;
let auth: Auth;
let db: Firestore;

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
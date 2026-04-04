// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, Auth, signOut } from 'firebase/auth';
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

// Export Firebase instances and functions
export { app, analytics, auth, db };

// Export logout function
export const logoutAdmin = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Admin emails for authorization
const ADMIN_EMAILS = [
  "logeshshivakumar200@gmail.com",
  "rgkayal@gmail.com", 
  "rithanr5127@gmail.com",
  "sivaasp1078@gmail.com"
];

// Check if current user is admin
export const isCurrentUserAdmin = (): boolean => {
  const user = auth.currentUser;
  return user ? ADMIN_EMAILS.includes(user.email || '') : false;
};

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
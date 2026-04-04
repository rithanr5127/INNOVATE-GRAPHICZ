// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI-DUaFGsZp8zDTBKqen3dwV10iaTl3tc",
  authDomain: "innovate-graphicz.firebaseapp.com",
  projectId: "innovate-graphicz",
  storageBucket: "innovate-graphicz.firebasestorage.app",
  messagingSenderId: "308183112275",
  appId: "1:308183112275:web:2ba2e4389de67cc58d44a6",
  measurementId: "G-7YPRGD7EMD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

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
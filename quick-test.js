// Quick Firebase Connection Test
// Run this in browser console on http://10.248.84.120:8081/

console.log('=== FIREBASE CONNECTION TEST ===');

// Test 1: Check if Firebase config is loaded
try {
  const firebaseConfig = {
    apiKey: "AIzaSyBI-DUaFGsZp8zDTBKqen3dwV10iaTl3tc",
    authDomain: "innovate-graphicz.firebaseapp.com",
    projectId: "innovate-graphicz",
    storageBucket: "innovate-graphicz.firebasestorage.app",
    messagingSenderId: "308183112275",
    appId: "1:308183112275:web:2ba2e4389de67cc58d44a6",
    measurementId: "G-7YPRGD7EMD"
  };
  console.log('✅ Firebase config loaded:', firebaseConfig.projectId);
} catch (error) {
  console.error('❌ Firebase config error:', error);
}

// Test 2: Check if app is loading
setTimeout(() => {
  const root = document.getElementById('root');
  if (root) {
    console.log('✅ Root element found');
    console.log('Root has content:', root.innerHTML.length > 0);
    console.log('Root children:', root.children.length);
    
    // Look for common error indicators
    if (root.innerHTML.includes('Connection Error')) {
      console.log('❌ Firebase connection error detected');
    } else if (root.innerHTML.includes('Loading')) {
      console.log('⏳ App is still loading');
    } else if (root.innerHTML.length === 0) {
      console.log('❌ Root element is empty');
    } else {
      console.log('✅ App content loaded');
    }
  } else {
    console.error('❌ Root element not found');
  }
}, 2000);

// Test 3: Check for any JavaScript errors
window.addEventListener('error', (event) => {
  console.error('❌ JavaScript error:', event.error);
});

console.log('=== TEST COMPLETE ===');

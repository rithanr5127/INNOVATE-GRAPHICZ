// Production Debug Script
// Add this to your browser console on the production site

console.log('=== PRODUCTION DEBUG ===');

// Check Firebase initialization
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
  console.log('Firebase Config:', firebaseConfig);
} catch (error) {
  console.error('Firebase config error:', error);
}

// Check if DOM elements exist
console.log('Root element:', document.getElementById('root'));
console.log('Current URL:', window.location.href);
console.log('User agent:', navigator.userAgent);

// Check React app
setTimeout(() => {
  const root = document.getElementById('root');
  if (root) {
    console.log('Root content:', root.innerHTML.length > 0 ? 'Content loaded' : 'Empty root');
    console.log('Root children:', root.children.length);
  }
}, 2000);

// Check for errors
window.addEventListener('error', (event) => {
  console.error('JavaScript error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

console.log('=== DEBUG COMPLETE ===');

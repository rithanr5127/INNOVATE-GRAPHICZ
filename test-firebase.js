// Firebase Connection Test
// Run this in browser console to test Firebase setup

async function testFirebaseConnection() {
  console.log('=== TESTING FIREBASE CONNECTION ===');
  
  try {
    // Test Firebase import
    const { auth } = await import('./src/firebase/config.ts');
    console.log('✅ Firebase auth imported successfully');
    
    // Test auth state
    const currentUser = auth.currentUser;
    console.log('Current user:', currentUser);
    
    // Test admin login function
    const { loginAdmin } = await import('./src/firebase/auth.ts');
    console.log('✅ Admin login function imported successfully');
    
    console.log('Firebase connection test passed!');
    return true;
  } catch (error) {
    console.error('❌ Firebase connection test failed:', error);
    return false;
  }
}

// Test admin emails
function testAdminEmails() {
  const adminEmails = [
    "logeshshivakumar200@gmail.com",
    "rgkayal@gmail.com", 
    "rithanr5127@gmail.com",
    "sivaasp1078@gmail.com"
  ];
  
  console.log('Authorized admin emails:', adminEmails);
  return adminEmails;
}

// Run tests
testFirebaseConnection();
testAdminEmails();

console.log('=== TEST COMPLETE ===');

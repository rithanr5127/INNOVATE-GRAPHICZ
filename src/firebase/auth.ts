import { signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from './config';

const ADMIN_EMAILS = [
  "logeshshivakumar200@gmail.com",
  "rgkayal@gmail.com", 
  "rithanr5127@gmail.com",
  "sivaasp1078@gmail.com"
];

// Admin login function with email validation
export const loginAdmin = async (email: string, password: string) => {
  try {
    // Check if email is in admin list before attempting login
    if (!ADMIN_EMAILS.includes(email)) {
      throw new Error('Access Denied: This email is not authorized for admin access.');
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    // Double-check the authenticated user email
    if (!ADMIN_EMAILS.includes(userCredential.user.email || '')) {
      throw new Error('Access Denied: Authentication failed.');
    }
    
    return userCredential.user;
  } catch (error: any) {
    // Provide more specific error messages
    if (error.code === 'auth/user-not-found') {
      throw new Error('User not found. Please check your email.');
    } else if (error.code === 'auth/wrong-password') {
      throw new Error('Incorrect password. Please try again.');
    } else if (error.code === 'auth/invalid-email') {
      throw new Error('Invalid email format.');
    } else if (error.message.includes('Access Denied')) {
      throw error; // Re-throw our custom access denied message
    } else {
      throw new Error('Login failed. Please try again.');
    }
  }
};

// Admin logout function
export const logoutAdmin = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Get current authenticated user
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

// Check if current user is admin
export const isCurrentUserAdmin = (): boolean => {
  const user = auth.currentUser;
  return user ? ADMIN_EMAILS.includes(user.email || '') : false;
};

// Get admin email list
export const getAdminEmails = (): string[] => {
  return [...ADMIN_EMAILS];
};

// Authentication state observer
export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  return auth.onAuthStateChanged(callback);
};

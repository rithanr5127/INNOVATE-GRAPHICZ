# Firebase Setup Guide for INNOVATE GRAPHICZ

This guide will help you set up Firebase for the contact management system.

## 🚀 Quick Setup (5 minutes)

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `innovate-graphicz`
4. Enable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Firebase Services

#### Enable Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for now)
4. Select a location (choose closest to your users)
5. Click "Create database"

#### Enable Authentication
1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Enable "Email/Password" sign-in method
4. Click "Save"

### 3. Get Firebase Configuration

1. In Firebase Console, go to Project Settings (gear icon)
2. Under "Your apps", click the web icon (</>)
3. Enter app name: "INNOVATE GRAPHICZ Web"
4. Click "Register app"
5. Copy the Firebase configuration object
6. Update the config in `/src/firebase/config.ts`

### 4. Update Firebase Configuration

Replace the placeholder config in `/src/firebase/config.ts`:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "your-app-id"
};
```

### 5. Create Admin Users

The system is configured to only allow these 4 specific Gmail addresses as admins:

**Authorized Admin Emails:**
- logeshshivakumar200@gmail.com
- rgkayal@gmail.com
- rithanr5127@gmail.com
- sivaasp1078@gmail.com

#### Method 1: Firebase Console (Recommended)
1. Go to Firebase Console → Authentication
2. Click "Add user"
3. Add each of the 4 admin emails with their passwords
4. Click "Add user" for each

#### Method 2: Use Existing Google Accounts
Since these are Gmail addresses, users can:
1. Go to `/admin/login`
2. Enter their Gmail and password
3. System will automatically verify they're authorized admins

### 6. Set Up Firestore Security Rules

Go to Firestore Database → Rules and replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Anyone can read/write leads (for contact form)
    match /leads/{leadId} {
      allow read, write: if request.auth == null;
    }
    
    // Only authenticated admins can delete leads
    match /leads/{leadId} {
      allow delete: if request.auth != null;
    }
  }
}
```

## 🔧 Development Setup

### Install Dependencies
```bash
npm install firebase
```

### Run the Application
```bash
npm run dev
```

### Test the System
1. Go to `http://localhost:5173`
2. Fill out the contact form
3. Check Firestore Database to see the lead
4. Go to `/admin/login` and log in
5. View leads in admin dashboard

## 📱 Features Available

### Contact Form
- ✅ Real-time form submission
- ✅ Firebase Firestore integration
- ✅ Loading states and error handling
- ✅ Success messages

### Admin Dashboard
- ✅ Secure authentication
- ✅ Real-time lead updates
- ✅ Search and filter functionality
- ✅ Delete lead capability
- ✅ Responsive design

### Navigation
- ✅ Admin login button in navbar
- ✅ Mobile-responsive admin menu
- ✅ Authentication state management

## 🚀 Production Deployment

### Update Security Rules for Production
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Contact form submissions (write-only for public)
    match /leads/{leadId} {
      allow create: if request.auth == null;
      allow read, delete: if request.auth != null;
    }
  }
}
```

### Environment Variables
For production, consider using environment variables for Firebase config:

```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## 🎯 Admin Credentials

The system is pre-configured to only allow these 4 specific Gmail addresses as admins:

**Authorized Admin Emails:**
- logeshshivakumar200@gmail.com
- rgkayal@gmail.com
- rithanr5127@gmail.com
- sivaasp1078@gmail.com

Each admin needs to:
1. Create their Firebase Authentication account
2. Use their existing Gmail credentials
3. The system will automatically verify authorization

## 📞 Support

If you need help:
1. Check Firebase documentation
2. Verify Firebase configuration
3. Ensure all services are enabled
4. Check browser console for errors

## 🔒 Security Notes

- Change default admin password
- Update security rules for production
- Monitor Firebase usage
- Regularly backup important data

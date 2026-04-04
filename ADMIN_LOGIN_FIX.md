# 🔧 Admin Login Setup Guide

## 🚨 **Admin Login Not Working? Follow These Steps**

### **Step 1: Check Firebase Console**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your `innovate-graphicz` project
3. Go to **Authentication** section

### **Step 2: Enable Email/Password Authentication**

1. Click **"Sign-in method"** tab
2. Find **"Email/Password"** provider
3. Click **"Enable"** if it's disabled
4. Click **"Save"**

### **Step 3: Create Admin Users**

**Method 1: Add Users Manually**
1. Go to **"Users"** tab in Authentication
2. Click **"Add user"**
3. Add each admin email:
   - logeshshivakumar200@gmail.com
   - rgkayal@gmail.com
   - rithanr5127@gmail.com
   - sivaasp1078@gmail.com
4. Set passwords for each user
5. Click **"Add user"**

**Method 2: Test with Any Email First**
1. Create a test user with any email/password
2. Try logging in at `/admin/login`
3. If it works, then add your 4 admin emails

### **Step 4: Verify Setup**

**Check Authentication Status:**
1. In Firebase Console → Authentication → Users
2. You should see your admin users listed
3. Status should show "Enabled"

**Test Login Process:**
1. Go to your site → `/admin/login`
2. Enter one of the admin emails and password
3. Click "Sign In"
4. Should redirect to `/admin/dashboard`

### **Step 5: Debug If Still Not Working**

**Check Browser Console:**
1. Open DevTools (F12)
2. Go to Console tab
3. Try logging in
4. Look for error messages

**Common Errors:**
- `auth/user-not-found` → User doesn't exist in Firebase
- `auth/wrong-password` → Incorrect password
- `auth/email-already-in-use` → User already exists
- `Access Denied` → Email not in authorized list

### **Step 6: Test with Debug Script**

1. Open your site
2. Open browser console
3. Run the test script from `test-firebase.js`
4. Check for connection issues

## 🎯 **Quick Fix Checklist**

- [ ] Firebase Authentication enabled
- [ ] Email/Password sign-in method enabled
- [ ] Admin users created in Firebase
- [ ] Admin emails match exactly (case-sensitive)
- [ ] No typos in email addresses
- [ ] Passwords are correct

## 🚀 **Once Setup is Complete**

Your admin login should work with:
- ✅ Any of the 4 authorized Gmail addresses
- ✅ Correct passwords
- ✅ Firebase Authentication enabled
- ✅ Users created in Firebase Console

## 📞 **If Issues Persist**

1. **Check Firebase project settings**
2. **Verify API keys are correct**
3. **Ensure Authentication is enabled**
4. **Create test user first**
5. **Check browser console errors**

**The admin login will work once Firebase Authentication is properly configured!**

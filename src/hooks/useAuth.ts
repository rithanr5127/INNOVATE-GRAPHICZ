import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser: User | null) => {
      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      const { logoutAdmin } = await import('../firebase/auth');
      await logoutAdmin();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return {
    user,
    loading,
    logout,
    isAuthenticated: !!user
  };
};

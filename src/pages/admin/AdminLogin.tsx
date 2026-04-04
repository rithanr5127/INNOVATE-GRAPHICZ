import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, ArrowLeft, Home } from 'lucide-react';
import { loginAdmin, testLogin } from '../../firebase/auth';
import { useAuth } from '../../hooks/useAuth';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleBackToHome = () => {
    navigate('/');
  };

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate('/admin/dashboard');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Use testLogin temporarily for debugging
      await testLogin(email, password);
      navigate('/admin/dashboard');
    } catch (error: any) {
      setError(error.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 dot-grid opacity-[0.02]" />
      </div>
      
      {/* Back to Home Button */}
      <button
        onClick={handleBackToHome}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <Home className="w-4 h-4" />
        <span className="text-sm">Back to Home</span>
      </button>
      
      <div className="w-full max-w-md">
        <div className="dark-card rounded-3xl p-8 border border-gray-800">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-gray-400">Enter your credentials to access the dashboard</p>
          </div>

          {error && (
            <div className="mb-6 rounded-xl border border-red-500 bg-red-500/10 p-4 text-center">
              <p className="text-sm font-semibold text-red-500">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-600"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-600"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              Contact your administrator if you need access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

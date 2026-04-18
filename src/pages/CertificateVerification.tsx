import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, CheckCircle, XCircle, Loader2, Download, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface Certificate {
  id: string;
  name: string;
  domain: string;
  issueDate: string;
  status: string;
}

const CertificateVerification = () => {
  const [credentialId, setCredentialId] = useState('');
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFound, setIsFound] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const navigate = useNavigate();

  const handleVerify = async () => {
    if (!credentialId.trim()) {
      setError('Please enter a Credential ID');
      return;
    }

    setIsLoading(true);
    setError(null);
    setCertificate(null);
    setIsFound(false);

    try {
      // Fetch certificates data
      const response = await fetch('/data/certificates.json');
      const data = await response.json();
      
      // Search for matching certificate
      const foundCertificate = data.certificates.find(
        (cert: Certificate) => cert.id === credentialId.trim()
      );

      if (foundCertificate) {
        setCertificate(foundCertificate);
        setIsFound(true);
      } else {
        setError('Invalid Certificate');
        setIsFound(false);
      }
    } catch (err) {
      setError('Failed to verify certificate. Please try again.');
      setIsFound(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  const handleViewCertificate = () => {
    setShowCertificate(true);
  };

  const handleDownloadCertificate = () => {
    if (certificate) {
      const link = document.createElement('a');
      link.href = `/data/${certificate.id}.pdf`;
      link.download = `${certificate.id}_certificate.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 dot-grid opacity-[0.02]" />
      </div>
      
      <Navigation />
      
      <main className="py-20">
        <div className="mx-auto max-w-2xl px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Certificate Verification – Innovate Graphicz
            </h1>
            <p className="text-lg text-gray-400">
              Verify the authenticity of certificates issued by Innovate Graphicz
            </p>
          </div>

          {/* Verification Form */}
          <div className="dark-card rounded-3xl p-8 border border-gray-800">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">
                  Enter Credential ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={credentialId}
                    onChange={(e) => setCredentialId(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your certificate ID"
                    className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    disabled={isLoading}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <button
                onClick={handleVerify}
                disabled={isLoading || !credentialId.trim()}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify Certificate
                  </>
                )}
              </button>

              {/* Error Message */}
              {error && (
                <div className="mt-6 rounded-xl border border-red-500 bg-red-500/10 p-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-500 font-semibold">{error}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Certificate Result Card */}
          {isFound && certificate && (
            <div className="mt-8 dark-card rounded-3xl p-8 border border-gray-800 transform transition-all duration-500 animate-pulse">
              <div className="flex items-center justify-center mb-6">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Certificate Verified !
                </h2>
                <p className="text-gray-400">
                  This certificate is authentic and valid
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Certificate ID:</span>
                  <span className="text-white font-medium">{certificate.id}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white font-medium">{certificate.name}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Domain:</span>
                  <span className="text-white font-medium">{certificate.domain}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">Issue Date:</span>
                  <span className="text-white font-medium">{certificate.issueDate}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-400">Status:</span>
                  <span className="flex items-center gap-2 text-green-500 font-medium">
                    Verified 
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleViewCertificate}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-blue-500 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105"
                >
                  <Eye className="w-4 h-4" />
                  View Certificate
                </button>
                <button
                  onClick={handleDownloadCertificate}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full border border-blue-500 bg-transparent py-3 text-sm font-semibold text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          )}

          {/* Certificate PDF Viewer Modal */}
          {showCertificate && certificate && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
              <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700">
                <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">Certificate - {certificate.id}</h3>
                  <button
                    onClick={() => setShowCertificate(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-4 overflow-auto" style={{ maxHeight: 'calc(90vh - 120px)' }}>
                  <iframe
                    src={`/data/${certificate.id}.pdf`}
                    className="w-full h-full rounded-lg"
                    style={{ minHeight: '600px' }}
                    title={`Certificate ${certificate.id}`}
                  />
                </div>
                <div className="p-4 border-t border-gray-700">
                  <button
                    onClick={handleDownloadCertificate}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-blue-500 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    Download Certificate
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CertificateVerification;

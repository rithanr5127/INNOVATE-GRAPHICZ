import { useState } from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { addLead } from "../firebase/firestore";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.mobile.trim()) errs.mobile = "Mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s/g, ''))) errs.mobile = "Invalid mobile number";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    
    if (Object.keys(errs).length === 0) {
      setLoading(true);
      try {
        // Save to Firebase
        await addLead({
          name: form.name,
          email: form.email,
          phone: form.mobile,
          message: form.message
        });
        
        setSubmitted(true);
        setForm({ name: "", email: "", mobile: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ ...errs, submit: 'Failed to submit form. Please try again.' });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section id="contact" className="enterprise-section relative">
      <div className="enterprise-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="section-kicker mb-4">Talk To Specialists</p>
          <h2 className="section-title">
            Ready To Build Your <span className="text-blue-500">Brand?</span>
          </h2>
          <p className="mt-4 text-gray-500">Share your priorities and we will return a structured roadmap with timeline, team shape, and budget options.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form Section - Left */}
          <div className="dark-card rounded-3xl p-8 lg:p-12 border border-gray-800 hover-lift transition-all duration-300">
            {submitted && (
              <div className="mb-6 rounded-xl border border-blue-500 bg-blue-500/10 p-4 text-center">
                <p className="text-sm font-semibold text-blue-500">Thank you! We'll be in touch soon.</p>
              </div>
            )}
            {errors.submit && (
              <div className="mb-6 rounded-xl border border-red-500 bg-red-500/10 p-4 text-center">
                <p className="text-sm font-semibold text-red-500">{errors.submit}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-600"
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-600"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-600"
                />
                {errors.mobile && <p className="mt-1.5 text-xs text-red-500">{errors.mobile}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Your Message</label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-600"
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Section - Right */}
          <div className="space-y-8">
            <div className="dark-card rounded-3xl p-8 lg:p-12 border border-gray-800 hover-lift transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 mb-8">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">info.innovategraphicz@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                    <Phone className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">+91 9361312255</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                    <MapPin className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Workspace</h4>
                    <p className="text-gray-400">KPRCAS INCUBATION HUB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark-card rounded-3xl p-8 border border-gray-800 hover-lift transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

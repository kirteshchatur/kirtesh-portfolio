import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, ArrowUpRight, Loader2 } from 'lucide-react';
import { socials } from '../data/socials';
import { personalInfo } from '../data/personal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Your name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus('loading');

    // Check if external Formspree service is configured via environment variable
    const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID;

    if (formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setFeedbackMessage('Thank you! Your message has been sent successfully.');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Service response not ok');
        }
      } catch (err) {
        setStatus('error');
        setFeedbackMessage('Failed to send via service. Please email me directly below.');
      }
    } else {
      // Safe fallback: Simulate validation and open standard mailto client
      setTimeout(() => {
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

        setStatus('success');
        setFeedbackMessage('Validation passed! Prepared in your default email client. You can also send directly to chaturkirtesh@gmail.com.');
        setFormData({ name: '', email: '', message: '' });
      }, 600);
    }
  };

  return (
    <section id="contact" aria-label="Contact Section" className="py-24 border-t border-zinc-200/70 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Have an idea, opportunity, or project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Action & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I am open to full-stack, software engineering, and AI-focused internships, as well as freelance web development collaborations.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-[#121217] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-400">Email Directly</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{personalInfo.email}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </a>

              <a
                href="https://github.com/kirteshchatur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-[#121217] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-400">GitHub Profile</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">github.com/kirteshchatur</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/kirtesh-chatur-6b08332a6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-[#121217] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-400">LinkedIn</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Kirtesh Chatur</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500">
              📍 Based in Pune, Maharashtra, India (IST / UTC+5:30)
            </div>
          </div>

          {/* Right Column: Accessible Form with Validation */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121217] border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm space-y-6"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border ${
                    errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-zinc-200 dark:border-zinc-700/60'
                  } text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@organization.com"
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border ${
                    errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-zinc-200 dark:border-zinc-700/60'
                  } text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, internship opportunity, or idea..."
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border ${
                    errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-zinc-200 dark:border-zinc-700/60'
                  } text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-y`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Status feedback */}
              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md disabled:opacity-50 focus:ring-2 focus:ring-blue-500"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

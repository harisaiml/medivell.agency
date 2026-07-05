import { motion } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
    }, 1000);
  };

  return (
    <div className="w-full flex-1 flex flex-col justify-center py-20 px-6">
      <div className="max-w-xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter font-display mb-4 uppercase">Let's Talk</h1>
          <p className="text-lg text-[var(--color-text-muted)]">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[var(--color-bg-card)] p-8 md:p-10 border border-[var(--color-border-subtle)]"
        >
          {formState === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[var(--color-primary)]/20 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-6 border border-[var(--color-primary)]/50">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-display mb-2">Message Sent</h3>
              <p className="text-[var(--color-text-muted)]">We've received your inquiry and will be in touch shortly.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-8 text-[var(--color-primary)] font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-light)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 min-h-[44px] bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] focus:outline-none focus:border-[var(--color-primary)] transition-all text-[var(--color-text-light)] placeholder-[var(--color-text-muted)]"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-light)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 min-h-[44px] bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] focus:outline-none focus:border-[var(--color-primary)] transition-all text-[var(--color-text-light)] placeholder-[var(--color-text-muted)]"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-light)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] focus:outline-none focus:border-[var(--color-primary)] transition-all text-[var(--color-text-light)] placeholder-[var(--color-text-muted)] resize-y"
                  placeholder="Tell us about your project or the bottleneck you want to solve..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full min-h-[44px] px-8 py-4 border border-[var(--color-primary)] bg-[var(--color-primary)] text-black text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-[var(--color-primary)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

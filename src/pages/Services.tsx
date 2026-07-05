import { motion } from 'motion/react';
import { Code2, Layers, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Services() {
  return (
    <div className="w-full">
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[var(--color-border-subtle)]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tighter font-display mb-6 uppercase"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed"
        >
          We build robust, scalable systems that handle the heavy lifting, so you can focus on growing your business.
        </motion.p>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-32">
          
          {/* Web Development */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            <div>
              <div className="w-16 h-16 bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-8">
                <Code2 size={32} className="text-[var(--color-primary)]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter font-display mb-6 uppercase">Web Development</h2>
              <div className="space-y-4 text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
                <p>
                  Your website is often the first point of contact. If it’s slow, generic, or hard to navigate, you are losing money.
                </p>
                <p>
                  We don't use clunky templates. We build custom, lightning-fast, and responsive websites designed specifically for your brand and your conversion goals. Every line of code serves a purpose.
                </p>
              </div>
              <ul className="space-y-3 mb-10">
                {['Custom Design & Architecture', 'Performance Optimization', 'SEO-Ready Structure', 'Mobile-First Responsive Layout'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--color-text-light)] font-medium">
                    <CheckCircle2 size={20} className="text-[var(--color-primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] lg:h-[500px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-border-subtle)_0%,_transparent_70%)] opacity-30"></div>
               <Code2 size={120} className="text-[var(--color-primary)] opacity-10" />
               <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent"></div>
            </div>
          </motion.div>

          {/* SaaS Building */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            <div className="order-2 lg:order-1 relative h-[400px] lg:h-[500px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-border-subtle)_0%,_transparent_70%)] opacity-30"></div>
               <Layers size={120} className="text-[var(--color-primary)] opacity-10" />
               <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-8">
                <Layers size={32} className="text-[var(--color-primary)]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter font-display mb-6 uppercase">SaaS Building</h2>
              <div className="space-y-4 text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
                <p>
                  Off-the-shelf software rarely fits your exact workflow perfectly. You end up adapting your business to the tool, rather than the tool serving your business.
                </p>
                <p>
                  We engineer full custom software products built entirely around your specific needs. From internal dashboards to client-facing portals, we build the exact tool you've been wishing existed.
                </p>
              </div>
              <ul className="space-y-3 mb-10">
                {['Custom Business Logic', 'Scalable Cloud Architecture', 'Secure Authentication', 'Third-Party API Integrations'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--color-text-light)] font-medium">
                    <CheckCircle2 size={20} className="text-[var(--color-primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Lead Gen Automations */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            <div>
              <div className="w-16 h-16 bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-8">
                <Zap size={32} className="text-[var(--color-primary)]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter font-display mb-6 uppercase">Lead Gen Automations</h2>
              <div className="space-y-4 text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
                <p>
                  Manual lead follow-up is a massive time sink. If you aren't responding within minutes, leads go elsewhere.
                </p>
                <p>
                  We build AI-powered automation systems (using platforms like n8n) that instantly capture incoming leads, qualify them via conversational AI, and route the best ones straight to your calendar. You wake up to booked meetings, not a full inbox.
                </p>
              </div>
              <ul className="space-y-3 mb-10">
                {['Instant Lead Capture', 'AI Qualification Routing', 'Automated CRM Updates', 'Calendar Booking Integration'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--color-text-light)] font-medium">
                    <CheckCircle2 size={20} className="text-[var(--color-primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] lg:h-[500px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-border-subtle)_0%,_transparent_70%)] opacity-30"></div>
               <Zap size={120} className="text-[var(--color-primary)] opacity-10" />
               <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-[var(--color-bg-card)] border-t border-[var(--color-border-subtle)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-display mb-4 uppercase">How We Work</h2>
            <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">A streamlined, transparent process designed to get you results faster.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-subtle)] to-transparent z-0"></div>
            
            {[
              { step: "01", title: "Discovery", desc: "We map out your exact bottlenecks and define the scope." },
              { step: "02", title: "Build", desc: "We engineer your custom solution with regular progress updates." },
              { step: "03", title: "Launch", desc: "Rigorous testing followed by deployment and team onboarding." },
              { step: "04", title: "Support", desc: "Ongoing maintenance and iterative improvements." },
            ].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 bg-[var(--color-bg-card)]"
              >
                <div className="w-12 h-12 bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-primary)] font-bold mb-6 mx-auto md:mx-0">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-center md:text-left">{phase.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] text-center md:text-left">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter font-display mb-6 uppercase">Let's build something that works.</h2>
        <a 
          href="https://calendly.com/harismoti77/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--color-primary)] bg-[var(--color-primary)] text-black text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-[var(--color-primary)] transition-colors"
        >
          Start Your Project <ArrowRight size={16} />
        </a>
      </section>
    </div>
  );
}

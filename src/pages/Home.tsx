import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Code2, Layers, Zap, ArrowRight, Activity, Cpu } from 'lucide-react';

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[10%] left-[15%] text-[var(--color-primary)] opacity-20 blur-[1px]"
      >
        <Code2 size={64} />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-[40%] right-[10%] text-[var(--color-primary)] opacity-20 blur-[2px] hidden md:block"
      >
        <Layers size={80} />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 8, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[20%] left-[25%] text-[var(--color-primary)] opacity-15 blur-[1px]"
      >
        <Zap size={48} />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-[20%] right-[25%] text-[var(--color-primary)] opacity-15 blur-[1px]"
      >
        <Activity size={56} />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-[30%] right-[30%] text-[var(--color-primary)] opacity-10 blur-[3px] hidden md:block"
      >
        <Cpu size={72} />
      </motion.div>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 15;
      const duration = 1500;
      const incrementTime = Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="text-center py-24 border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-card)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-6xl md:text-8xl font-display font-bold text-[var(--color-primary)] mb-4">
          {count}+
        </div>
        <div className="text-xl md:text-2xl text-[var(--color-text-muted)] font-medium">
          Hours Saved Per Week
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 overflow-hidden">
        <FloatingIcons />
        <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-sm mb-6"
          >
            <span className="text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-[0.2em]">Development & Automation Agency</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-extrabold font-display mb-6 leading-[0.95] tracking-tighter"
          >
            WE BUILD<br />
            <span className="text-[var(--color-primary)]">SYSTEMS</span> THAT<br />
            MAKE MONEY.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We build custom websites, SaaS products, and AI-powered lead generation automations for founders who want results, not buzzwords.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="https://calendly.com/harismoti77/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Book a Call <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Counter />

      {/* Services Snapshot */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-display mb-4 tracking-tighter">Core Services</h2>
          <p className="text-[var(--color-text-muted)] text-lg">Everything you need to capture, convert, and scale.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Code2 size={20} className="text-[var(--color-primary)]" />,
              title: "Web Development",
              desc: "Custom-built, fast, and responsive websites that convert visitors into clients.",
              number: "01"
            },
            {
              icon: <Layers size={20} className="text-[var(--color-primary)]" />,
              title: "SaaS Building",
              desc: "Full custom software products engineered end-to-end for your specific workflow.",
              number: "02"
            },
            {
              icon: <Zap size={20} className="text-[var(--color-primary)]" />,
              title: "Lead Gen Automations",
              desc: "AI-powered systems that capture leads, qualify them, and route them to sales automatically.",
              number: "03"
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-[var(--color-primary)]/50 transition-colors group cursor-default"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] flex items-center justify-center group-hover:scale-110 transition-transform origin-left duration-300">
                  {service.icon}
                </div>
                <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-tighter">{service.number} / Service</span>
              </div>
              <h3 className="text-lg font-bold font-display mb-1">{service.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="py-24 px-6 bg-[var(--color-bg-card)] border-t border-[var(--color-border-subtle)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-display mb-4">Proven Results</h2>
              <p className="text-[var(--color-text-muted)] text-lg">Real systems we've built for real businesses.</p>
            </div>
            <NavLink to="/projects" className="inline-flex items-center gap-2 text-[var(--color-text-light)] text-xs font-bold uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors">
              View all case studies <ArrowRight size={16} />
            </NavLink>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group block border border-[var(--color-border-subtle)] bg-[var(--color-bg-dark)] overflow-hidden"
            >
              <div className="h-64 bg-[#111] border-b border-[var(--color-border-subtle)] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] group-hover:opacity-40 transition-opacity duration-500"></div>
                <Zap size={64} className="text-[var(--color-primary)] opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="p-8">
                <div className="text-sm font-medium text-[var(--color-primary)] mb-2">Fitness Coaching</div>
                <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-[var(--color-primary)] transition-colors">Automated Lead Qualification</h3>
                <p className="text-[var(--color-text-muted)]">Reclaimed 15 hrs/week previously spent on manual follow-up and admin.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group block border border-[var(--color-border-subtle)] bg-[var(--color-bg-dark)] overflow-hidden"
            >
              <div className="h-64 bg-[#111] border-b border-[var(--color-border-subtle)] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] group-hover:opacity-40 transition-opacity duration-500"></div>
                <Layers size={64} className="text-[var(--color-primary)] opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="p-8">
                <div className="text-sm font-medium text-[var(--color-primary)] mb-2">Real Estate</div>
                <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-[var(--color-primary)] transition-colors">Client Onboarding Portal</h3>
                <p className="text-[var(--color-text-muted)]">Reclaimed 15 hrs/week through automation of lead handling and document collection.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">READY TO STOP WASTING TIME?</h2>
        <p className="text-xl text-[var(--color-text-muted)] mb-10">Let's build the system your business needs to scale without the friction.</p>
        <a 
          href="https://calendly.com/harismoti77/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--color-primary)] bg-[var(--color-primary)] text-black text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-[var(--color-primary)] transition-colors"
        >
          Book Your Strategy Call <ArrowRight size={16} />
        </a>
      </section>
    </div>
  );
}

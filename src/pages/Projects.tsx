import { motion } from 'motion/react';
import { Zap, Layers, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="w-full">
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[var(--color-border-subtle)]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tighter font-display mb-6 uppercase"
        >
          Featured Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed"
        >
          Real systems built for real businesses. See how we've helped founders eliminate friction and scale their operations.
        </motion.p>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24">
          
          {/* Case Study 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="relative h-[400px] lg:h-[600px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] overflow-hidden flex flex-col">
              <div className="flex-1 bg-[#111] relative overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_60%)] opacity-20"></div>
                
                {/* Abstract UI representation */}
                <div className="w-full max-w-sm bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] shadow-2xl relative z-10 overflow-hidden">
                  <div className="h-8 border-b border-[var(--color-border-subtle)] flex items-center px-3 gap-2 bg-[#1a1a1a]">
                    <div className="w-2.5 h-2.5 bg-[var(--color-border-subtle)]"></div>
                    <div className="w-2.5 h-2.5 bg-[var(--color-border-subtle)]"></div>
                    <div className="w-2.5 h-2.5 bg-[var(--color-border-subtle)]"></div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="h-4 w-1/3 bg-[var(--color-border-subtle)]"></div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Zap size={16} className="text-[var(--color-primary)]" />
                        <div className="h-3 w-full bg-[var(--color-text-muted)] opacity-20"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Zap size={16} className="text-[var(--color-primary)]" />
                        <div className="h-3 w-3/4 bg-[var(--color-text-muted)] opacity-20"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Zap size={16} className="text-[var(--color-primary)]" />
                        <div className="h-3 w-5/6 bg-[var(--color-text-muted)] opacity-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                Lead Gen Automation
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-display mb-8 uppercase">Fitness Coach</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold font-display mb-3 text-[var(--color-text-light)]">The Problem</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    The client was spending hours every evening manually replying to DMs, asking qualifying questions, and trying to book consultation calls. High-intent leads were going cold because they weren't getting immediate responses during the day while the coach was training clients.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold font-display mb-3 text-[var(--color-text-light)]">What We Built</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    We implemented an AI-powered conversational automation system. When a lead DMs a specific trigger word, the system instantly engages them, asks 3 qualifying questions about their fitness goals and budget, and automatically sends a booking link only to qualified prospects.
                  </p>
                </div>

                <div className="p-6 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20">
                  <h3 className="text-lg font-bold font-display mb-2 text-[var(--color-primary)]">The Result</h3>
                  <p className="text-[var(--color-text-light)] font-medium text-lg">
                    Reclaimed 15+ hours per week and increased call booking rate by 40% due to instant, 24/7 responses.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Study 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                SaaS Building
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-display mb-8 uppercase">Real Estate Agency</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold font-display mb-3 text-[var(--color-text-light)]">The Problem</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    The agency was tracking clients, properties, and documents across scattered Google Sheets and endless email threads. Agents were dropping the ball on follow-ups, and the onboarding process for new buyers was chaotic and unprofessional.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold font-display mb-3 text-[var(--color-text-light)]">What We Built</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    We built a custom internal portal and client-facing dashboard. The system automates lead intake, generates personalized property digest emails, and provides a secure portal for clients to upload required documents. Alerts trigger automatically when actions are needed.
                  </p>
                </div>

                <div className="p-6 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20">
                  <h3 className="text-lg font-bold font-display mb-2 text-[var(--color-primary)]">The Result</h3>
                  <p className="text-[var(--color-text-light)] font-medium text-lg">
                    Reclaimed 15+ hours per week of admin work per agent and drastically improved the perceived professionalism for high-net-worth clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] overflow-hidden flex flex-col">
              <div className="flex-1 bg-[#111] relative overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_60%)] opacity-20"></div>
                
                {/* Abstract UI representation */}
                <div className="w-full max-w-sm bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] shadow-2xl relative z-10 overflow-hidden flex flex-col h-64">
                  <div className="h-8 border-b border-[var(--color-border-subtle)] flex items-center px-3 gap-2 bg-[#1a1a1a]">
                    <div className="w-2.5 h-2.5 bg-[var(--color-border-subtle)]"></div>
                    <div className="w-2.5 h-2.5 bg-[var(--color-border-subtle)]"></div>
                    <div className="w-2.5 h-2.5 bg-[var(--color-border-subtle)]"></div>
                  </div>
                  <div className="flex flex-1">
                    <div className="w-16 border-r border-[var(--color-border-subtle)] bg-[#141414] p-3 flex flex-col gap-3 items-center">
                      <Layers size={16} className="text-[var(--color-primary)]" />
                      <div className="w-6 h-6 bg-[var(--color-border-subtle)]"></div>
                      <div className="w-6 h-6 bg-[var(--color-border-subtle)]"></div>
                    </div>
                    <div className="flex-1 p-5 space-y-4">
                      <div className="flex gap-3">
                        <div className="h-20 flex-1 bg-[var(--color-border-subtle)] border border-[var(--color-border-subtle)]/50"></div>
                        <div className="h-20 flex-1 bg-[var(--color-border-subtle)] border border-[var(--color-border-subtle)]/50"></div>
                      </div>
                      <div className="h-4 w-1/4 bg-[var(--color-text-muted)] opacity-30 mt-4"></div>
                      <div className="space-y-2 mt-2">
                        <div className="h-8 w-full bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)]"></div>
                        <div className="h-8 w-full bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <section className="py-32 px-6 text-center max-w-4xl mx-auto border-t border-[var(--color-border-subtle)]">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter font-display mb-6 uppercase">Want results like these?</h2>
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

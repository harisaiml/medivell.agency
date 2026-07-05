import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-dark)]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--color-primary)] flex items-center justify-center rounded-sm">
            <span className="text-black font-black text-xl">M</span>
          </div>
          <span className="text-2xl font-bold tracking-tight uppercase">Medivell</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-widest uppercase transition-colors hover:text-[var(--color-primary)] ${
                  isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://calendly.com/harismoti77/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-colors"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-light)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium tracking-widest uppercase transition-colors hover:text-[var(--color-primary)] ${
                      isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="https://calendly.com/harismoti77/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center w-full px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-colors"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-dark)] text-[var(--color-text-light)]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="px-6 py-6 border-t border-[var(--color-border-subtle)] z-10 flex flex-col md:flex-row justify-between items-center gap-4 bg-[var(--color-bg-dark)] max-w-7xl mx-auto w-full">
        <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest font-medium text-center md:text-left">
          © 2024 Medivell Agency — Confident Technical Excellence
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.2em] mb-1">Project Status</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest">Accepting New Builds</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

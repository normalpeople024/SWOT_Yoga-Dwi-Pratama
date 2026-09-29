import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091714] text-[#F3F0E8] py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: Copyright & Title */}
          <div className="flex items-center gap-3 text-xs sm:text-sm text-white/60">
            <span>© 2026 Yoga Dwi Pratama</span>
            <span className="text-white/20">·</span>
            <span className="hidden sm:inline text-white/40">Analisis SWOT Diri • Kecakapan Antar Personal</span>
          </div>

          {/* Right: Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-[#C76F45] text-white transition-colors cursor-pointer"
            title="Return to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { ArrowDown, ArrowUpRight, Zap, TriangleAlert, Lightbulb, ShieldAlert } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const MINI_QUADRANTS = [
  { letter: 'S', label: 'Strengths', count: '8 poin', bg: 'bg-[#1E5B44]', rotate: '-rotate-2' },
  { letter: 'W', label: 'Weaknesses', count: '7 poin', bg: 'bg-[#C0573F]', rotate: 'rotate-2' },
  { letter: 'O', label: 'Opportunities', count: '7 poin', bg: 'bg-[#2F5D8A]', rotate: 'rotate-2' },
  { letter: 'T', label: 'Threats', count: '6 poin', bg: 'bg-[#9A7420]', rotate: '-rotate-2' },
];

const QUADRANT_ICONS = [Zap, TriangleAlert, Lightbulb, ShieldAlert];

export const Hero: React.FC = () => {
  const scrollToSwot = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('swot');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F3F0E8]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Small uppercase category kicker */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C76F45] inline-block animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#C76F45]">
                Kecakapan Antar Personal • Analisis SWOT Diri
              </span>
            </div>

            {/* Large Bold Display Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight text-[#0D211D] leading-[1.02] text-balance mb-6">
              Yoga Dwi
              <br />
              <span className="relative inline-block">
                Pratama
                <span className="hidden sm:inline-block ml-4 align-middle text-xs font-mono font-normal tracking-normal text-[#18221F]/50 px-2.5 py-1 border-l-2 border-[#C76F45] leading-tight">
                  MAHASISWA INFORMATIKA
                  <br />
                  UNIVERSITAS PGRI YOGYAKARTA
                </span>
              </span>
            </h1>

            {/* Professional Statement */}
            <p className="text-lg sm:text-xl text-[#18221F]/80 font-normal leading-relaxed max-w-xl mb-9">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4 mb-12 sm:mb-16">
              <a
                href="#swot"
                onClick={scrollToSwot}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#C76F45] text-white hover:bg-[#b05b33] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#C76F45]/20 focus-visible:outline-2 focus-visible:outline-[#0D211D]"
              >
                <span>Lihat Analisis SWOT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Statistics Banner with vertical dividers */}
            <div className="pt-8 border-t border-[#18221F]/15 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`${idx < 2 ? 'border-r border-[#18221F]/15 pr-4' : ''}`}
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0D211D] tracking-tight tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#18221F]/70 font-medium mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Decorative SWOT mini-matrix composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-full aspect-[4/5] flex items-center justify-center">
              {/* Organic / Large Circular Terracotta Background Shape */}
              <div
                className="absolute w-[82%] aspect-square rounded-full bg-[#C76F45] top-6 right-2 sm:right-6 opacity-95 transition-transform duration-700 hover:scale-105"
                style={{
                  boxShadow: '0 20px 60px -15px rgba(199, 111, 69, 0.35)',
                }}
              />

              {/* Decorative Subtle Concentric Rings */}
              <div className="absolute w-[92%] aspect-square rounded-full border border-[#D8C6A8]/70 top-2 right-0 sm:right-2 pointer-events-none" />

              {/* SWOT mini-matrix cards */}
              <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4 w-[86%]">
                {MINI_QUADRANTS.map((q, idx) => {
                  const Icon = QUADRANT_ICONS[idx];
                  return (
                    <div
                      key={q.letter}
                      className={`${q.bg} ${q.rotate} rounded-2xl p-4 sm:p-5 text-white shadow-xl border border-white/20 transition-transform duration-300 hover:rotate-0 hover:scale-[1.03]`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                          {q.letter}
                        </span>
                        <Icon className="w-5 h-5 text-white/80" />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider">{q.label}</div>
                      <div className="text-[11px] text-white/75 font-mono mt-0.5">{q.count}</div>
                    </div>
                  );
                })}
              </div>

              {/* Floating Editorial Badge / Pill */}
              <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-4 z-20 bg-[#F3F0E8]/95 backdrop-blur-md border border-[#18221F]/10 rounded-2xl p-3.5 shadow-lg max-w-[230px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#0D211D] flex items-center justify-center text-[#F3F0E8] shrink-0">
                    <ArrowDown className="w-4 h-4 text-[#D8C6A8]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C76F45]">
                      Refleksi Diri • 2026
                    </div>
                    <div className="text-xs font-semibold text-[#0D211D]">
                      28 Poin Terpetakan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex items-center justify-center mt-12 pt-6">
          <a
            href="#about"
            className="group inline-flex flex-col items-center text-xs font-medium uppercase tracking-widest text-[#18221F]/50 hover:text-[#C76F45] transition-colors"
          >
            <span className="mb-2 text-[10px]">Scroll ke Bawah</span>
            <div className="w-8 h-12 rounded-full border border-[#18221F]/20 flex items-start justify-center p-2 group-hover:border-[#C76F45] transition-colors">
              <span className="w-1.5 h-2.5 bg-[#C76F45] rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

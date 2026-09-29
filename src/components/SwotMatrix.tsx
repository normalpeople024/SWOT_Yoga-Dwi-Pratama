import React, { useState } from 'react';
import { Zap, TriangleAlert, Lightbulb, ShieldAlert, ChevronDown, Minus, Plus } from 'lucide-react';
import { SWOT_DATA } from '../data/portfolioData';
import { SwotCategory } from '../types';

const CATEGORY_STYLES: Record<
  SwotCategory['id'],
  {
    Icon: React.ComponentType<{ className?: string }>;
    accent: string;
    accentSoft: string;
    accentBorder: string;
    accentText: string;
    headerBg: string;
    badge: string;
  }
> = {
  strengths: {
    Icon: Zap,
    accent: 'bg-[#1E5B44]',
    accentSoft: 'bg-[#1E5B44]/10',
    accentBorder: 'border-[#1E5B44]/25',
    accentText: 'text-[#1E5B44]',
    headerBg: 'bg-[#1E5B44]',
    badge: 'bg-[#1E5B44]/10 text-[#1E5B44]',
  },
  weaknesses: {
    Icon: TriangleAlert,
    accent: 'bg-[#C0573F]',
    accentSoft: 'bg-[#C0573F]/10',
    accentBorder: 'border-[#C0573F]/25',
    accentText: 'text-[#C0573F]',
    headerBg: 'bg-[#C0573F]',
    badge: 'bg-[#C0573F]/10 text-[#C0573F]',
  },
  opportunities: {
    Icon: Lightbulb,
    accent: 'bg-[#2F5D8A]',
    accentSoft: 'bg-[#2F5D8A]/10',
    accentBorder: 'border-[#2F5D8A]/25',
    accentText: 'text-[#2F5D8A]',
    headerBg: 'bg-[#2F5D8A]',
    badge: 'bg-[#2F5D8A]/10 text-[#2F5D8A]',
  },
  threats: {
    Icon: ShieldAlert,
    accent: 'bg-[#9A7420]',
    accentSoft: 'bg-[#9A7420]/10',
    accentBorder: 'border-[#9A7420]/30',
    accentText: 'text-[#9A7420]',
    headerBg: 'bg-[#9A7420]',
    badge: 'bg-[#9A7420]/10 text-[#9A7420]',
  },
};

const SwotQuadrant: React.FC<{ category: SwotCategory }> = ({ category }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const style = CATEGORY_STYLES[category.id];
  const { Icon } = style;

  return (
    <article
      id={`swot-${category.id}`}
      className={`rounded-3xl bg-white border ${style.accentBorder} shadow-[0_18px_50px_-24px_rgba(13,33,29,0.35)] overflow-hidden flex flex-col scroll-mt-28`}
    >
      {/* Quadrant header */}
      <div className={`${style.headerBg} text-white px-6 sm:px-8 pt-7 pb-6 relative overflow-hidden`}>
        <span className="absolute -right-3 -top-7 text-[7rem] leading-none font-extrabold text-white/10 select-none">
          {category.letter}
        </span>
        <div className="relative flex items-start gap-4">
          <div className="w-11 h-11 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/70">
              {category.letter} — {category.englishTitle}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
              {category.title}
            </h3>
            <p className="text-sm text-white/75 mt-1 font-light">{category.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="px-6 sm:px-8 pt-5 text-sm leading-relaxed text-[#18221F]/75">
        {category.description}
      </p>

      {/* Accordion items */}
      <div className="px-4 sm:px-5 py-5 flex flex-col gap-2.5 flex-1">
        {category.items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.title}
              className={`rounded-2xl border transition-colors duration-200 ${
                isOpen ? `${style.accentBorder} ${style.accentSoft}` : 'border-[#18221F]/10 bg-[#F3F0E8]/60 hover:border-[#18221F]/25'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full flex items-start gap-3 px-4 py-3.5 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C76F45] rounded-2xl"
              >
                <span
                  className={`mt-0.5 w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 tabular-nums ${
                    isOpen ? `${style.accent} text-white` : 'bg-[#0D211D]/10 text-[#0D211D]/70'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="flex-1 text-sm font-semibold text-[#0D211D] leading-snug">
                  {item.title}
                </span>
                <span className={`shrink-0 mt-0.5 ${isOpen ? style.accentText : 'text-[#18221F]/40'}`}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              {isOpen && (
                <p className="px-4 pb-4 pl-[3.25rem] text-sm leading-relaxed text-[#18221F]/75">
                  {item.description}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer count */}
      <div className="px-6 sm:px-8 pb-5">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide ${style.badge}`}>
          {category.items.length} poin teridentifikasi
        </span>
      </div>
    </article>
  );
};

export const SwotMatrix: React.FC = () => {
  return (
    <section id="swot" className="py-24 md:py-32 bg-[#EDE8DA] relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section heading */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C76F45]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C76F45]">
              Analisis SWOT Diri
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D211D] leading-[1.08] text-balance mb-5">
            Matriks SWOT
            <br />
            <span className="font-serif-italic font-normal text-[#0D211D]/85">Diri Saya</span>
          </h2>
          <p className="text-base sm:text-lg text-[#18221F]/75 leading-relaxed font-normal">
            Pemetaan empat kuadran — kekuatan dan kelemahan sebagai faktor internal, serta peluang
            dan ancaman sebagai faktor eksternal. Klik setiap poin untuk membaca penjelasannya.
          </p>
        </div>

        {/* Quick jump pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {SWOT_DATA.map((cat) => {
            const { Icon } = CATEGORY_STYLES[cat.id];
            return (
              <a
                key={cat.id}
                href={`#swot-${cat.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase bg-white border border-[#18221F]/15 text-[#0D211D] hover:border-[#C76F45] hover:text-[#C76F45] transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>
                  {cat.letter} — {cat.title}
                </span>
                <ChevronDown className="w-3.5 h-3.5 opacity-50" />
              </a>
            );
          })}
        </div>

        {/* 2x2 Matrix grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {SWOT_DATA.map((category) => (
            <SwotQuadrant key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

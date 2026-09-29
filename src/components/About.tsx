import React from 'react';
import { Check, User, Globe } from 'lucide-react';
import { PERSONAL_INFO, SWOT_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const internalCount =
    (SWOT_DATA.find((c) => c.id === 'strengths')?.items.length ?? 0) +
    (SWOT_DATA.find((c) => c.id === 'weaknesses')?.items.length ?? 0);
  const externalCount =
    (SWOT_DATA.find((c) => c.id === 'opportunities')?.items.length ?? 0) +
    (SWOT_DATA.find((c) => c.id === 'threats')?.items.length ?? 0);

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F3F0E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Factor cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-3xl bg-[#0D211D] text-[#F3F0E8] p-7 sm:p-8 shadow-xl relative overflow-hidden">
              <span className="absolute -right-2 -top-6 text-[6rem] leading-none font-extrabold text-white/5 select-none">
                IN
              </span>
              <div className="relative flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#C76F45] flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D8C6A8]">
                    Faktor Internal
                  </div>
                  <div className="text-2xl font-extrabold tracking-tight mt-1">
                    {internalCount} Poin
                  </div>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed font-light">
                    Kekuatan (Strengths) dan kelemahan (Weaknesses) — hal-hal yang berasal dari
                    dalam diri saya dan dapat saya kendalikan.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-[#18221F]/15 p-7 sm:p-8 shadow-lg relative overflow-hidden">
              <span className="absolute -right-2 -top-6 text-[6rem] leading-none font-extrabold text-[#0D211D]/5 select-none">
                EX
              </span>
              <div className="relative flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#0D211D] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[#D8C6A8]" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C76F45]">
                    Faktor Eksternal
                  </div>
                  <div className="text-2xl font-extrabold tracking-tight mt-1 text-[#0D211D]">
                    {externalCount} Poin
                  </div>
                  <p className="text-sm text-[#18221F]/70 mt-2 leading-relaxed">
                    Peluang (Opportunities) dan ancaman (Threats) — hal-hal dari lingkungan luar
                    yang perlu dimanfaatkan dan diantisipasi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C76F45]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C76F45]">
                Tentang Halaman Ini
              </span>
            </div>

            {/* Large Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D211D] leading-[1.08] text-balance mb-6">
              Mengenal Diri
              <br />
              Melalui <span className="font-serif-italic font-normal">SWOT</span>
            </h2>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-[#18221F]/80 leading-relaxed font-normal mb-4 max-w-2xl">
              {PERSONAL_INFO.aboutIntro}
            </p>

            <p className="text-sm sm:text-base text-[#18221F]/75 leading-relaxed font-normal mb-8 max-w-2xl">
              Analisis ini disusun sebagai tugas mata kuliah Kecakapan Antar Personal. Tujuannya
              adalah memahami diri sendiri secara jujur — mengakui kekuatan yang dimiliki,
              menyadari kelemahan yang perlu diperbaiki, serta membaca peluang dan ancaman dari
              lingkungan — sebagai landasan merancang strategi pengembangan diri ke depan.
            </p>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10 max-w-xl">
              {PERSONAL_INFO.aboutPoints.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0D211D]/10 flex items-center justify-center text-[#C76F45] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm font-medium text-[#18221F] leading-snug">{point}</span>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="flex flex-col pt-4 border-t border-[#18221F]/15">
              <div className="font-serif-italic text-3xl sm:text-4xl text-[#0D211D] select-none tracking-wide">
                Yoga Dwi Pratama
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#18221F]/40 mt-1">
                Yogyakarta, Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

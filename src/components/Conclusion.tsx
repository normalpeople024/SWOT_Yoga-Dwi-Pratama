import React from 'react';
import { ClipboardCheck } from 'lucide-react';

const ACTION_PLANS = [
  {
    title: 'Memperbaiki cara memulai pekerjaan',
    description:
      'Saya akan membiasakan diri memecah tugas yang kurang menarik menjadi langkah-langkah kecil dan menjadwalkannya seperti kegiatan yang sudah direncanakan — memanfaatkan kebiasaan saya yang lebih nyaman dengan perencanaan.',
  },
  {
    title: 'Mengelola intensitas agar tidak berujung kelelahan',
    description:
      'Daya tahan kerja yang tinggi perlu diimbangi istirahat yang cukup, agar tidak sampai menarik diri dari interaksi sosial dan menghambat pembangunan relasi.',
  },
  {
    title: 'Memanfaatkan peluang akademik dan profesional',
    description:
      'Perkuliahan, proyek, magang, dan skripsi akan saya gunakan untuk mengembangkan kemampuan Informatika sekaligus memperluas relasi — dua hal yang saling menguatkan untuk mengatasi kelemahan dan ancaman yang saya identifikasi.',
  },
  {
    title: 'Mengikuti perkembangan teknologi secara bertahap',
    description:
      'Perkembangan AI dan perubahan kebutuhan dunia kerja akan saya sikapi dengan belajar terus-menerus dan memanfaatkan AI sebagai alat bantu produktivitas, bukan sekadar ancaman.',
  },
];

export const Conclusion: React.FC = () => {
  return (
    <section id="kesimpulan" className="py-24 md:py-32 bg-[#0D211D] text-[#F3F0E8] relative overflow-hidden scroll-mt-16">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C76F45]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Conclusion */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C76F45]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C76F45]">
                Kesimpulan
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F3F0E8] leading-[1.08] text-balance mb-6">
              Refleksi &
              <br />
              <span className="text-[#D8C6A8]">Langkah Ke Depan</span>
            </h2>

            <p className="text-base text-[#F3F0E8]/75 font-light leading-relaxed">
              Berdasarkan analisis SWOT di atas, saya melihat pola yang jelas: kekuatan terbesar
              saya adalah <strong className="font-semibold text-white">intensitas dan daya tahan kerja</strong> ketika
              mengerjakan hal yang saya minati, didukung kemampuan{' '}
              <strong className="font-semibold text-white">memetakan masalah sebelum bertindak</strong> dan{' '}
              <strong className="font-semibold text-white">mengontrol emosi</strong>. Namun kekuatan ini memiliki
              sisi sebaliknya — <strong className="font-semibold text-white">ketergantungan pada minat</strong> membuat
              saya sulit memulai dan menunda pekerjaan yang kurang menarik, dan{' '}
              <strong className="font-semibold text-white">kelelahan akibat intensitas tinggi</strong> membuat saya
              menarik diri dari lingkungan sosial.
            </p>
          </div>

          {/* Right Column: Action plans */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#D8C6A8] mb-1">
              Rencana Tindak Lanjut
            </div>
            {ACTION_PLANS.map((plan, idx) => (
              <div
                key={plan.title}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[#142D28] border border-white/10 hover:border-[#C76F45]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C76F45] flex items-center justify-center shrink-0">
                  {idx === 0 ? (
                    <ClipboardCheck className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-sm font-extrabold text-white tabular-nums">{idx + 1}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-snug mb-1.5">
                    {idx + 1}. {plan.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    {plan.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

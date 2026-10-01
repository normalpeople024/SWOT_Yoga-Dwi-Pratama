/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SwotMatrix } from './components/SwotMatrix';
import { Conclusion } from './components/Conclusion';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F3F0E8] text-[#18221F] selection:bg-[#C76F45] selection:text-white flex flex-col font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Split-Layout Editorial Hero */}
        <Hero />

        {/* Editorial Introduction to the SWOT Analysis */}
        <About />

        {/* 2x2 SWOT Matrix */}
        <SwotMatrix />

        {/* Conclusion & Action Plan */}
        <Conclusion />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

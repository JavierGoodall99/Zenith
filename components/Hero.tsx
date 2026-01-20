import React, { useState, useEffect } from 'react';
import { PageView } from '../App';

interface HeroProps {
  onNavigate: (page: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 w-full h-full bg-background-dark">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" 
          role="img"
          aria-label="Cinematic high fashion model in architectural concrete setting with dramatic lighting"
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOSbBhWwgoQXDKlZghawFQJx7DdVv6KawrUcOBM5QCXERDTV32XkXu_kg--msdNrCF8KDWpQ9ZlgkCFDMGcjPY7XV0nqEJoYQPRUZedNzP8DAVbQR1TjbXaV2UjNM7sn0Ivu9cPoz_vYEXiajyHSkiSZEJFmvbgkJbcJUg3qbbTYxC6FtWxj9Ymr7i2iGdsh0s-zDLk_OtZsXPy-cI-KcYnBRiNWJ-JuGTTxvWnoXscYs5CHEBJA8cZ-U-GR1kmMhjo-WeQj9ypAA')" 
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/40 via-transparent to-background-dark/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative w-full h-full px-6 md:px-12 lg:px-20 pt-20 flex flex-col justify-center z-10">
        
        {/* Main Headline Area */}
        <div className="w-full flex flex-col relative">
          
          {/* Top tagline */}
          <div className="flex items-center gap-4 mb-4 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
            <span className="h-[1px] w-12 bg-primary"></span>
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold">New Arrival</span>
          </div>

          {/* Brutalist Headline */}
          <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.85] font-black text-white mix-blend-screen tracking-tighter opacity-0 animate-[slideUp_1s_ease-out_0.2s_forwards]">
            ZENITH <br />
            <span className="ml-[10%] md:ml-[20%] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-transparent">ÉTÉ 25</span>
          </h1>

          {/* CTA Button */}
          <div className="mt-12 md:ml-[20%] opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
            <button 
              onClick={() => onNavigate('products')}
              className="group relative px-8 py-4 bg-transparent border border-white/20 hover:border-primary overflow-hidden transition-colors duration-300"
            >
              <div className="absolute inset-0 w-0 bg-primary/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative flex items-center gap-3 text-white font-bold tracking-widest uppercase text-sm">
                Shop The Look
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 right-6 md:right-20 h-48 md:h-64 flex flex-col items-center gap-4 z-20 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-vertical text-xs tracking-[0.3em] text-white/60 uppercase font-light rotate-180" style={{ writingMode: 'vertical-rl' }}>
            Discover the Narrative
          </span>
          <div className="w-[1px] h-full bg-gradient-to-b from-primary to-transparent"></div>
        </div>

        {/* Sound Toggle (Bottom Left) */}
        <div className="absolute bottom-10 left-6 md:left-20 flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <button className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-white text-[20px]">volume_off</span>
          </button>
          <span className="text-xs text-white/60 uppercase tracking-widest hidden md:block">Sound Off</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
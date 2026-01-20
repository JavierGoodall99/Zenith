import React from 'react';

const Marquee: React.FC = () => {
  const content = (
    <>
      <span className="text-background-dark font-black text-4xl md:text-6xl uppercase tracking-tighter">ZENITH</span>
      <span className="text-background-dark/50 font-serif italic text-4xl md:text-6xl">Summer 2025</span>
      <span className="size-4 bg-background-dark rotate-45"></span>
      <span className="text-background-dark font-black text-4xl md:text-6xl uppercase tracking-tighter">Paris — Tokyo</span>
      <span className="text-background-dark/50 font-serif italic text-4xl md:text-6xl">Available Now</span>
      <span className="size-4 bg-background-dark rotate-45"></span>
    </>
  );

  return (
    <div className="py-12 bg-primary overflow-hidden border-y border-white/10">
      <div className="whitespace-nowrap flex gap-12 items-center animate-scroll w-max">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
};

export default Marquee;
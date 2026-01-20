import React from 'react';

const Narrative: React.FC = () => {
  return (
    <section className="bg-background-dark py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-6 block">The Concept</span>
        <p className="text-2xl md:text-4xl lg:text-5xl text-white font-serif italic leading-snug md:leading-tight opacity-90">
          "Where architectural silhouettes meet the fluidity of summer shadows. A collection defined by what is hidden, not just what is seen."
        </p>
        <div className="mt-10 flex justify-center">
          <div className="h-16 w-[1px] bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
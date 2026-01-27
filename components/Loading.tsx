import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background-dark">
      {/* Animated ZENITH Text */}
      <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-transparent tracking-tighter animate-pulse">
        ZENITH
      </h1>
      
      {/* Loading Indicator */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="h-[2px] w-24 bg-white/10 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-primary w-full origin-left animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
        <span className="text-primary text-xs tracking-[0.2em] uppercase font-bold animate-pulse">
          Loading
        </span>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: left; }
          51% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}</style>
    </div>
  );
};

export default Loading;

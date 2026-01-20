import React, { useState, useEffect } from 'react';
import { PageView } from '../App';

interface LoginProps {
  onNavigate: (page: PageView) => void;
}

const Login: React.FC<LoginProps> = ({ onNavigate }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('account');
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-background-dark text-white pt-20">
      
      {/* Visual Side (Left/Top) */}
      <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-[calc(100vh-5rem)] overflow-hidden bg-surface-dark order-1">
         {/* Background Image with parallax-like effect */}
         <div 
           className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] scale-105 hover:scale-110"
           style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSgKfOW_oxaHQ7RrWU8ieuOYtnjCqoF4oj12f1bro-GzhdmKvSB1fB2bQSCdgaAF58d7KWwf0T7eQEMvrqu_vPvN4fbvJ9EDSB0WgO0F1NwutmyxHnf5JQQqsYqMK-BVBassoc_eZ19UOvSbpSuYxBTXfq543_QtSwYiCg8TIHa6pY5NPw6GyiT_yQmEA8NUoeKOQedCil56oSy9FLLEw_sM_GWCRR3tyBnmgUPUJRWpuGCdhmua3U7gKoABksSR1bq2lM3OJy6zo')" }}
         ></div>
         
         {/* Overlays */}
         <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent lg:hidden"></div>
         
         {/* Content */}
         <div className="absolute bottom-8 left-8 lg:bottom-16 lg:left-16 z-10 max-w-md pointer-events-none select-none">
            <div className="overflow-hidden mb-4">
               <span className={`block text-primary text-xs font-bold uppercase tracking-[0.3em] transition-transform duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                 Membership
               </span>
            </div>
            <h2 className={`text-4xl lg:text-6xl font-black text-white leading-none uppercase tracking-tighter transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              The<br/>Inner<br/>Circle
            </h2>
            <p className={`mt-6 text-white/60 font-serif italic text-lg lg:text-xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              "Access the archive. Curated for the few."
            </p>
         </div>
      </div>

      {/* Interaction Side (Right/Bottom) */}
      <div className="relative w-full lg:w-1/2 min-h-[60vh] lg:h-[calc(100vh-5rem)] flex flex-col justify-center items-center px-6 py-12 lg:px-24 bg-background-dark order-2">
         
         <div className={`w-full max-w-md transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Toggle */}
            <div className="flex gap-12 mb-12 border-b border-white/10">
               <button 
                 onClick={() => setMode('login')}
                 className={`pb-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 relative ${mode === 'login' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
               >
                 Sign In
                 {mode === 'login' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary animate-fade-in"></span>}
               </button>
               <button 
                 onClick={() => setMode('register')}
                 className={`pb-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 relative ${mode === 'register' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
               >
                 Apply
                 {mode === 'register' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary animate-fade-in"></span>}
               </button>
            </div>

            {/* Header */}
            <div className="mb-10">
              <h1 className="text-3xl lg:text-4xl font-serif italic text-white mb-2">
                {mode === 'login' ? 'Welcome Back' : 'Join the Collective'}
              </h1>
              <p className="text-white/40 text-sm">
                {mode === 'login' ? 'Enter your credentials to access your account.' : 'Begin your journey with Zenith.'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
               
               {mode === 'register' && (
                  <div className="group relative">
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                      placeholder="Name"
                    />
                    <label 
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-xs text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary pointer-events-none uppercase tracking-widest font-bold"
                    >
                      Full Name
                    </label>
                  </div>
               )}

               <div className="group relative">
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                    placeholder="Email"
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-xs text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary pointer-events-none uppercase tracking-widest font-bold"
                  >
                    Email Address
                  </label>
               </div>

               <div className="group relative">
                  <input 
                    type="password" 
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                    placeholder="Password"
                  />
                  <label 
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-xs text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary pointer-events-none uppercase tracking-widest font-bold"
                  >
                    Password
                  </label>
               </div>

               {mode === 'login' && (
                  <div className="flex justify-end">
                     <button type="button" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                        Forgot Password?
                     </button>
                  </div>
               )}

               <button 
                 type="submit"
                 className="w-full mt-8 bg-white text-background-dark h-14 font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
               >
                 <span className="relative z-10">{mode === 'login' ? 'Enter' : 'Create Account'}</span>
                 <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform relative z-10">arrow_forward</span>
                 <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
               </button>
            </form>

            {/* Footer / Socials */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-6">
               <p className="text-center text-[10px] uppercase tracking-widest text-white/30">Or continue with</p>
               <div className="flex gap-4 justify-center">
                  <button className="w-12 h-12 border border-white/10 flex items-center justify-center rounded hover:bg-white hover:text-background-dark transition-all duration-300 group">
                    <span className="font-serif italic font-bold">G</span>
                  </button>
                  <button className="w-12 h-12 border border-white/10 flex items-center justify-center rounded hover:bg-white hover:text-background-dark transition-all duration-300 group">
                    <span className="font-serif italic font-bold">A</span>
                  </button>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default Login;
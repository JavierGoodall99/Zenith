import React, { useState, useEffect } from 'react';
import { PageView } from '../App';

interface HeaderProps {
  onNavigate: (page: PageView) => void;
  cartCount?: number;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount = 0, setSearchQuery }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (page: PageView) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onNavigate('products');
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-background-dark/95 shadow-md h-20' : 'bg-gradient-to-b from-background-dark/80 to-transparent pt-6 pb-12'}`}>
        <div className="px-6 md:px-12 lg:px-20 flex items-center justify-between h-full gap-4 md:gap-8">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 z-50 cursor-pointer relative shrink-0"
            onClick={() => handleNavClick('landing')}
          >
            <h2 className="text-white text-xl font-bold tracking-tight uppercase hidden md:block">Zenith</h2>
          </div>

          {/* Search Bar - Centered & Persistent */}
          <div className="hidden md:block flex-1 max-w-2xl relative">
             <input
               type="text"
               placeholder="Search for items, brands and inspiration"
               onChange={handleSearchChange}
               className="w-full bg-white text-background-dark rounded-full py-3 px-6 pr-12 focus:outline-none placeholder-gray-500 font-medium text-sm border-none ring-0 focus:ring-2 focus:ring-primary/50 shadow-lg"
             />
             <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-background-dark font-bold text-[22px] pointer-events-none">search</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 z-50 relative shrink-0">
            <button 
                onClick={() => onNavigate('products')} 
                className="text-white hover:text-primary transition-colors font-bold text-sm uppercase tracking-widest hidden lg:block"
            >
                Collection
            </button>

            <button 
              onClick={() => handleNavClick('favourites')}
              className="text-white hover:text-primary transition-colors hidden md:block"
            >
              <span className="material-symbols-outlined font-light">favorite</span>
            </button>

            <button 
              className="flex items-center gap-2 text-white hover:text-primary transition-colors group"
              onClick={() => handleNavClick('cart')}
            >
              <span className="material-symbols-outlined font-light">shopping_bag</span>
              {cartCount > 0 && (
                <span className="hidden md:flex text-xs font-bold bg-primary text-background-dark w-5 h-5 rounded-full items-center justify-center group-hover:bg-white transition-colors">{cartCount}</span>
              )}
            </button>

            <button 
              onClick={() => handleNavClick('login')}
              className="text-white hover:text-primary transition-colors hidden md:block"
            >
              <span className="material-symbols-outlined font-light">person</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background-dark z-40 flex flex-col justify-center px-6 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        <nav className="flex flex-col gap-8">
          {/* Mobile Search Input */}
          <div className="border-b border-white/20 pb-2 mb-4 relative">
             <input 
               type="text" 
               placeholder="Search..." 
               onChange={handleSearchChange}
               className="w-full bg-transparent border-none text-white text-2xl font-serif italic placeholder-white/30 focus:ring-0 px-0 pr-10"
             />
             <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-white/50">search</span>
          </div>

          <button 
              onClick={() => handleNavClick('products')} 
              className="text-left text-4xl font-serif italic text-white hover:text-primary transition-colors duration-300"
            >
              Collection
          </button>
          
          <div className="w-full h-[1px] bg-white/10 my-4"></div>
          
          <button onClick={() => handleNavClick('favourites')} className="flex items-center gap-4 text-white hover:text-primary transition-colors">
             <span className="material-symbols-outlined">favorite</span>
             <span className="text-lg font-bold uppercase tracking-widest">Wishlist</span>
          </button>
          <button onClick={() => handleNavClick('login')} className="flex items-center gap-4 text-white hover:text-primary transition-colors">
             <span className="material-symbols-outlined">person</span>
             <span className="text-lg font-bold uppercase tracking-widest">Account</span>
          </button>
        </nav>
        
        <div className="absolute bottom-10 left-6 text-white/30 text-xs font-bold uppercase tracking-widest">
           © 2026 Zenith
        </div>
      </div>
    </>
  );
};

export default Header;
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { PageView } from '../App';
import { products, Product } from '../data';

interface ProductsProps {
  onNavigate: (page: PageView, productId?: number) => void;
  addToCart: (product: Product, size: string) => void;
  searchQuery: string;
}

type SortOption = 'default' | 'price-asc' | 'price-desc';

const Products: React.FC<ProductsProps> = ({ onNavigate, addToCart, searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [motionOnly, setMotionOnly] = useState(false);
  
  // Refs for click outside handling
  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Outerwear', 'Dresses', 'Accessories', 'Footwear', 'Objects'];

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 0. Filter by Search Query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(lowerQuery) || 
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
      );
    }

    // 1. Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // 2. Filter by Motion
    if (motionOnly) {
      result = result.filter(p => p.isMotion);
    }

    // 3. Sort
    if (sortOption === 'price-asc') {
      result.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      });
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceB - priceA;
      });
    }

    return result;
  }, [activeCategory, motionOnly, sortOption, searchQuery]);

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product, 'M'); // Default to Medium for quick add
  };

  return (
    <div className="flex min-h-screen w-full bg-background-dark text-white font-display selection:bg-primary selection:text-background-dark pt-32">
      
      {/* Main Scrollable Content */}
      <main className="flex-1 min-h-screen relative">
        
        {/* Toolbar */}
        <div className="sticky top-16 z-30 bg-background-dark/95 backdrop-blur-sm border-b border-white/5 px-6 lg:px-20 py-4 flex justify-between items-center transition-all duration-300">
           <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                Showing {filteredProducts.length} Items
              </span>
              {searchQuery && (
                <span className="text-xs text-primary mt-1">
                  Results for "{searchQuery}"
                </span>
              )}
           </div>
           
           <div className="flex gap-6 relative">
              {/* Filter Button */}
              <div className="relative" ref={filterRef}>
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${isFilterOpen ? 'text-primary' : 'text-white/60 hover:text-white'}`}
                >
                  Filter <span className="material-symbols-outlined text-[16px]">tune</span>
                </button>
                
                {/* Filter Dropdown */}
                {isFilterOpen && (
                  <div className="absolute top-full right-0 mt-4 w-56 bg-surface-dark border border-white/10 p-4 shadow-xl z-50 animate-fade-in">
                    <div className="flex flex-col gap-4">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-4 h-4 border border-white/20 flex items-center justify-center transition-colors ${motionOnly ? 'bg-primary border-primary' : 'group-hover:border-white'}`}>
                          {motionOnly && <span className="material-symbols-outlined text-[10px] text-black font-bold">check</span>}
                        </div>
                        <input 
                          type="checkbox" 
                          className="hidden" 
                          checked={motionOnly} 
                          onChange={(e) => setMotionOnly(e.target.checked)} 
                        />
                        <span className={`text-xs font-bold uppercase tracking-wide ${motionOnly ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                          Motion Only
                        </span>
                      </label>
                      
                      {/* Categories List */}
                      <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                        <span className="text-[10px] uppercase text-white/30 tracking-widest mb-1">Category</span>
                        {categories.map(cat => (
                           <button
                             key={cat}
                             onClick={() => setActiveCategory(cat)}
                             className={`text-left text-xs uppercase tracking-wide hover:text-white transition-colors ${activeCategory === cat ? 'text-primary' : 'text-white/60'}`}
                           >
                             {cat}
                           </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sort Button */}
              <div className="relative" ref={sortRef}>
                <button 
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${isSortOpen ? 'text-primary' : 'text-white/60 hover:text-white'}`}
                >
                  Sort <span className="material-symbols-outlined text-[16px]">sort</span>
                </button>

                {/* Sort Dropdown */}
                {isSortOpen && (
                  <div className="absolute top-full right-0 mt-4 w-48 bg-surface-dark border border-white/10 py-2 shadow-xl z-50 animate-fade-in">
                    {[
                      { label: 'Featured', value: 'default' },
                      { label: 'Price: Low to High', value: 'price-asc' },
                      { label: 'Price: High to Low', value: 'price-desc' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortOption(opt.value as SortOption);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-wide hover:bg-white/5 transition-colors ${sortOption === opt.value ? 'text-primary' : 'text-white/60'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
           </div>
        </div>

        {/* Product Grid */}
        <div className="px-6 lg:px-20 py-12">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="group relative cursor-pointer"
                  onClick={() => onNavigate('product_detail', product.id)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    
                    {/* Quick Add Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-between items-end">
                       <button 
                         className="bg-white text-background-dark px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
                         onClick={(e) => handleQuickAdd(e, product)}
                       >
                         Quick Add
                       </button>
                    </div>

                     {/* Tags */}
                     {product.isMotion && (
                        <span className="absolute top-4 left-4 bg-black/50 backdrop-blur border border-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                          Motion
                        </span>
                     )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col items-start gap-1">
                    <div className="w-full flex justify-between items-baseline border-b border-white/10 pb-2 mb-2 group-hover:border-white/30 transition-colors">
                       <h3 className="font-serif text-2xl italic text-white group-hover:text-primary transition-colors">
                         {product.title}
                       </h3>
                       <span className="font-display font-bold text-sm">{product.price}</span>
                    </div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">{product.description.split('•')[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-white/40">
              <span className="material-symbols-outlined text-4xl mb-4">filter_list_off</span>
              <p className="font-serif italic text-xl">
                 {searchQuery ? `No matches for "${searchQuery}"` : "No items found."}
              </p>
              <button 
                onClick={() => {
                  setActiveCategory('All');
                  setMotionOnly(false);
                  setSortOption('default');
                }}
                className="mt-6 text-primary text-xs font-bold uppercase tracking-widest border-b border-primary pb-1"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Footer for Products */}
        <div className="py-20 border-t border-white/5 flex flex-col items-center justify-center gap-6">
           <p className="text-white/40 font-serif italic text-xl">End of Archive</p>
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="px-8 py-4 border border-white/10 hover:border-primary hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
           >
             Back to Top
           </button>
        </div>
      </main>
    </div>
  );
};

export default Products;
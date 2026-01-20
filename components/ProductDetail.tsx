import React, { useState, useEffect } from 'react';
import { PageView } from '../App';
import { Product } from '../data';

interface ProductDetailProps {
  product: Product;
  onNavigate: (page: PageView) => void;
  addToCart: (product: Product, size: string) => void;
  isFavourite: boolean;
  toggleFavourite: (id: number) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onNavigate, addToCart, isFavourite, toggleFavourite }) => {
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    // Entrance animation trigger
    const timer = setTimeout(() => setIsAnimating(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    addToCart(product, activeSize || 'M');
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  if (!product) return null;

  return (
    <div className="min-h-screen w-full bg-background-dark text-white font-display flex flex-col lg:flex-row pt-24 lg:pt-24">
      
      {/* Left Column - Visual */}
      <div className="w-full lg:w-[55%] h-[60vh] lg:h-[calc(100vh-6rem)] relative lg:sticky lg:top-24 overflow-hidden bg-surface-dark group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out scale-105 group-hover:scale-110"
          style={{ backgroundImage: `url('${product.image}')` }}
        ></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Mobile Back Button - Absolute on Image */}
        <button 
           onClick={() => onNavigate('products')}
           className="lg:hidden absolute top-6 left-6 z-20 w-10 h-10 rounded-full bg-background-dark/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10"
        >
           <span className="material-symbols-outlined">arrow_back</span>
        </button>
        
        {/* Cinematic Label */}
        <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/60 mb-2">Zenith Été 25</p>
          <p className="text-white text-sm font-serif italic opacity-80">Reference: {`ZEN-${product.id}00${product.id}`}</p>
        </div>
      </div>

      {/* Right Column - Details */}
      <div className="w-full lg:w-[45%] min-h-screen relative flex flex-col bg-background-dark">
        
        {/* Content Wrapper */}
        <div className={`px-6 py-12 lg:px-12 lg:py-0 flex-1 flex flex-col justify-center transition-all duration-1000 transform ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-white mb-6 leading-[0.9] lg:leading-[0.85]">
            {product.title}
          </h1>

          <div className="flex items-baseline gap-6 mb-8 border-b border-white/10 pb-8">
            <span className="text-3xl font-display font-medium text-white">{product.price}</span>
            <span className="text-white/40 text-sm uppercase tracking-wider">In Stock</span>
          </div>

          <div className="space-y-8 mb-12">
            <div>
               <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Description</h3>
               <p className="text-base md:text-lg text-white/80 font-light leading-relaxed max-w-md">
                 {product.description}. A testament to modern architectural fashion, designed for the individual who exists in the spaces between light and shadow.
               </p>
            </div>

            {product.details && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Specifications</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-white/60">
                      <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Size Selector */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Select Size</h3>
              <div className="flex gap-3">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setActiveSize(size)}
                    className={`w-12 h-12 border flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      activeSize === size 
                        ? 'border-primary bg-primary text-background-dark' 
                        : 'border-white/20 text-white hover:border-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex gap-4 mb-8 lg:mb-0">
             <button 
               onClick={handleAddToCart}
               className={`flex-1 bg-white text-background-dark h-14 font-bold uppercase tracking-widest hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-3 group ${isAdded ? '!bg-primary !text-background-dark' : ''}`}
             >
               <span>{isAdded ? 'Added' : 'Add to Bag'}</span>
               <span className="material-symbols-outlined text-[18px] group-hover:rotate-45 transition-transform">
                 {isAdded ? 'check' : 'arrow_forward'}
               </span>
             </button>
             <button 
               onClick={() => toggleFavourite(product.id)}
               className={`w-14 h-14 border flex items-center justify-center transition-all duration-300 ${isFavourite ? 'bg-primary border-primary text-background-dark' : 'border-white/20 text-white hover:border-primary hover:text-primary'}`}
             >
               <span 
                 className="material-symbols-outlined" 
                 style={{ fontVariationSettings: isFavourite ? "'FILL' 1" : "'FILL' 0" }}
               >
                 favorite
               </span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
import React, { useState, useEffect } from 'react';
import { PageView } from '../App';
import { products, Product } from '../data';

interface FavouritesProps {
  onNavigate: (page: PageView, productId?: number) => void;
  favourites: number[];
  toggleFavourite: (id: number) => void;
  addToCart: (product: Product, size: string) => void;
}

const Favourites: React.FC<FavouritesProps> = ({ onNavigate, favourites, toggleFavourite, addToCart }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [addedItems, setAddedItems] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const favouriteProducts = products.filter(p => favourites.includes(p.id));

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product, 'M');
    setAddedItems(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== product.id));
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-background-dark text-white font-display pt-20">
      <div className="px-6 md:px-12 lg:px-20 py-12 lg:py-20">
        
        {/* Header Section */}
        <div className={`mb-16 transition-all duration-1000 transform ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-serif italic text-white mb-4">Curated Selection</h1>
              <p className="text-white/40 text-sm uppercase tracking-widest">
                {favourites.length} {favourites.length === 1 ? 'Item' : 'Items'} Saved
              </p>
            </div>
            {favourites.length > 0 && (
              <button 
                onClick={() => onNavigate('products')}
                className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1"
              >
                Browse All Items
              </button>
            )}
          </div>
        </div>

        {/* Grid Section */}
        <div className={`transition-all duration-1000 delay-200 transform ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {favouriteProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {favouriteProducts.map((product) => (
                <div 
                  key={product.id}
                  className="group relative cursor-pointer"
                  onClick={() => onNavigate('product_detail', product.id)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-surface-dark">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    
                    {/* Remove Button (Top Right) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavourite(product.id);
                      }}
                      className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-background-dark/50 backdrop-blur text-white hover:bg-white hover:text-background-dark transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>

                    {/* Quick Add Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-between items-end">
                       <button 
                         className={`w-full bg-white text-background-dark px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2 ${addedItems.includes(product.id) ? '!bg-primary' : ''}`}
                         onClick={(e) => handleQuickAdd(e, product)}
                       >
                         {addedItems.includes(product.id) ? (
                           <>Added <span className="material-symbols-outlined text-[14px]">check</span></>
                         ) : 'Add to Bag'}
                       </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col items-start gap-1">
                    <div className="w-full flex justify-between items-baseline border-b border-white/10 pb-2 mb-2 group-hover:border-white/30 transition-colors">
                       <h3 className="font-serif text-2xl italic text-white group-hover:text-primary transition-colors">
                         {product.title}
                       </h3>
                       <span className="font-display font-bold text-sm">{product.price}</span>
                    </div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">{product.category}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-white/40 min-h-[40vh]">
              <span className="material-symbols-outlined text-4xl mb-4 font-light">favorite</span>
              <p className="font-serif italic text-xl mb-6">Your wishlist is currently empty.</p>
              <button 
                onClick={() => onNavigate('products')}
                className="bg-white text-background-dark px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
              >
                 Discover Collection
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
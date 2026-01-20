import React, { useState, useEffect } from 'react';
import { PageView, CartItem } from '../App';

interface CartProps {
  onNavigate: (page: PageView, productId?: number) => void;
  cartItems: CartItem[];
  updateQuantity: (id: number, size: string, delta: number) => void;
  removeFromCart: (id: number, size: string) => void;
}

const Cart: React.FC<CartProps> = ({ onNavigate, cartItems, updateQuantity, removeFromCart }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
    return acc + (price * item.quantity);
  }, 0);

  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen w-full bg-background-dark text-white font-display flex flex-col lg:flex-row pt-20 lg:pt-0">
      
      {/* Main Content Area (Left) */}
      <div className="w-full lg:w-[65%] min-h-screen p-6 lg:p-20 relative lg:mt-20">
        <div className={`transition-all duration-1000 transform ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
             <div>
                <h1 className="text-4xl lg:text-5xl font-serif italic text-white mb-2">Your Selection</h1>
                <p className="text-white/40 text-sm uppercase tracking-widest">
                  {cartItems.length > 0 ? `${cartItems.length} Items reserved` : 'Your bag is empty'}
                </p>
             </div>
             <button 
               onClick={() => onNavigate('products')}
               className="hidden lg:block text-xs font-bold uppercase tracking-widest text-white/60 hover:text-primary transition-colors"
             >
               Continue Shopping
             </button>
          </div>

          {cartItems.length > 0 ? (
            <div className="space-y-12">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-6 lg:gap-10 group">
                   {/* Image */}
                   <div 
                     className="w-24 lg:w-40 aspect-[3/4] bg-surface-dark overflow-hidden cursor-pointer"
                     onClick={() => onNavigate('product_detail', item.id)} // Navigate to detail on click
                   >
                      <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      ></div>
                   </div>

                   {/* Details */}
                   <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                         <div>
                            <h3 className="text-xl lg:text-2xl font-serif italic text-white mb-2">{item.title}</h3>
                            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{item.category}</p>
                            <p className="text-xs text-white/40 uppercase tracking-widest">Size: {item.size}</p>
                         </div>
                         <p className="text-lg font-display font-medium">{item.price}</p>
                      </div>

                      <div className="flex justify-between items-end mt-4 lg:mt-0">
                         {/* Quantity Control */}
                         <div className="flex items-center border border-white/20">
                            <button 
                              onClick={() => updateQuantity(item.id, item.size, -1)}
                              className="w-8 h-8 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                            >
                              -
                            </button>
                            <span className="w-10 text-center text-sm font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.size, 1)}
                              className="w-8 h-8 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                            >
                              +
                            </button>
                         </div>

                         {/* Remove */}
                         <button 
                           onClick={() => removeFromCart(item.id, item.size)}
                           className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-red-400 transition-colors border-b border-transparent hover:border-red-400 pb-1"
                         >
                           Remove
                         </button>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          ) : (
             <div className="flex flex-col items-center justify-center py-20 text-white/40">
                <span className="material-symbols-outlined text-4xl mb-4 font-light">shopping_bag</span>
                <p className="font-serif italic text-xl mb-6">Your cart is currently empty.</p>
                <button 
                  onClick={() => onNavigate('products')}
                  className="bg-white text-background-dark px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
                >
                   Explore Collection
                </button>
             </div>
          )}
        </div>
      </div>

      {/* Summary Sidebar (Right) */}
      {cartItems.length > 0 && (
        <div className="w-full lg:w-[35%] bg-surface-dark border-l border-white/5 p-6 lg:p-12 lg:pt-24 flex flex-col justify-between lg:h-[calc(100vh-theme(spacing.24))] lg:sticky lg:top-24">
           <div className="space-y-8">
              <h2 className="text-2xl font-serif italic text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 border-b border-white/10 pb-8">
                 <div className="flex justify-between text-sm text-white/60">
                   <span>Subtotal</span>
                   <span>${subtotal.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between text-sm text-white/60">
                   <span>Shipping Estimate</span>
                   <span>${shipping.toLocaleString()}</span>
                 </div>
              </div>

              <div className="flex justify-between text-xl font-serif italic text-white">
                 <span>Total</span>
                 <span>${total.toLocaleString()}</span>
              </div>

              {/* Promo Code */}
              <div className="pt-4">
                 <div className="flex border-b border-white/20 focus-within:border-primary transition-colors">
                    <input 
                      type="text" 
                      placeholder="Promo Code" 
                      className="bg-transparent w-full py-3 outline-none text-white placeholder-white/30 text-xs font-bold uppercase tracking-widest border-none focus:ring-0 px-0"
                    />
                    <button className="text-white/60 hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-widest">Apply</button>
                 </div>
              </div>
           </div>

           <div className="pt-8 mt-auto">
              <button 
                onClick={() => onNavigate('checkout')}
                className="w-full bg-white text-background-dark h-14 font-bold uppercase tracking-widest hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Proceed to Checkout</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <div className="mt-6 flex justify-center gap-4 text-white/20">
                 <span className="material-symbols-outlined">verified_user</span>
                 <span className="material-symbols-outlined">credit_card</span>
                 <span className="material-symbols-outlined">local_shipping</span>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
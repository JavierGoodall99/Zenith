import React, { useState, useEffect } from 'react';
import { PageView, CartItem } from '../App';

interface CheckoutProps {
  onNavigate: (page: PageView) => void;
  cartItems: CartItem[];
}

const Checkout: React.FC<CheckoutProps> = ({ onNavigate, cartItems }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);

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
    <div className="min-h-screen w-full bg-background-dark text-white font-display flex flex-col lg:flex-row">
       {/* Mobile Header */}
       <div className="lg:hidden fixed top-0 left-0 w-full z-50 px-6 py-4 bg-background-dark/90 backdrop-blur-md border-b border-white/10 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('products')}
          className="flex items-center gap-2 text-white/60 hover:text-white"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span className="text-xs font-bold uppercase tracking-widest">Back</span>
        </button>
        <span className="text-sm font-bold uppercase tracking-widest">Checkout</span>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      {/* Mobile Order Summary Toggle */}
      <div className="lg:hidden mt-[61px] bg-surface-dark border-b border-white/10">
        <button 
          onClick={() => setIsOrderSummaryOpen(!isOrderSummaryOpen)}
          className="w-full px-6 py-4 flex justify-between items-center"
        >
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
            <span>{isOrderSummaryOpen ? 'Hide' : 'Show'} Order Summary</span>
            <span className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${isOrderSummaryOpen ? 'rotate-180' : ''}`}>expand_more</span>
          </div>
          <span className="text-lg font-serif italic">${total.toLocaleString()}</span>
        </button>
        
        {/* Collapsible Content */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOrderSummaryOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
           <div className="p-6 pt-0 border-t border-white/5 space-y-6">
              <div className="space-y-4">
                 {cartItems.map((item, idx) => (
                   <div key={idx} className="flex gap-4">
                      <div className="w-16 h-20 bg-gray-800 overflow-hidden relative rounded-sm">
                         <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                         <span className="absolute top-0 right-0 bg-primary text-background-dark text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-bl-sm">{item.quantity}</span>
                      </div>
                      <div className="flex-1">
                         <h3 className="text-sm font-serif italic text-white mb-1">{item.title}</h3>
                         <p className="text-[10px] text-white/40 uppercase tracking-widest">Size: {item.size}</p>
                         <p className="text-sm font-bold mt-1">{item.price}</p>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="border-t border-white/10 pt-4 space-y-2">
                 <div className="flex justify-between text-xs text-white/60">
                   <span>Subtotal</span>
                   <span>${subtotal.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between text-xs text-white/60">
                   <span>Shipping</span>
                   <span>${shipping.toLocaleString()}</span>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Left Column - Order Summary (Desktop) */}
      <div className="hidden lg:block w-full lg:w-[45%] bg-surface-dark relative order-1 lg:order-1 flex flex-col">
        <div className="lg:fixed lg:w-[45%] lg:h-screen lg:overflow-y-auto hide-scrollbar p-6 lg:p-20 flex flex-col">
            <div className="mb-10">
               <div 
                  className="flex items-center gap-2 cursor-pointer mb-8"
                  onClick={() => onNavigate('landing')}
                >
                  <h2 className="text-white text-xl font-bold tracking-tight uppercase">Zenith</h2>
               </div>
               <h1 className="text-4xl font-serif italic text-white mb-2">Order Summary</h1>
               <p className="text-white/40 text-sm uppercase tracking-widest">{cartItems.length} Items • {shipping === 0 ? 'Free Shipping' : 'Standard Shipping'}</p>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 space-y-8 mb-10">
               {cartItems.map((item, idx) => (
                 <div key={idx} className="flex gap-6 group">
                    <div className="w-24 h-32 bg-gray-800 overflow-hidden relative">
                       <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                       <div>
                          <h3 className="text-lg font-serif italic text-white mb-1">{item.title}</h3>
                          <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{item.description.split('•')[0]}</p>
                          <p className="text-xs text-white/40 uppercase tracking-widest">Size: {item.size} • Qty: {item.quantity}</p>
                       </div>
                       <p className="text-sm font-bold">{item.price}</p>
                    </div>
                 </div>
               ))}
            </div>

            {/* Totals */}
            <div className="border-t border-white/10 pt-6 space-y-3">
               <div className="flex justify-between text-sm text-white/60">
                 <span>Subtotal</span>
                 <span>${subtotal.toLocaleString()}</span>
               </div>
               <div className="flex justify-between text-sm text-white/60">
                 <span>Shipping</span>
                 <span>${shipping.toLocaleString()}</span>
               </div>
               <div className="flex justify-between text-xl font-serif italic text-white pt-4">
                 <span>Total</span>
                 <span>${total.toLocaleString()}</span>
               </div>
            </div>
        </div>
      </div>

      {/* Right Column - Forms */}
      <div className="w-full lg:w-[55%] min-h-screen bg-background-dark relative order-2 lg:order-2 p-6 lg:p-20 pt-10 lg:pt-20">
         <div className={`max-w-xl mx-auto transition-all duration-1000 transform ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            <div className="flex items-center justify-between mb-12">
               <h2 className="text-2xl font-bold uppercase tracking-widest">Secure Checkout</h2>
               <span className="material-symbols-outlined text-white/40">lock</span>
            </div>

            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
               
               {/* Contact */}
               <section>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 border-b border-white/10 pb-2">01. Contact Info</h3>
                  <div className="grid gap-6">
                     <div className="group">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Email Address</label>
                        <input type="email" placeholder="jane@example.com" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors placeholder-white/10" />
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border border-white/20 flex items-center justify-center bg-transparent cursor-pointer hover:border-white">
                          {/* Checkbox simulated */}
                        </div>
                        <span className="text-xs text-white/60">Keep me updated on news and exclusive offers</span>
                     </div>
                  </div>
               </section>

               {/* Shipping */}
               <section>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 border-b border-white/10 pb-2">02. Shipping Details</h3>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="col-span-1 group">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">First Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                     </div>
                     <div className="col-span-1 group">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Last Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                     </div>
                     <div className="col-span-2 group">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Address</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                     </div>
                     <div className="col-span-2 group">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Apartment, suite, etc.</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                     </div>
                     <div className="col-span-1 group">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">City</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                     </div>
                     <div className="col-span-1 group">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Postal Code</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                     </div>
                  </div>
               </section>

               {/* Payment */}
               <section>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 border-b border-white/10 pb-2">03. Payment</h3>
                  <div className="space-y-6">
                     <div className="group">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Card Number</label>
                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors placeholder-white/10" />
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-1 group">
                           <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Expiry Date</label>
                           <input type="text" placeholder="MM / YY" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors placeholder-white/10" />
                        </div>
                        <div className="col-span-1 group">
                           <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">CVC</label>
                           <input type="text" placeholder="123" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors placeholder-white/10" />
                        </div>
                     </div>
                  </div>
               </section>

               <div className="pt-8 pb-20 lg:pb-0">
                 <button className="w-full bg-white text-background-dark h-14 font-bold uppercase tracking-widest hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-3 group">
                   <span>Pay ${total.toLocaleString()}</span>
                   <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">lock</span>
                 </button>
                 <p className="text-center text-[10px] text-white/30 mt-4 uppercase tracking-widest">
                    Secure encrypted transaction
                 </p>
               </div>
            </form>
         </div>
      </div>
    </div>
  );
};

export default Checkout;
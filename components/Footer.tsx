import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-white pt-20 pb-10 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">north_star</span>
              <h2 className="text-2xl font-bold tracking-tight uppercase">Zenith</h2>
            </div>
            <p className="text-white/60 max-w-xs leading-relaxed">
              Redefining modern luxury through architectural silhouettes and cinematic narratives.
            </p>
          </div>
          
          {/* Newsletter */}
          <div className="mt-10 md:mt-20">
            <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Subscribe to the Archive</label>
            <div className="flex border-b border-white/20 focus-within:border-primary transition-colors">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent w-full py-3 outline-none text-white placeholder-white/30 font-light border-none focus:ring-0 px-0"
              />
              <button className="text-primary hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Join</button>
            </div>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2 md:col-start-7">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Explore</h4>
          <ul className="flex flex-col gap-4">
            {['Latest Collection', 'The Atelier', 'Campaigns', 'Stores'].map((link) => (
              <li key={link}><a href="#" className="text-white hover:text-primary transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Support</h4>
          <ul className="flex flex-col gap-4">
            {['Client Services', 'Shipping', 'Returns', 'Legal'].map((link) => (
              <li key={link}><a href="#" className="text-white hover:text-primary transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Social Column */}
        <div className="md:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Follow</h4>
          <div className="flex gap-4">
            {['IG', 'TW', 'YT'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-background-dark hover:border-primary transition-all"
              >
                <span className="font-bold text-xs">{social}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm">
        <p>© 2025 Zenith. Paris — Tokyo</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { PageView } from '../App';

interface CollectionProps {
  onNavigate: (page: PageView) => void;
}

interface CollectionItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  alt: string;
  delay: string;
}

const collectionItems: CollectionItem[] = [
  {
    id: 1,
    title: "Structure",
    subtitle: "Rigid lines & brutalist forms",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1_spK_EwHODeP-vyIS8Q74sqHhEnvJ74N0byXNuNWpE1ZUcb-KVsiWoG24hS-4ZdsxkNTYRLu6au6EUCxWvBoo5LCWPvvi6xJKlpZ3EXL3FBphWrYurLhcEtdKCZGEC9Fx5kMVLD2eQZeJ9fcaqQaZOESfshnN20hYPEq5qm8-9B0aiGxFE35sahKdi9KVsyKS0dYqsGFwCSuRLzByODpAwmpD8vGks96MeJId434b8aDhyCceMp60w6DZLKT__On2p8BHGSCHF8",
    alt: "Abstract brutalist concrete structure",
    delay: "0",
  },
  {
    id: 2,
    title: "Flow",
    subtitle: "Movement against the wind",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYTAKq9h4PaJJk6Pz6lYkyHhWzTyYwjKks7rEFImmeD-qQx5GPpGRVqZwi6JoWSOTmkdglYpcbAdBWrc8MqvzLB9rAkTJPtTSxKahYBEBQr3vNQ3nAtlPKA4rpahGQ2ajfH5d8779ESQn4R1LABw2szbWhesbibUCLr2vNAIdcD9HE2xfNa4FS-PPAH8C6bP7qyC4jWekOwCqN6nKCB8gRoe6KliDCFtprLSv8RGTvpkHmBTed9CzVxdf3Xt207nbMT9SaJpiNk7c",
    alt: "Fabric flowing in the wind",
    delay: "100",
  },
  {
    id: 3,
    title: "Texture",
    subtitle: "Depth through contrast",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1-Ygxo1j_1BP1gqckdHIOAnDAFvG7SWJaPsfRcUXeCC1TJ2HT-QXtsjZuvvUkLSHgUGU3mgtMmzlVxmzyVXmV80AydhGmZ6kBWXv7pOcfTtLPLBZqGdVidx4o-3pu_CisaDPGUOe8RHXTPSwYhxG-orzsJgJqHKEAyNZGoCdMH2dNnXnaRQ4nQ50A4M-EpQXyUSPGamzajErBSk-gQXz6w7y0MGLMmKIEY4u-S6l4CZt3CXDkuj5T1GSQv0qW-ZIlcDmyzeutuAg",
    alt: "Close up texture of black leather",
    delay: "200",
  }
];

const Collection: React.FC<CollectionProps> = ({ onNavigate }) => {
  return (
    <section className="bg-background-dark py-20 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2">THE TRILOGY</h2>
          <p className="text-white/60 max-w-md">Three distinct movements defining the Zenith Été 25 aesthetic.</p>
        </div>
        <button 
          onClick={() => onNavigate('products')}
          className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm font-bold tracking-widest uppercase pb-2 border-b border-white/20 hover:border-primary"
        >
          View Full Collection <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {collectionItems.map((item, index) => (
          <div 
            key={item.id} 
            onClick={() => onNavigate('products')}
            className={`group relative cursor-pointer overflow-hidden rounded bg-surface-dark ${index === 1 ? 'md:mt-16' : ''}`}
          >
            <div className="aspect-[3/4] w-full overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
                role="img"
                aria-label={item.alt}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
              <div className="flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-primary font-serif italic">{item.subtitle}</p>
                </div>
                <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">north_east</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
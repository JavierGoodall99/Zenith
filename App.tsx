import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Collection from './components/Collection';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Account from './components/Account';
import Cart from './components/Cart';
import Favourites from './components/Favourites';
import { products, Product } from './data';

export type PageView = 'landing' | 'products' | 'product_detail' | 'login' | 'checkout' | 'account' | 'cart' | 'favourites';

export interface CartItem extends Product {
  size: string;
  quantity: number;
}

const App: React.FC = () => {
  const [view, setView] = useState<PageView>('landing');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favourites, setFavourites] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (page: PageView, productId?: number) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    setView(page);
    window.scrollTo(0, 0);
  };

  const addToCart = (product: Product, size: string = 'One Size') => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id && item.size === size);
      if (existingItem) {
        return prev.map(item => 
          (item.id === product.id && item.size === size)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, size, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.size === size)));
  };

  const updateQuantity = (productId: number, size: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId && item.size === size) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const toggleFavourite = (productId: number) => {
    setFavourites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Define which pages should show the global header
  const showHeader = ['landing', 'product_detail', 'cart', 'account', 'products', 'favourites', 'login'].includes(view);

  // Helper to render current view
  const renderView = () => {
    switch (view) {
      case 'landing':
        return (
          <>
            <Hero onNavigate={navigateTo} />
            <Narrative />
            <Collection onNavigate={navigateTo} />
            <Marquee />
            <Footer />
          </>
        );
      case 'products':
        return <Products onNavigate={navigateTo} addToCart={addToCart} searchQuery={searchQuery} />;
      case 'product_detail':
        const product = products.find(p => p.id === selectedProductId);
        return product ? (
          <ProductDetail 
            product={product} 
            onNavigate={navigateTo} 
            addToCart={addToCart} 
            isFavourite={favourites.includes(product.id)}
            toggleFavourite={toggleFavourite}
          />
        ) : null;
      case 'cart':
        return <Cart onNavigate={navigateTo} cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />;
      case 'favourites':
        return <Favourites onNavigate={navigateTo} favourites={favourites} toggleFavourite={toggleFavourite} addToCart={addToCart} />;
      case 'account':
        return <Account onNavigate={navigateTo} />;
      case 'checkout':
        return <Checkout onNavigate={navigateTo} cartItems={cartItems} />;
      case 'login':
        return <Login onNavigate={navigateTo} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-background-dark">
      {showHeader && <Header onNavigate={navigateTo} cartCount={cartCount} setSearchQuery={setSearchQuery} />}
      <main className="flex-1 w-full">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
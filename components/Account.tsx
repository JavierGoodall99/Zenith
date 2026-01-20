import React, { useState } from 'react';
import { PageView } from '../App';
import { products } from '../data';

interface AccountProps {
  onNavigate: (page: PageView) => void;
}

type Tab = 'dashboard' | 'orders' | 'addresses' | 'settings';

const Account: React.FC<AccountProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  const mockOrders = [
    {
      id: 'ZEN-9921',
      date: 'May 24, 2025',
      status: 'Processing',
      total: '$2,850',
      items: [products[0], products[1]]
    },
    {
      id: 'ZEN-8842',
      date: 'April 10, 2025',
      status: 'Delivered',
      total: '$1,200',
      items: [products[3]]
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <div className="space-y-8 animate-fade-in">
             <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-8">Order History</h2>
             {mockOrders.map((order) => (
                <div key={order.id} className="border border-white/10 bg-surface-dark p-4 md:p-6 group hover:border-white/30 transition-colors">
                   <div className="flex flex-col md:flex-row justify-between mb-6 border-b border-white/5 pb-4">
                      <div className="flex flex-wrap gap-4 md:gap-6 mb-4 md:mb-0">
                         <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block">Order No.</span>
                            <span className="text-sm font-display">{order.id}</span>
                         </div>
                         <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block">Date</span>
                            <span className="text-sm font-display">{order.date}</span>
                         </div>
                         <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block">Status</span>
                            <span className={`text-sm font-bold uppercase tracking-wider ${order.status === 'Processing' ? 'text-primary' : 'text-white'}`}>{order.status}</span>
                         </div>
                      </div>
                      <div className="text-left md:text-right">
                         <span className="text-lg font-serif italic">{order.total}</span>
                      </div>
                   </div>
                   
                   <div className="flex gap-4">
                      {order.items.map((item) => (
                         <div key={item.id} className="w-16 h-20 bg-background-dark overflow-hidden relative">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80" />
                         </div>
                      ))}
                      <button className="w-20 h-20 border border-white/10 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white hover:border-white/40 transition-colors">
                         View
                      </button>
                   </div>
                </div>
             ))}
          </div>
        );
      case 'addresses':
        return (
          <div className="animate-fade-in">
             <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-8">Addresses</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-primary p-6 relative">
                   <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1">Default</span>
                   <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Jane Doe</h3>
                   <p className="text-white/60 text-sm leading-relaxed mb-6">
                     1204 Brutalist Ave, Apt 4B<br/>
                     Paris, 75011<br/>
                     France
                   </p>
                   <div className="flex gap-4">
                      <button className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">Edit</button>
                      <button className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">Remove</button>
                   </div>
                </div>
                <div className="border border-white/10 border-dashed p-6 flex items-center justify-center cursor-pointer hover:border-white/40 hover:bg-white/5 transition-all group min-h-[200px]">
                   <div className="text-center">
                      <span className="material-symbols-outlined text-white/40 mb-2 group-hover:text-primary transition-colors">add</span>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white">Add New Address</p>
                   </div>
                </div>
             </div>
          </div>
        );
      case 'settings':
         return (
            <div className="animate-fade-in max-w-xl">
               <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-8">Account Settings</h2>
               <form className="space-y-8">
                  <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Full Name</label>
                    <input type="text" defaultValue="Jane Doe" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                 </div>
                 <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Email</label>
                    <input type="email" defaultValue="jane@example.com" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                 </div>
                 <div className="pt-4 border-t border-white/10 mt-8">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Change Password</h3>
                    <div className="space-y-6">
                       <div className="group">
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Current Password</label>
                          <input type="password" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                       </div>
                       <div className="group">
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">New Password</label>
                          <input type="password" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                       </div>
                    </div>
                 </div>
                 <div className="pt-6">
                    <button className="w-full md:w-auto bg-white text-background-dark px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors">
                       Save Changes
                    </button>
                 </div>
               </form>
            </div>
         );
      default: // Dashboard
        return (
           <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-2">Welcome, Jane.</h2>
              <p className="text-white/40 mb-12">Member since 2024</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                 <div className="bg-surface-dark p-6 border-l-2 border-primary">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-2">Active Orders</span>
                    <span className="text-3xl font-display">1</span>
                 </div>
                 <div className="bg-surface-dark p-6 border-l-2 border-white/20">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-2">Total Spend</span>
                    <span className="text-3xl font-display">$4,050</span>
                 </div>
                 <div className="bg-surface-dark p-6 border-l-2 border-white/20">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-2">Wishlist</span>
                    <span className="text-3xl font-display">4</span>
                 </div>
              </div>

              <div>
                 <div className="flex justify-between items-end mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/60">Recent Order</h3>
                    <button onClick={() => setActiveTab('orders')} className="text-xs text-primary hover:text-white transition-colors">View All</button>
                 </div>
                 <div className="border border-white/10 bg-surface-dark p-6">
                   <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                         <p className="text-lg font-serif italic mb-1">Order #ZEN-9921</p>
                         <p className="text-xs text-white/40 uppercase tracking-widest">May 24, 2025 • Processing</p>
                      </div>
                      <button className="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-1 self-start md:self-auto">Track</button>
                   </div>
                 </div>
              </div>
           </div>
        );
    }
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'orders', label: 'Order History' },
    { id: 'addresses', label: 'Addresses' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className="flex min-h-screen w-full bg-background-dark text-white font-display pt-20 lg:pt-0">
       
       {/* Sidebar (Desktop) */}
       <aside className="hidden lg:flex w-80 flex-col justify-between fixed left-0 top-0 h-screen border-r border-white/5 bg-background-dark z-40 p-12 pt-32">
          <div>
             <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-surface-dark flex items-center justify-center text-primary font-serif italic text-xl border border-white/10">
                   J
                </div>
                <div>
                   <p className="text-sm font-bold uppercase tracking-widest">Jane Doe</p>
                   <p className="text-[10px] text-white/40 uppercase tracking-widest">Member</p>
                </div>
             </div>

             <nav className="flex flex-col gap-2">
                {tabs.map((item) => (
                   <button
                     key={item.id}
                     onClick={() => setActiveTab(item.id as Tab)}
                     className={`text-left py-3 px-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 border-l-2 ${
                        activeTab === item.id 
                        ? 'border-primary text-white bg-white/5 pl-6' 
                        : 'border-transparent text-white/40 hover:text-white hover:pl-6 hover:border-white/20'
                     }`}
                   >
                     {item.label}
                   </button>
                ))}
             </nav>
          </div>

          <button 
             onClick={() => onNavigate('landing')}
             className="text-left py-3 px-4 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-red-400 transition-colors flex items-center gap-2"
          >
             <span className="material-symbols-outlined text-[16px]">logout</span>
             Log Out
          </button>
       </aside>

       {/* Main Content */}
       <main className="flex-1 lg:ml-80 min-h-screen">
          {/* Mobile Tab Navigation */}
          <div className="lg:hidden sticky top-16 z-30 bg-background-dark/95 backdrop-blur border-b border-white/5 overflow-x-auto hide-scrollbar">
             <div className="flex px-6 w-max">
                {tabs.map((item) => (
                   <button
                     key={item.id}
                     onClick={() => setActiveTab(item.id as Tab)}
                     className={`py-4 px-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap border-b-2 transition-colors ${
                        activeTab === item.id 
                        ? 'border-primary text-primary' 
                        : 'border-transparent text-white/40'
                     }`}
                   >
                     {item.label}
                   </button>
                ))}
             </div>
          </div>

          <div className="p-6 md:p-12 lg:p-20 lg:pt-32">
             {renderContent()}
             
             {/* Mobile Logout */}
             <div className="lg:hidden mt-12 pt-8 border-t border-white/5">
                <button 
                   onClick={() => onNavigate('landing')}
                   className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-red-400 transition-colors flex items-center gap-2"
                >
                   <span className="material-symbols-outlined text-[16px]">logout</span>
                   Log Out
                </button>
             </div>
          </div>
       </main>
    </div>
  );
};

export default Account;
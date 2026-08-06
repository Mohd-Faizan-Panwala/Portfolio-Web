import React, { useState } from 'react';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import StackPage from './pages/Stack';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const portfolioData = {
    name: "FAIZAN",
    title: "Junior Software Engineer",
    subtitle: "Building scalable backend architectures, automated data pipelines, and responsive web applications with precision.",
    metrics: [
      { label: "CORE TECH", value: "3+" },
      { label: "PROJECTS", value: "5+" },
      { label: "YEARS EXP", value: "Fresher" }
    ],
    email: "faizanpanwala110@gamil.com"
  };

  const navItems = [
    { 
      id: 'home', 
      label: 'HOME', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      )
    },
    { 
      id: 'about', 
      label: 'ABOUT', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      )
    },
    { 
      id: 'stack', 
      label: 'STACK', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
      )
    },
    { 
      id: 'projects', 
      label: 'PROJECTS', 
      isGlowing: true,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      )
    },
    { 
      id: 'contact', 
      label: 'CONTACT', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage data={portfolioData} onNavigate={setCurrentPage} />;
      case 'about': return <AboutPage data={portfolioData} />;
      case 'stack': return <StackPage data={portfolioData} />;
      case 'projects': return <ProjectsPage data={portfolioData} />;
      case 'contact': return <ContactPage data={portfolioData} />;
      default: return <HomePage data={portfolioData} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans flex flex-col antialiased w-full overflow-x-hidden">
      
      {/* DESKTOP HEADER - Fluid Width Across Desktop Displays */}
      <header className="hidden md:flex justify-between items-center px-6 lg:px-12 xl:px-16 2xl:px-24 py-6 w-full mx-auto">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Available for engineering roles</span>
        </div>
        
        <nav className="flex items-center gap-8 font-mono text-xs font-semibold tracking-widest">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={
                item.isGlowing
                  ? `transition duration-300 pb-1 border-b-2 text-pink-400 font-bold drop-shadow-[0_0_12px_rgba(236,72,153,0.9)] animate-pulse border-transparent hover:text-pink-300 ${
                      currentPage === item.id ? 'border-pink-500' : ''
                    }`
                  : `transition duration-300 hover:text-cyan-400 pb-1 border-b-2 ${
                      currentPage === item.id ? 'text-cyan-400 border-cyan-400' : 'text-slate-400 border-transparent'
                    }`
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {/* MOBILE TOP HEADER */}
      <div className="md:hidden flex justify-between items-center px-5 pt-5 pb-2 w-full mx-auto">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
          <span className="font-mono font-bold text-white tracking-widest text-xs">FAIZAN.</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>AVAILABLE</span>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <main className="flex-grow w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-2 sm:pt-4 pb-28 md:pb-12">
        {renderPage()}
      </main>

      {/* MOBILE BOTTOM NAVIGATION DOCK */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 px-4 pb-5 pt-2 pointer-events-none">
        <div className="bg-slate-900/90 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.8)] p-1.5 pointer-events-auto flex justify-around items-center max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${
                  item.isGlowing
                    ? 'text-pink-400 font-bold drop-shadow-[0_0_10px_rgba(236,72,153,0.9)] animate-pulse'
                    : isActive 
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
                      : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && !item.isGlowing && (
                  <span className="absolute -top-1 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                )}
                
                <div className={`${isActive || item.isGlowing ? 'scale-110' : ''} transition-all duration-300`}>
                  {item.icon}
                </div>
                
                <span className={`text-[7px] font-mono mt-0.5 font-bold tracking-wider ${item.isGlowing ? 'text-pink-300' : isActive ? 'opacity-100 text-cyan-300' : 'opacity-60'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

    </div>
  );
}
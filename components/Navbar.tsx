
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => setIsNavigating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [currentPage, isNavigating]);

  const handleNavigate = (page: any) => {
    setIsNavigating(true);
    onPageChange(page);
    setIsMenuOpen(false);
  };

  const whiteLogo = "/images/whitelogo.png";
  const greenLogo = "/images/greenlogo.png";
  
  const navItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'HELP', id: 'help' }
  ];

  const marketplaceUrl = "https://www.minecraft.net/en-us/marketplace/creator/norvale";
  
  const isSolidUI = scrolled || isMenuOpen;
  const shouldBeFullWidth = isMenuOpen || isNavigating;

  // HASTIGHET: Rask ned (700ms), litt saktere opp (1100ms) som forespurt
  const navClasses = `
    fixed left-1/2 -translate-x-1/2 z-[110] transition-all ${scrolled ? 'duration-700' : 'duration-[1100ms]'}
    ${(scrolled && !shouldBeFullWidth)
        ? 'top-4 w-[92%] md:w-[95%] max-w-7xl py-3 px-8 rounded-2xl' 
        : 'top-0 w-full max-w-full py-8 px-6 md:px-12 rounded-none'
    }
  `;

  // Subtil bounce: Bruker 1.35 i stedet for 1.56 for å gjøre spretten mindre voldsom
  const entryTiming = 'cubic-bezier(0.34, 1.30, 0.64, 1)';
  const exitTiming = 'cubic-bezier(0.4, 0, 0.2, 1)';
  
  // Raskere og mer bouncy timing for meny-knapper
  const menuBtnTiming = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

  return (
    <>
      <nav 
        className={navClasses} 
        style={{ 
          transitionTimingFunction: (scrolled && !shouldBeFullWidth) ? entryTiming : exitTiming 
        }}
      >
        {/* Bakgrunnen: Endret fra duration-600 til dynamisk hastighet og økt translate-y for Safari-sikring */}
        <div 
          className={`absolute inset-0 bg-white/95 backdrop-blur-md -z-10 transition-all ${
            isNavigating 
              ? 'duration-0 opacity-0 shadow-none' 
              : (scrolled ? 'duration-[600ms]' : 'duration-[1000ms]')
          } ${
            scrolled 
              ? `translate-y-0 visible ${isMenuOpen ? 'rounded-none shadow-none' : 'rounded-2xl shadow-block'}` 
              : '-translate-y-[250%] invisible rounded-none shadow-none opacity-0'
          }`}
          style={{ 
            transitionTimingFunction: scrolled ? entryTiming : exitTiming,
            pointerEvents: 'none',
            boxShadow: isNavigating ? 'none' : undefined,
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: scrolled ? 'translateY(0) translateZ(0)' : 'translateY(-250%) translateZ(0)',
            willChange: 'transform, opacity'
          }}
        />

        <div className="flex items-center justify-between w-full relative z-[120]">
          <div 
            className="flex items-center gap-2 group cursor-pointer transition-transform duration-300"
            onClick={() => handleNavigate('home')}
          >
            <div className="relative h-7 w-auto transition-transform duration-300">
              <img src={whiteLogo} alt="Logo White" className={`h-full w-auto transition-opacity duration-300 ${isSolidUI ? 'opacity-0' : 'opacity-100'}`} />
              <img src={greenLogo} alt="Logo Green" className={`h-full w-auto absolute inset-0 transition-opacity duration-300 ${isSolidUI ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <span className={`text-xl font-black tracking-tighter lowercase transition-colors duration-300 ${isSolidUI ? 'text-blockster-green' : 'text-white'}`}>
              blockster
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-black uppercase tracking-widest">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavigate(item.id)}
                className={`relative group py-1 transition-colors duration-[400ms] ${
                  isSolidUI 
                    ? (currentPage === item.id ? 'text-blockster-green' : 'text-blockster-dark hover:text-blockster-green') 
                    : (currentPage === item.id ? 'text-blockster-green' : 'text-white hover:text-white')
                }`}
              >
                <span className="block transition-transform duration-200 group-hover:rotate-[3deg]">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <a 
              href={marketplaceUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`hidden md:block minecraft-btn px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-100 ${
                scrolled ? 'bg-blockster-green text-white shadow-block-green' : 'bg-white text-blockster-dark shadow-block'
              }`}
            >
              Marketplace
            </a>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden relative w-12 h-12 flex items-center justify-center focus:outline-none z-[120] -mr-2">
              <div className="relative w-6 h-[18px]">
                <span className={`absolute left-0 top-0 block h-[3px] w-full rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7.5px] bg-blockster-green' : (isSolidUI ? 'bg-blockster-green' : 'bg-white')}`}></span>
                <span className={`absolute left-0 top-[7.5px] block h-[3px] w-full rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : (isSolidUI ? 'bg-blockster-green' : 'bg-white')}`}></span>
                <span className={`absolute left-0 top-[15px] block h-[3px] w-full rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7.5px] bg-blockster-green' : (isSolidUI ? 'bg-blockster-green' : 'bg-white')}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILMENY */}
      <div 
        className={`fixed inset-0 z-[100] bg-white md:hidden transition-transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ 
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDuration: isNavigating ? '400ms' : '650ms'
        }}
      >
        <div className="h-full flex flex-col justify-center px-10 relative z-10 pt-20">
          <div className="flex flex-col gap-8 items-start">
            {navItems.map((item, index) => (
              <button 
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                } ${
                  currentPage === item.id ? 'text-blockster-green' : 'text-blockster-dark hover:text-blockster-green'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${120 + index * 60}ms` : `0ms`,
                  transitionTimingFunction: isMenuOpen ? menuBtnTiming : 'ease-in'
                }}
              >
                {item.label}
              </button>
            ))}
            
            <a 
              href={marketplaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`minecraft-btn w-full bg-blockster-green text-white px-8 py-5 rounded-xl text-sm font-black uppercase tracking-widest shadow-block-green transition-all duration-500 mt-4 flex items-center justify-center ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: isMenuOpen ? `${120 + navItems.length * 60}ms` : '0ms',
                transitionTimingFunction: isMenuOpen ? menuBtnTiming : 'ease-in'
              }}
            >
              Marketplace
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

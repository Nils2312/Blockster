
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Lås scrolling når menyen er åpen
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const whiteLogo = "/images/whitelogo.png";
  const greenLogo = "/images/greenlogo.png";

  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'HELP', id: 'help' }
  ];

  const marketplaceUrl = "https://www.minecraft.net/en-us/marketplace/creator/norvale";

  const isSolid = scrolled || isMenuOpen;

  const navClasses = `
    fixed left-1/2 -translate-x-1/2 z-[110] transition-all duration-500
    ${isMenuOpen 
      ? 'top-0 w-full max-w-full bg-transparent py-8 px-6 md:px-12 rounded-none shadow-none' 
      : scrolled 
        ? 'top-4 w-[92%] md:w-[95%] max-w-7xl bg-white/95 backdrop-blur-md shadow-block py-3 px-8 rounded-2xl' 
        : 'top-0 w-full max-w-full bg-transparent py-8 px-6 md:px-12 rounded-none shadow-none'
    }
  `;

  return (
    <>
      <nav 
        className={navClasses} 
        style={{ 
          transitionTimingFunction: (scrolled && !isMenuOpen) ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'cubic-bezier(0.4, 0, 0.2, 1)' 
        }}
      >
        <div className="flex items-center justify-between w-full">
          <div 
            className="flex items-center gap-2 group cursor-pointer transition-transform duration-300 relative z-[120]"
            onClick={() => { onPageChange('home'); closeMenu(); }}
          >
            <div className="relative h-7 w-auto transition-transform duration-300">
              <img 
                src={whiteLogo} 
                alt="Blockster Logo White" 
                className={`h-full w-auto transition-opacity duration-300 ${isSolid ? 'opacity-0' : 'opacity-100'}`}
              />
              <img 
                src={greenLogo} 
                alt="Blockster Logo Green" 
                className={`h-full w-auto absolute inset-0 transition-opacity duration-300 ${isSolid ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            
            <span className={`text-xl font-black tracking-tighter lowercase transition-colors duration-300 ${
              isSolid ? 'text-blockster-green' : 'text-white'
            }`}>
              blockster
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-black uppercase tracking-widest transition-opacity duration-300">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => onPageChange(item.id)}
                className={`relative group py-1 transition-colors duration-200 ${
                  isSolid
                  ? (currentPage === item.id ? 'text-blockster-green' : 'text-blockster-dark hover:text-blockster-green') 
                  : (currentPage === item.id ? 'text-blockster-green' : 'text-white hover:text-white')
                }`}
              >
                <span className={`block transition-transform duration-200 ease-out group-hover:rotate-[3deg]`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <a 
              href={marketplaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:block minecraft-btn px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-200 ${
                isSolid
                ? 'bg-blockster-green text-white shadow-block-green' 
                : 'bg-white text-blockster-dark shadow-block'
              }`}
            >
              Marketplace
            </a>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-12 h-12 flex items-center justify-center focus:outline-none z-[120] -mr-2"
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-[18px]">
                <span className={`absolute left-0 top-0 block h-[3px] w-full rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-[7.5px] bg-blockster-green' : (isSolid ? 'bg-blockster-green' : 'bg-white')
                }`}></span>
                <span className={`absolute left-0 top-[7.5px] block h-[3px] w-full rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-x-0 bg-blockster-green' : (isSolid ? 'bg-blockster-green' : 'bg-white')
                }`}></span>
                <span className={`absolute left-0 top-[15px] block h-[3px] w-full rounded-full transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-[7.5px] bg-blockster-green' : (isSolid ? 'bg-blockster-green' : 'bg-white')
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[100] bg-white transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="h-full flex flex-col justify-center px-10 relative z-10 pt-20">
          <div className="flex flex-col gap-8 items-start">
            {navItems.map((item, index) => (
              <button 
                key={item.id}
                onClick={() => { onPageChange(item.id); closeMenu(); }}
                className={`text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                } ${
                  currentPage === item.id ? 'text-blockster-green' : 'text-blockster-dark hover:text-blockster-green'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen 
                    ? `${150 + index * 60}ms` 
                    : `${(navItems.length - 1 - index) * 40}ms`
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
              style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
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

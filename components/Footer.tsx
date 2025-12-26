import React from 'react';

interface FooterProps {
  onPageChange: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const currentYear = new Date().getFullYear();

  const Icons = {
    YouTube: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    TikTok: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.11 8.11 0 0 1-1.89-1.42c-.1-.08-.15-.08-.15.06v6.72c-.03 2.12-.74 4.24-2.23 5.73-1.63 1.61-3.97 2.44-6.24 2.22-2.31-.22-4.47-1.61-5.63-3.61-1.25-2.16-1.18-4.97.2-7.02 1.34-2 3.73-3.08 6.1-2.78v4.13c-1.24-.22-2.6.14-3.48 1.05-.73.74-.97 1.77-.73 2.76.24 1 .95 1.83 1.9 2.18.94.34 2.05.15 2.82-.49.77-.63 1.15-1.63 1.14-2.62V.02z"/>
      </svg>
    ),
    Twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
      </svg>
    ),
    Discord: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    )
  };

  const greenLogo = "/images/greenlogo.png";;

  return (
    <footer className="bg-white px-6 md:px-12 py-12 md:py-16 mt-0 rounded-t-[1.25rem] md:rounded-t-[1.875rem] relative z-10 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          
          <div className="flex flex-col items-start gap-8 w-full md:w-auto">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => onPageChange('home')}>
              <img 
                src={greenLogo} 
                alt="Blockster Logo" 
                className="h-10 w-auto"
              />
              <span className="text-3xl font-black tracking-tighter lowercase text-blockster-green">
                blockster
              </span>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-black uppercase tracking-widest text-blockster-dark" aria-label="Footer Navigation">
              <button onClick={() => onPageChange('about')} className="hover:text-blockster-green transition-colors">ABOUT</button>
              <button onClick={() => onPageChange('projects')} className="hover:text-blockster-green transition-colors">PROJECTS</button>
              <button onClick={() => onPageChange('help')} className="hover:text-blockster-green transition-colors">HELP</button>
            </nav>
            
            <div className="flex gap-6 items-center text-gray-300">
              <a href="https://www.youtube.com/@blockstermc" target="_blank" rel="noopener noreferrer" className="hover:text-blockster-green transition-colors p-1" aria-label="YouTube">{Icons.YouTube}</a>
              <a href="https://twitter.com/blocksterminec1?s=11&t=jdN_3eagCfpyI4YlHvpMEQ" target="_blank" rel="noopener noreferrer" className="hover:text-blockster-green transition-colors p-1" aria-label="Twitter">{Icons.Twitter}</a>
              <a href="https://discord.com/invite/RmSmWjaBNY" target="_blank" rel="noopener noreferrer" className="hover:text-blockster-green transition-colors p-1" aria-label="Discord">{Icons.Discord}</a>
              <a href="https://www.tiktok.com/@blocksterminecraft?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:text-blockster-green transition-colors p-1" aria-label="TikTok">{Icons.TikTok}</a>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-left">
            <button 
              onClick={() => onPageChange('privacy')} 
              className="text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-blockster-green transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onPageChange('terms')} 
              className="text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-blockster-green transition-colors"
            >
              Terms of Service
            </button>
          </div>

          <div className="text-gray-300 text-[10px] font-black uppercase tracking-tight">
            © 2020-{currentYear} BLOCKSTER - 930215333
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

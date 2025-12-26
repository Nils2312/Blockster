
import React from 'react';

interface ComingSoonPageProps {
  shouldAnimateHeader?: boolean;
  onPageChange: (page: any) => void;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ shouldAnimateHeader = true, onPageChange }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-[#f5f7f5]">
      <section className={`bg-blockster-dark pt-48 pb-24 px-6 md:px-12 rounded-b-xl md:rounded-b-3xl shadow-block-dark relative z-10 ${shouldAnimateHeader ? 'animate-slide-down' : ''}`}>
        <div className="max-w-7xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: shouldAnimateHeader ? '0.6s' : '0.1s' }}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.0] tracking-tighter text-white max-w-4xl">
            PROJECT <br />
            <span className="text-blockster-green">COMING SOON</span>
          </h2>
        </div>
      </section>

      <section className="flex-grow px-6 md:px-12 py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: shouldAnimateHeader ? '1.1s' : '0.3s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="flex flex-col items-start text-left space-y-8">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-blockster-dark leading-[0.9]">
                STAY <br /> TUNED
              </h3>
              
              <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-lg">
              Every block is being carefully placed and every feature refined. This project is currently in development and will be available on the Minecraft Marketplace soon.
              </p>

              <div className="pt-4">
                <button 
                  onClick={() => onPageChange('projects')}
                  className="minecraft-btn bg-blockster-dark text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm shadow-block-dark"
                >
                  Back to Projects
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img 
                src="/images/crafting.gif"
                alt="Coming Soon Preview" 
                className="w-full max-w-md h-auto object-cover rounded-none"
              />
            </div>

          </div>
        </div>
        
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blockster-green/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default ComingSoonPage;

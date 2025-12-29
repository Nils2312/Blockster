
import React from 'react';

interface ActionTilesProps {
  onPageChange: (page: any) => void;
}

const ActionTiles: React.FC<ActionTilesProps> = ({ onPageChange }) => {
  return (
    <section id="help" className="grid grid-cols-1 md:grid-cols-2 gap-12 scroll-mt-32">
      <div 
        className="group bg-white px-6 py-10 md:p-12 rounded-2xl flex flex-col justify-between min-h-[400px] relative overflow-hidden reveal tilt-l shadow-block"
      >
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blockster-green/5 rounded-3xl rotate-12 transition-transform group-hover:rotate-45 duration-700"></div>

        <div className="space-y-6 relative z-10">
            <h3 className="text-blockster-dark text-4xl md:text-5xl font-black uppercase leading-[0.85] tracking-tighter">
              ANY <br /> <span className="text-blockster-green">QUESTIONS?</span>
            </h3>
            
            <p className="text-gray-400 font-medium text-base md:text-lg max-w-full md:max-w-[320px] leading-relaxed">
              Send an email or reach out with any questions. Always happy to help you on your journey.
            </p>
        </div>
        
        <div className="mt-8 md:mt-0 relative z-10">
          <a 
            href="mailto:contact@blockster.games" 
            className="minecraft-btn inline-block bg-blockster-dark text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm shadow-block-dark hover:shadow-block-dark"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="group bg-blockster-dark px-6 py-10 md:p-12 rounded-2xl flex flex-col justify-between min-h-[400px] relative overflow-hidden reveal tilt-r shadow-block-dark">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blockster-green/20 -mr-12 -mt-12 rotate-45 rounded-2xl transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110"></div>
        
        <div className="space-y-6 relative z-10">
            <h3 className="text-white text-4xl md:text-5xl font-black uppercase leading-[0.85] tracking-tighter">
              NEED <br /> SUPPORT?
            </h3>
            <p className="text-gray-400 font-medium text-base md:text-lg max-w-full md:max-w-[280px] leading-relaxed">Get help with any questions regarding marketplace products.</p>
        </div>
        
        <div className="mt-8 md:mt-0 relative z-10">
          <button 
            onClick={() => onPageChange('help')}
            className="minecraft-btn w-fit bg-blockster-green text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm shadow-block-green hover:shadow-block-green"
          >
            Visit Help Center
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActionTiles;

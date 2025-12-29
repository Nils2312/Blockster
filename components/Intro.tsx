
import React, { useEffect, useRef, useState } from 'react';

const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.65;
      const end = windowHeight * 0.25;
      
      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      
      setFillWidth(progress >= 0.98 ? 101 : progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative scroll-mt-32 reveal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="max-w-2xl lg:pt-14">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight text-blockster-dark mb-8">
            WHERE <br /> 
            <span className="fill-text-container" ref={containerRef}>
              CREATIVITY
              <span className="fill-text-overlay" style={{ width: `${fillWidth}%` }}>CREATIVITY</span>
            </span> <br />
            BECOMES <br /> 
            GAMEPLAY
          </h2>
          
          <div className="text-gray-500 space-y-10 leading-relaxed text-lg">
            <p>
            Creativity brought to life through hundreds of hours of planning, building, and coding, shaping epic RPGs and immersive horror experiences.
            </p>
            
            <div className="flex items-center gap-12">
                <div className="flex flex-col">
                    <div className="text-5xl font-black text-blockster-dark leading-none">6+</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mt-2">Worlds Created</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-5xl font-black text-blockster-dark leading-none">1M+</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mt-2">Downloads</div>
                </div>
            </div>
          </div>
        </div>

        <div className="lg:pt-14">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blockster-green rounded-xl rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
            <img 
              src="/images/1.png"
              alt="Creative World Building" 
              className="relative rounded-xl w-full aspect-[10/7] object-cover transition-all duration-1000 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

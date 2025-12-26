
import React from 'react';

const Hero: React.FC = () => {
  const words = ["ADVENTURE", "STARTS", "WITH", "A", "SINGLE", "BLOCK"];
  
  return (
    <section className="relative h-[99vh] min-h-[650px] flex items-end pb-16 px-6 md:px-12 hero-video-container mb-8 z-10">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video brightness-[0.9] saturate-[1.1]"
      >
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="max-w-5xl">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-black uppercase leading-[1.0] tracking-tight flex flex-wrap gap-x-[0.3em]">
            {words.map((word, i) => (
              <span 
                key={i} 
                className="inline-block opacity-0"
                style={{ 
                  animation: `wordFadeUp 1.4s cubic-bezier(0.19, 1, 0.22, 1) forwards`,
                  animationDelay: `${0.1 + (i * 0.15)}s`
                }}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
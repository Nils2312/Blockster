
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const words = ["ADVENTURE", "STARTS", "WITH", "A", "SINGLE", "BLOCK"];
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const [showClouds, setShowClouds] = useState(false); 
  const [canShowText, setCanShowText] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const posterUrl = "/images/poster.jpg"; 

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const img = new Image();
    img.src = posterUrl;
    img.onload = () => setIsPosterLoaded(true);

    const backupTimer = setTimeout(() => {
        setCanShowText(true);
    }, 2500);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(backupTimer);
    };
  }, []);

  useEffect(() => {
    if (showClouds) {
      const timer = setTimeout(() => {
        setShowClouds(false);
      }, 3500); 
      return () => clearTimeout(timer);
    }
  }, [showClouds]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    setShowClouds(true);
    setTimeout(() => {
      setCanShowText(true);
    }, 100);
  };

  const textTranslateY = scrollY * -0.08;

  return (
    <section className="relative h-[84vh] md:h-[99vh] min-h-[500px] md:min-h-[650px] flex items-end pb-16 px-6 md:px-12 hero-video-container mb-12 z-10 bg-[#dcdcdc]">
      
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-[-2] ${isPosterLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <img 
          src={posterUrl} 
          alt="Hero Background Placeholder"
          className="w-full h-full object-cover"
        />
      </div>

      <div className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out z-[-1] ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          onLoadedData={handleVideoLoad}
          className="w-full h-full object-cover"
        >
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {showClouds && (
        <div 
          className="absolute inset-0 z-30 pointer-events-none overflow-hidden"
          style={{ 
            perspective: '1000px', 
            transformStyle: 'preserve-3d',
            isolation: 'isolate',
            WebkitTransform: 'translate3d(0,0,0)'
          }}
        >
          <img 
            src="/images/clouds.png" 
            alt="Flying Clouds" 
            className="absolute bottom-[-15%] left-[-10%] md:left-[-15%] w-[160%] md:w-[130%] h-auto object-contain opacity-0"
            style={{
              animation: 'cloudFlyBy 3.2s ease-out forwards',
              mixBlendMode: 'screen',
              filter: 'blur(6px)',
              willChange: 'transform, opacity',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'scale(1.1) translate3d(-10%, 10%, 0) rotate(0.001deg)',
              WebkitTransform: 'scale(1.1) translate3d(-10%, 10%, 0) rotate(0.001deg)'
            }}
          />
        </div>
      )}

      <style>{`
        :root {
          --shadow-opacity: 0.15;
        }

        @keyframes cloudFlyBy {
          0% { opacity: 0; transform: scale(1.1) translate3d(-10%, 10%, 0); }
          20% { opacity: 0.29; transform: scale(1.3) translate3d(-12%, 12%, 0); }
          70% { opacity: 1.0; }
          100% { opacity: 0; transform: scale(3.5) translate3d(-35%, 35%, 0); }
        }

        .pixel-shadow {
          text-shadow: 0px 4px 0px rgba(0, 0, 0, var(--shadow-opacity));
        }
        
        @media (min-width: 768px) {
          .pixel-shadow {
            text-shadow: 0px 7px 0px rgba(0, 0, 0, var(--shadow-opacity));
          }
        }

        @keyframes quickFadeIn {
          0% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .animate-word {
          animation: quickFadeIn 0.6s cubic-bezier(0.19, 1, 0.22, 1) both;
        }
      `}</style>
      
      <div 
        className="relative z-20 max-w-7xl mx-auto w-full transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${textTranslateY}px)` }}
      >
        <div className="max-w-5xl">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-black uppercase leading-[1.0] tracking-tight flex flex-wrap gap-x-[0.35em] pixel-shadow">
            {words.map((word, i) => (
              <span 
                key={i} 
                className={`inline-block ${canShowText ? 'animate-word' : 'opacity-0'}`}
                style={{ 
                  animationDelay: `${i * 0.1}s` 
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

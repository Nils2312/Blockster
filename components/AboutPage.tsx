
import React, { useEffect, useRef, useState } from 'react';

interface AboutPageProps {
  shouldAnimateHeader?: boolean;
}

const GalleryItem: React.FC<{ src: string, label: string, index: number }> = ({ src, label, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const baseTilt = (index % 2 === 0 ? 1 : -1) * (1.5 + (index % 3) * 0.5);

  useEffect(() => {
    let animationFrame: number;

    const updateRotation = () => {
      if (!itemRef.current) return;
      
      const rect = itemRef.current.getBoundingClientRect();
      const viewportCenter = window.innerWidth / 2;
      const itemCenter = rect.left + rect.width / 2;
      
      const distanceFromCenter = Math.abs(viewportCenter - itemCenter);
      const maxDistance = window.innerWidth / 2;
      
      let progress = distanceFromCenter / maxDistance;
      progress = Math.min(1, Math.max(0, progress));
      
      const smoothProgress = Math.pow(progress, 1.5);
      const currentRotation = baseTilt * smoothProgress;
      
      setRotation(currentRotation);
      animationFrame = requestAnimationFrame(updateRotation);
    };

    animationFrame = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animationFrame);
  }, [baseTilt]);

  return (
    <div 
      ref={itemRef}
      className="w-[350px] md:w-[450px] h-[240px] md:h-[300px] shrink-0 rounded-2xl overflow-hidden shadow-block border-4 border-white group relative"
      style={{ 
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.1s linear', 
        willChange: 'transform'
      }}
    >
      <img 
        src={src} 
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
        alt={`Minecraft Marketplace World - ${label} by Blockster`} 
      />
      <div className="absolute bottom-4 left-4 bg-blockster-green text-white px-3 py-1.4 rounded-lg shadow-block-green z-20">
        <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
};

const AboutPage: React.FC<AboutPageProps> = ({ shouldAnimateHeader = true }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    
    let delay = 100;
    if (shouldAnimateHeader) {
      delay = window.innerWidth < 768 ? 400 : 800;
    }

    const timer = setTimeout(() => {
      setIsReady(true);
      window.dispatchEvent(new Event('scroll'));
    }, delay);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, [shouldAnimateHeader]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.offsetWidth;
      const currentScroll = container.scrollLeft;

      if (direction === 'left') {
        container.scrollTo({
          left: Math.max(0, currentScroll - scrollAmount),
          behavior: 'smooth'
        });
      } else {
        container.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  const galleryItems = [
    { src: "/images/5.jpg", label: "DRAGONS" },
    { src: "/images/6.jpg", label: "DEEP SEA HORROR" },
    { src: "/images/7.jpg", label: "LEGENDARY DRAGONS" },
    { src: "/images/8.jpg", label: "ANTLERS" },
    { src: "/images/9.jpg", label: "THE ICE AGE" },
    { src: "/images/10.jpg", label: "ALIEN ESCAPE" },
    { src: "/images/17.jpg", label: "DRAGONS" },
    { src: "/images/12.jpg", label: "DEEP SEA HORROR" },
    { src: "/images/13.jpg", label: "DRAGONS" },
    { src: "/images/14.jpg", label: "LEGENDARY DRAGONS" },
    { src: "/images/15.jpg", label: "DINOSAUR HORROR" },
    { src: "/images/16.jpg", label: "ANTLERS" },
  ];

  const testimonials = [
    { user: "@bendythegamingd", text: "This is one of the coolest Minecraft horror maps I have ever seen. It feels like its own horror game." },
    { user: "@JovanniGrilli", text: "I played this twice. It was so good. I really hope they make a second chapter—I’ll definitely play it." },
    { user: "@IrisThatGothMf", text: "This is really well made for a Minecraft Bedrock map." },
    { user: "@fluffystaar83", text: "This is so cool! I love the story and the voice acting. The music and sound effects are amazing!" },
    { user: "@ZRK-z4m", text: "9.9/10. Best horror map I’ve ever played. The voice acting is triple A." },
    { user: "@bothbott4897", text: "Great map. It really gave me goosebumps at the end." },
    { user: "@kayesGaming07", text: "What makes this so good is the voice acting and the story. You guys nailed it. The trailer looks like a movie." },
    { user: "@Knight_Of_The_Chalice", text: "This looks amazing. Keep up the great work!" },
    { user: "@sahidmaldini5919", text: "I give this map 100/10. It’s so much fun, and the flow of the game is perfect." },
    { user: "@JovanniGrilli", text: "This has to be the best horror map." },
    { user: "@TornadoPlays", text: "I bought this and had so much fun. THANK YOU!" },
    { user: "@hummisman", text: "This doesn’t even feel like Minecraft anymore. This is straight-up triple A horror." },
    { user: "@TheAlcoholic27", text: "An extremely beautiful and immersive map with an interesting story. You can tell a lot of heart went into this." },
    { user: "@cubeanimations8049", text: "You guys deserve some kind of map award." },
    { user: "@natasharodinoff1813", text: "I’m buying this right now. It looks so good." },
    { user: "@TrentonNeff", text: "You should turn this into a horror movie. I would actually watch it." },
    { user: "@nutz880", text: "10/10. Absolutely amazing. I highly recommend buying it—the animations and voice acting are perfect." },
    { user: "@Pixels89", text: "I played this with my son, and he absolutely loved it. We were scared and impressed at the same time." },
    { user: "@CraftingWhMax", text: "Played this late at night and did not expect it to be this intense. The atmosphere is insanely good." },
    { user: "@Minecrplays1", text: "I went in blind and was genuinely surprised. The pacing and tension are really well done." },
    { user: "@FamilyCrafts", text: "One of the most immersive horror maps I’ve played. The story kept me hooked the entire time." },
    { user: "@MJone12", text: "I don’t usually play horror maps, but this one pulled me in immediately. Very well made." },
    { user: "@Chillones18", text: "Didn’t expect this level of quality. The voice acting and sound design really stand out." },
    { user: "@RetroBlocks", text: "This felt like a full horror game, not just a Minecraft map. Amazing experience." },
    { user: "@sergeant-e7h", text: "I just bought this and I’m already scared from watching the video alone." }
  ];
  

  return (
    <div className="pb-0 overflow-hidden">
      <section className={`bg-blockster-dark pt-48 pb-24 px-6 md:px-12 rounded-b-xl md:rounded-b-3xl shadow-block-dark relative ${shouldAnimateHeader ? 'md:animate-slide-down' : ''}`}>
        <div className="max-w-7xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: isMobile ? '0.1s' : (shouldAnimateHeader ? '0.6s' : '0.1s') }}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.0] tracking-tighter text-white max-w-4xl">
            CRAFTED BY ONE <br />
            <span className="text-blockster-green">PLAYED BY THOUSANDS</span>
          </h1>
        </div>
      </section>

      <div className={`transition-all duration-700 ${isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
        <section className="mt-24 md:mt-36 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center reveal">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blockster-green rounded-xl rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <img 
                src="/images/11.jpg"
                alt="Nils Kristian Bjøro - Minecraft Marketplace Creator and Founder of Blockster" 
                loading="lazy"
                decoding="async"
                className="relative rounded-xl w-full aspect-[10/7] object-cover transition-all duration-1000 group-hover:scale-[1.01]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
              BEYOND THE <br />
              <span className="text-blockster-green">ORDINARY</span>
            </h2>
            <div className="space-y-6 text-gray-500 font-medium text-lg leading-relaxed text-gray-400">
              <p>
                Founded by Nils Kristian Bjøro in 2020, Blockster is about more than placing blocks. It’s about building atmosphere. What began as small passion projects has grown into cinematic worlds shaped by storytelling, professional voice actors, and original music and sound design.
              </p>
              <p>
               Every detail is placed with purpose, creating stories that stay with players long after leaving the game.
              </p>
              <p className="mt-6">
                In partnership with <a href="https://norvale.com" target="_blank" rel="noopener noreferrer" className="text-blockster-green font-black">Norvale</a>, we collaborate to publish our worlds on the Minecraft Marketplace, bringing our adventures to players all across the globe.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 md:mt-36 px-6 md:px-12 max-w-7xl mx-auto reveal">
          <div className="mb-16 text-left">
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">CORE PILLARS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
            <div className="md:col-span-5 bg-white px-6 py-10 md:p-12 rounded-2xl shadow-block flex flex-col justify-between group relative overflow-hidden min-h-[320px] md:min-h-[400px] reveal tilt-l">
              <div className="absolute top-10 right-10 w-16 h-16 bg-blockster-green/10 rounded-xl rotate-12 group-hover:rotate-[-12deg] group-hover:translate-x-4 transition-transform duration-700"></div>
              <div className="absolute bottom-10 left-10 w-12 h-12 bg-blockster-green/10 rounded-lg -rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute top-1/2 right-6 w-8 h-8 bg-blockster-green/10 rounded-lg rotate-[35deg] group-hover:scale-125 transition-all duration-700"></div>
              
              <span className="font-black text-6xl md:text-8xl text-blockster-dark opacity-5 leading-none relative z-10">01</span>
              <div className="relative z-10">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-blockster-dark">ATMOSPHERE</h3>
                <p className="font-medium text-lg leading-relaxed text-gray-400 max-w-xs">
                Custom textures and sound design crafted to pull you deep into the experience. Creating moods, not just maps.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 grid-rows-none md:grid-rows-2 gap-6">
              <div className="bg-blockster-dark px-6 py-10 md:p-12 rounded-2xl shadow-block flex flex-col justify-between group relative overflow-hidden min-h-[320px] md:min-h-0 reveal tilt-r">
                 <div className="absolute bottom-10 right-10 w-20 h-20 bg-blockster-green/10 rounded-2xl rotate-45 group-hover:rotate-[90deg] transition-transform duration-1000"></div>
                 <div className="absolute top-6 right-24 w-10 h-10 bg-blockster-green/10 rounded-lg rotate-12 group-hover:-translate-y-2 transition-transform duration-700"></div>
                 
                 <div className="flex justify-between items-start">
                    <span className="font-black text-6xl text-white opacity-10 leading-none">02</span>
                 </div>
                 <div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white">STORY</h3>
                    <p className="font-medium text-lg leading-relaxed text-gray-400 max-md">
                      Narratives crafted with care, often featuring original scores and voice acting that breathe life into the pixels.
                    </p>
                 </div>
              </div>

              <div className="bg-blockster-green px-6 py-10 md:p-12 rounded-2xl shadow-block-green flex flex-col justify-between group relative overflow-hidden min-h-[320px] md:min-h-0 reveal tilt-ls">
                 <div className="absolute bottom-12 right-24 w-16 h-16 bg-white/10 rounded-2xl -rotate-[20deg] group-hover:rotate-[25deg] transition-transform duration-700 delay-100"></div>
                 <div className="absolute top-8 left-48 w-12 h-12 bg-white/10 rounded-xl rotate-[15deg] group-hover:scale-110 transition-transform duration-1000"></div>
                 
                 <span className="font-black text-6xl text-white opacity-20 leading-none relative z-10">03</span>
                 <div className="relative z-10">
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white">DETAIL</h3>
                    <p className="font-medium text-lg leading-relaxed text-white/80 max-w-md">
                    Worlds filled with detail, where every corner slowly reveals part of the lore. Crafted from the ground up.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal mt-32 md:mt-48 pb-10 space-y-12">
          <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                QUALITY OVER <span className="text-blockster-green">QUANTITY</span>
              </h2>
              <p className="text-gray-500 font-medium text-lg mt-6 max-w-xl">
              Carefully crafted worlds shaped through countless hours of iteration and refinement.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden pause-on-hover py-12">
            <div className="flex w-fit gap-8 md:gap-12 animate-marquee transition-transform duration-500">
              {[...galleryItems, ...galleryItems].map((item, i) => (
                <GalleryItem 
                  key={i} 
                  src={item.src} 
                  label={item.label} 
                  index={i} 
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 max-w-7xl mx-auto reveal pb-32 mt-12 md:mt-32">
          <div className="mb-6 md:mb-16">
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              FROM THE <span className="text-blockster-green">PLAYERS</span>
             </h2>
             <p className="text-gray-500 font-medium text-lg mt-6 max-w-xl">
             Player feedback lies at the heart of the experience. Words shared by players from around the world.
             </p>
          </div>

          {/* Mobil Testimonial Slider */}
          <div className="relative md:hidden group/nav overflow-visible pt-10">
            {/* Navigasjonspiler */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-[50%] -translate-y-1/2 z-50 bg-blockster-dark shadow-block-dark p-3 rounded-xl transition-all active:translate-y-[-48%] active:shadow-none"
              aria-label="Scroll testimonials left"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-[50%] -translate-y-1/2 z-50 bg-blockster-dark shadow-block-dark p-3 rounded-xl transition-all active:translate-y-[-48%] active:shadow-none"
              aria-label="Scroll testimonials right"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7"></path></svg>
            </button>

            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-0 snap-x snap-mandatory hide-scrollbar no-scrollbar items-start px-12"
            >
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="min-w-full snap-center px-4"
                >
                  <div className={`bg-white px-6 py-10 rounded-2xl shadow-block relative overflow-visible min-h-[260px] reveal ${i % 2 === 0 ? 'tilt-l' : 'tilt-r'}`}>
                    <div className="flex flex-col gap-5 relative z-10">
                      <span className="font-black text-blockster-dark uppercase tracking-tight text-[11px]">
                        {t.user}
                      </span>
                      <p className="text-gray-500 font-medium text-lg leading-relaxed italic">
                        "{t.text}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`break-inside-avoid mb-6 bg-white px-6 py-8 md:p-10 rounded-2xl shadow-block reveal ${i % 2 === 0 ? 'tilt-l' : 'tilt-r'}`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-black text-blockster-dark uppercase tracking-tight text-sm">
                    {t.user}
                  </span>
                  <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

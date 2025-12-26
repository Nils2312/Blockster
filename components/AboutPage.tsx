
import React, { useEffect, useRef, useState } from 'react';

interface AboutPageProps {
  shouldAnimateHeader?: boolean;
}

const AboutPage: React.FC<AboutPageProps> = ({ shouldAnimateHeader = true }) => {
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
    { user: "@bendythegamingdevildarlin4572", text: "This is one of the coolest Minecraft horror maps I have ever seen. It feels like it's own horror game by itself." },
    { user: "@JovanniGrilli", text: "i played this twice it was so good. I hope they make a second chapter, I will definitely be playing that." },
    { user: "@IrisThatGothMf", text: "this is really well made for a Minecraft bedrock map." },
    { user: "@fluffystaar83", text: "Just played this last night. It took me around three hours, and it was very fun. I had high expectations after watching the trailer, and the map didnt let me down. The story was actually really good, and I didnt realize there would be a plot twist at the end. I loved that the map has two different endings." },
    { user: "@ZRK-z4m", text: "9.9/10 best horror map I have ever played voice acting was tripple A" },
    { user: "@bothbott4897", text: "great maps. it really did give me a goosebumps at the end of the game." },
    { user: "@kayesGaming07", text: "You know what makes this kind of maps great, it's voice over and the story. You guys nailed it. The trailer looks like a movie." },
    { user: "@Knight_Of_The_Chalice", text: "This looks amazing, keep up this amazing work" },
    { user: "@sahidmaldini5919", text: "I give this map 100/10 it's so much fun you're great at making the flow of this game" },
    { user: "@JovanniGrilli", text: "this has to be the best horror map" },
    { user: "@TornadoPlays", text: "i bought this i have a had so much fun THXXXX" },
    { user: "@hummisman", text: "This ain’t even Minecraft no more, this is some triple A horror stuff" },
    { user: "@TheAlcoholic27", text: "Extremely beautiful, immersive map and interesting story. You can tell a lot of heart and soul was poured into this." },
    { user: "@cubeanimations8049", text: "You guys should get some map award or smthn." },
    { user: "@natasharodinoff1813", text: "I’m gonna buy this right now because it looks so good" },
    { user: "@TrentonNeff", text: "You should make this a horror movie I would actually watch this" },
    { user: "@nutz880", text: "10/10 absolutely amazing recommend buying the animations are just perfect and the voice actings are so good" },
    { user: "@sergeant-e7h", text: "I had just bought this and I’m already scared by just watching the video. by the way often I love you thank you man for this horror" }
  ];

  return (
    <div className="pb-0 overflow-hidden">
      <section className={`bg-blockster-dark pt-48 pb-24 px-6 md:px-12 rounded-b-xl md:rounded-b-3xl shadow-block-dark relative ${shouldAnimateHeader ? 'animate-slide-down' : ''}`}>
        <div className="max-w-7xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: shouldAnimateHeader ? '0.6s' : '0.1s' }}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.0] tracking-tighter text-white max-w-4xl">
            CRAFTED BY ONE <br />
            <span className="text-blockster-green">PLAYED BY THOUSANDS</span>
          </h2>
        </div>
      </section>

      <section className="mt-24 md:mt-36 px-6 md:px-12 max-w-7xl mx-auto opacity-0 animate-fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center" style={{ animationDelay: shouldAnimateHeader ? '1.1s' : '0.4s' }}>
        <div className="order-2 lg:order-1">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blockster-green rounded-xl rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
            <img 
              src="/images/11.jpg"
              alt="Handcrafted World" 
              className="relative rounded-xl w-full aspect-[10/7] object-cover transition-all duration-1000 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
            BEYOND THE <br />
            <span className="fill-text-container" ref={containerRef}>
              ORDINARY
              <span className="fill-text-overlay" style={{ width: `${fillWidth}%` }}>ORDINARY</span>
            </span>
          </h3>
          <div className="space-y-6 text-gray-500 font-medium text-lg leading-relaxed">
            <p>
              Founded by Nils Kristian Bjøro in 2020, Blockster is about more than placing blocks. It’s about building atmosphere. What began as small passion projects has grown into cinematic worlds shaped by storytelling, professional voice actors, and original music and sound design.
            </p>
            <p>
             Every detail is placed with purpose, creating stories that stay with players long after leaving the game.
            </p>
            <p className="pt-4 border-t border-gray-100">
              In partnership with <a href="https://norvale.net" target="_blank" rel="noopener noreferrer" className="text-blockster-green font-black">Norvale</a>, we collaborate to publish our worlds on the Minecraft Marketplace, bringing our adventures to players all across the globe.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24 md:mt-36 px-6 md:px-12 max-w-7xl mx-auto reveal">
        <div className="mb-16 text-left">
           <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">CORE PILLARS</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
          <div className="md:col-span-5 bg-white p-10 md:p-12 rounded-2xl shadow-block flex flex-col justify-between group relative overflow-hidden min-h-[320px] md:min-h-[400px]">
            <div className="absolute top-10 right-10 w-16 h-16 bg-blockster-green/10 rounded-xl rotate-12 group-hover:rotate-[-12deg] group-hover:translate-x-4 transition-transform duration-700"></div>
            <div className="absolute bottom-10 left-10 w-12 h-12 bg-blockster-green/10 rounded-lg -rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute top-1/2 right-6 w-8 h-8 bg-blockster-green/10 rounded-lg rotate-[35deg] group-hover:scale-125 transition-all duration-700"></div>
            
            <span className="font-black text-6xl md:text-8xl text-blockster-dark opacity-5 leading-none relative z-10">01</span>
            <div className="relative z-10">
              <h5 className="text-3xl font-black uppercase tracking-tighter mb-4 text-blockster-dark">ATMOSPHERE</h5>
              <p className="font-medium text-lg leading-relaxed text-gray-400 max-w-xs">
              Custom textures and sound design crafted to pull you deep into the experience. Creating moods, not just maps.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 grid-rows-none md:grid-rows-2 gap-6">
            {/* Story Card (02) */}
            <div className="bg-blockster-dark p-10 md:p-12 rounded-2xl shadow-block flex flex-col justify-between group relative overflow-hidden min-h-[320px] md:min-h-0">
               <div className="absolute bottom-10 right-10 w-20 h-20 bg-blockster-green/10 rounded-2xl rotate-45 group-hover:rotate-[90deg] transition-transform duration-1000"></div>
               <div className="absolute top-6 right-24 w-10 h-10 bg-blockster-green/10 rounded-lg rotate-12 group-hover:-translate-y-2 transition-transform duration-700"></div>
               
               <div className="flex justify-between items-start">
                  <span className="font-black text-6xl text-white opacity-10 leading-none">02</span>
               </div>
               <div>
                  <h5 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white">STORY</h5>
                  <p className="font-medium text-lg leading-relaxed text-gray-400 max-w-md">
                    Narratives crafted with care, often featuring original scores and voice acting that breathe life into the pixels.
                  </p>
               </div>
            </div>

            <div className="bg-blockster-green p-10 md:p-12 rounded-2xl shadow-block-green flex flex-col justify-between group relative overflow-hidden min-h-[320px] md:min-h-0">
               <div className="absolute bottom-12 right-24 w-16 h-16 bg-white/10 rounded-2xl -rotate-[20deg] group-hover:rotate-[25deg] transition-transform duration-700 delay-100"></div>
               <div className="absolute top-8 left-48 w-12 h-12 bg-white/10 rounded-xl rotate-[15deg] group-hover:scale-110 transition-transform duration-1000"></div>
               
               <span className="font-black text-6xl text-white opacity-20 leading-none relative z-10">03</span>
               <div className="relative z-10">
                  <h5 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white">DETAIL</h5>
                  <p className="font-medium text-lg leading-relaxed text-white/80 max-w-md">
                  Worlds filled with detail, where every corner reveals part of the lore. Crafted from the ground up.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal mt-32 md:mt-48 pb-10 space-y-12">
        <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              QUALITY OVER <span className="text-blockster-green">QUANTITY</span>
            </h3>
            <p className="text-gray-500 font-medium text-lg mt-6 max-w-xl">
            Carefully crafted worlds shaped through countless hours of iteration and refinement.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden pause-on-hover py-4">
          <div className="flex w-fit gap-6 animate-marquee transition-transform duration-500">
            {[...galleryItems, ...galleryItems].map((item, i) => (
              <div key={i} className="w-[350px] md:w-[450px] h-[240px] md:h-[300px] shrink-0 rounded-2xl overflow-hidden shadow-block border-4 border-white group transition-all duration-700 relative">
                <img 
                  src={item.src} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                  alt={item.label} 
                />
                <div className="absolute bottom-4 left-4 bg-blockster-green text-white px-3 py-1.4 rounded-lg shadow-block-green z-20">
                  <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto reveal pb-32 mt-12 md:mt-32">
        <div className="mb-16">
           <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            FROM THE <span className="text-blockster-green">PLAYERS</span>
           </h3>
           <p className="text-gray-500 font-medium text-lg mt-6 max-w-xl">
           Player feedback lies at the heart of the experience. Words shared by players from around the world.
           </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="break-inside-avoid mb-6 bg-white p-8 md:p-10 rounded-2xl shadow-block border-2 border-transparent transition-all duration-300"
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
  );
};

export default AboutPage;

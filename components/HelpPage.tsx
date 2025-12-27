
import React, { useState, useEffect, useRef } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-[1.5rem] shadow-block overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 md:px-8 py-7 md:py-8 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className={`text-lg md:text-2xl font-black uppercase tracking-tighter transition-colors duration-300 pr-4 ${isOpen ? 'text-blockster-green' : 'text-blockster-dark group-hover:text-blockster-green'}`}>
          {question}
        </span>
        <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
          <div className={`relative w-full h-full transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
              <span className={`absolute top-1/2 left-0 w-full h-[3px] -translate-y-1/2 bg-blockster-dark rounded-full transition-colors ${isOpen ? 'bg-blockster-green' : ''}`}></span>
              <span className={`absolute top-0 left-1/2 h-full w-[3px] -translate-x-1/2 bg-blockster-dark rounded-full transition-all duration-500 ${isOpen ? 'bg-blockster-green opacity-0 scale-y-0' : 'opacity-100'}`}></span>
          </div>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 md:px-8 pb-8 pt-0">
          <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed max-w-3xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

interface HelpPageProps {
  shouldAnimateHeader?: boolean;
}

const HelpPage: React.FC<HelpPageProps> = ({ shouldAnimateHeader = true }) => {
  const [faqVisible, setFaqVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const faqContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFaqVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (faqContainerRef.current) {
      observer.observe(faqContainerRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const faqs = [
    {
      question: "Can I film and upload gameplay to YouTube?",
      answer: "Absolutely! Feel free to record, stream, and monetize videos of Blockster’s Minecraft Marketplace maps."
    },
    {
      question: "How do I get a refund for a purchase?",
      answer: "Refunds for Minecraft Marketplace purchases are handled directly by Microsoft/Minecraft Support, as they manage all transactions. You will need to reach out to Xbox Support or the Google Play/App Store depending on which device you used to make the purchase."
    },
    {
      question: "I found a bug in one of your maps, what do I do?",
      answer: "Perfection is always the goal, but bugs can happen. Feel free to get in touch by email at contact@blockster.games or join the Discord community. Including the map name and a short description (or screenshot) of the issue helps ensure it can be addressed in a future update."
    },
    {
      question: "Do your maps work with the latest version of Minecraft?",
      answer: "Yes, maps are regularly updated to remain compatible with the latest Minecraft Bedrock Edition. If issues appear after major updates, feel free to get in touch."
    },
    {
      question: "Are your maps multiplayer compatible?",
      answer: "Most maps are built with multiplayer in mind. Whether it’s a horror experience or a large adventure world, they can be enjoyed solo or with friends. Check the Marketplace description for supported player counts."
    },
    {
      question: "Can I apply to join Blockster?",
      answer: "Blockster maps are currently created by a single developer. However, opportunities may arise for collaboration with voice actors, sound designers, or artists. Reaching out by email with a portfolio is always welcome."
    },
    {
      question: "Do these maps work on Minecraft Java Edition?",
      answer: "Current projects are exclusively designed for Minecraft Bedrock Edition, available on Windows, consoles, and mobile through the official Minecraft Marketplace."
    }    
  ];

  return (
    <div className="pb-32 overflow-hidden">
      <section className={`bg-blockster-dark pt-48 pb-24 px-6 md:px-12 rounded-b-xl md:rounded-b-3xl shadow-block-dark relative ${shouldAnimateHeader ? 'md:animate-slide-down' : ''}`}>
        <div className="max-w-7xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: isMobile ? '0.1s' : (shouldAnimateHeader ? '0.6s' : '0.1s') }}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.0] tracking-tighter text-white max-w-4xl">
          SUPPORT & <br />
            <span className="text-blockster-green">HELP</span>
          </h2>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="group bg-white p-8 md:p-12 rounded-2xl shadow-block flex flex-col justify-between min-h-[380px] relative overflow-hidden opacity-0 animate-fade-in-up" style={{ animationDelay: isMobile ? '0.3s' : (shouldAnimateHeader ? '1.0s' : '0.4s') }}>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blockster-green/5 rounded-3xl rotate-12 group-hover:rotate-[35deg] transition-transform duration-700"></div>
          <div className="relative z-10 space-y-4">
             <h3 className="text-4xl font-black uppercase tracking-tighter text-blockster-dark">SEND AN <br /> <span className="text-blockster-green">EMAIL</span></h3>
             <p className="text-gray-400 font-medium text-lg max-xs leading-relaxed">Questions about the maps? Technical issues? Get in touch anytime.</p>
          </div>
          <a href="mailto:contact@blockster.games" className="minecraft-btn w-fit bg-blockster-dark text-white px-7 md:px-10 py-5 rounded-xl font-black uppercase tracking-widest text-[11px] xs:text-xs md:text-sm shadow-block-dark relative z-10 text-center">
            contact@blockster.games
          </a>
        </div>

        <div className="group bg-blockster-green p-8 md:p-12 rounded-2xl shadow-block-green flex flex-col justify-between min-h-[380px] relative overflow-hidden opacity-0 animate-fade-in-up" style={{ animationDelay: isMobile ? '0.45s' : (shouldAnimateHeader ? '1.15s' : '0.55s') }}>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/10 rounded-3xl -rotate-12 group-hover:rotate-[-35deg] transition-transform duration-700"></div>
          <div className="relative z-10 space-y-4">
             <h3 className="text-4xl font-black uppercase tracking-tighter text-white">JOIN OUR <br /> COMMUNITY</h3>
             <p className="text-white/80 font-medium text-lg max-xs leading-relaxed">Join 300+ players on Discord. Get early previews, help, and be part of the community.</p>
          </div>
          <a 
            href="https://discord.com/invite/RmSmWjaBNY" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="minecraft-btn w-fit bg-white text-blockster-dark px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm shadow-block relative z-10 flex items-center justify-center"
          >
            Join Discord
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-48" ref={faqContainerRef}>
        <div className={`mb-16 transition-all duration-1000 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-blockster-dark">FREQUENTLY ASKED QUESTIONS</h4>
          <p className="text-gray-500 font-medium text-lg max-w-2xl">Find quick answers to common questions about Marketplace content and creator guidelines.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ease-out mb-6 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                transitionDelay: faqVisible ? `${500 + (index * 150)}ms` : '0ms',
                willChange: 'transform, opacity'
              }}
            >
              <FAQItem 
                question={faq.question} 
                answer={faq.answer} 
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HelpPage;

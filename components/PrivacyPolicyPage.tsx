
import React, { useState, useEffect } from 'react';

interface PrivacyPolicyPageProps {
  shouldAnimateHeader?: boolean;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ shouldAnimateHeader = true }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);

    let delay = 100;
    if (shouldAnimateHeader) {
      delay = window.innerWidth < 768 ? 300 : 800;
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

  return (
    <div className="pb-32 overflow-hidden bg-[#f5f7f5]">
      <section className={`bg-blockster-dark pt-48 pb-24 px-6 md:px-12 rounded-b-xl md:rounded-b-3xl shadow-block-dark relative z-10 ${shouldAnimateHeader ? 'md:animate-slide-down' : ''}`}>
        <div className="max-w-7xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: isMobile ? '0.1s' : (shouldAnimateHeader ? '0.6s' : '0.1s') }}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.0] tracking-tighter text-white max-w-4xl">
            PRIVACY <br />
            <span className="text-blockster-green">POLICY</span>
          </h2>
        </div>
      </section>

      <div className={`transition-all duration-700 ${isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 reveal">
          <div className="space-y-12 text-left max-w-4xl">
            
            <div className="space-y-4">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">1. INTRODUCTION</h3>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Privacy is taken seriously at Blockster. This Privacy Policy explains how information is handled when visiting the website or getting in touch.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">2. DATA COLLECTION</h3>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                No personal data is collected through automated means. The website does not use tracking cookies and does not store visitor information in databases.
              </p>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Personal information is only received if contact is made voluntarily via email at{' '}
                <a href="mailto:contact@blockster.games" className="text-blockster-green hover:underline">
                  contact@blockster.games
                </a>. In such cases, only the email address and the information shared in the message are received.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">3. USAGE OF INFORMATION</h3>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Any information shared via email is used solely to respond to inquiries, provide support, or discuss potential collaborations. Information is never sold, traded, or shared with third parties.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">4. DATA SECURITY</h3>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Since no user data is stored on servers or in databases, the risk of data breaches is minimal. All email communication is treated with a high level of confidentiality.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">5. THIRD-PARTY LINKS</h3>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                The website links to the official Minecraft Marketplace, social media platforms, and other third-party services. Each of these services operates under its own privacy policy. Responsibility for data handling on external sites lies with those services.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">6. CONTACT</h3>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Questions regarding this Privacy Policy can be sent to{' '}
                <a href="mailto:contact@blockster.games" className="text-blockster-green font-black hover:underline">
                  contact@blockster.games
                </a>.
              </p>
              <p className="text-gray-300 text-xs font-black uppercase tracking-widest pt-8">
                LAST UPDATED: DECEMBER 12, 2025
              </p>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

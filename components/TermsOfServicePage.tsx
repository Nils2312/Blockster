import React from 'react';

interface TermsOfServicePageProps {
  shouldAnimateHeader?: boolean;
}

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ shouldAnimateHeader = true }) => {
  return (
    <div className="pb-32 overflow-hidden bg-[#f5f7f5]">
      <section className={`bg-blockster-dark pt-48 pb-24 px-6 md:px-12 rounded-b-xl md:rounded-b-3xl shadow-block-dark relative ${shouldAnimateHeader ? 'animate-slide-down' : ''}`}>
        <div className="max-w-7xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: shouldAnimateHeader ? '0.6s' : '0.1s' }}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.0] tracking-tighter text-white max-w-4xl">
            TERMS OF <br />
            <span className="text-blockster-green">SERVICE</span>
          </h2>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 reveal">
        <div className="space-y-12 text-left max-w-4xl">

          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">1. ABOUT BLOCKSTER</h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              Blockster is an independent Minecraft content creator focused on designing and publishing original experiences for the Minecraft Marketplace. This website functions as a portfolio and information hub for available projects.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">2. WEBSITE USAGE</h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              This website is provided for informational purposes only. Visitors may browse project details and related content. All materials displayed on this website, including images, descriptions, and designs, are the intellectual property of Blockster and are protected by applicable copyright laws.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">3. MINECRAFT MARKETPLACE CONTENT</h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              All Minecraft content associated with Blockster is distributed exclusively through the official Minecraft Marketplace. Purchases, downloads, and usage of Marketplace content are governed by Microsoft’s Terms of Use, the Minecraft End User License Agreement (EULA), and Minecraft Marketplace Terms and Conditions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">4. INTELLECTUAL PROPERTY RIGHTS</h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              All original content created for Blockster projects, including maps, worlds, textures, models, code, and designs, remains the intellectual property of Blockster. Minecraft is a trademark of Microsoft Corporation and is not affiliated with or endorsed by Blockster.
            </p>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              Content may not be reproduced, redistributed, modified, or used outside the permissions granted through a valid Minecraft Marketplace purchase.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">5. PURCHASES AND REFUNDS</h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              All purchases are processed directly through the Minecraft Marketplace, which is operated by Microsoft. Payment handling and refunds are managed by Microsoft. For purchase-related issues, please refer to the official Minecraft support channels.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">6. CONTENT SUPPORT</h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              Minecraft content can be complex in nature. While quality and stability are always a priority, issues may occasionally occur. If problems are encountered, support can be requested via email or Discord with details such as the map name, platform, and Minecraft version.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">7. USER CONDUCT</h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              Use of this website must not involve unauthorized access attempts, automated scraping, misuse of branding, or false representation of affiliation with Blockster.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">8. LIMITATION OF LIABILITY</h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              This website and its content are provided “as is” without warranties of any kind. Blockster is not liable for damages resulting from the use of this website or Marketplace content, except where liability cannot be excluded by law.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">9. THIRD-PARTY LINKS</h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              Links to third-party websites, including the Minecraft Marketplace and social platforms, may be present. Responsibility for content, terms, and privacy practices lies with those external services.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">10. CHANGES TO TERMS</h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              These Terms of Service may be updated from time to time. Any changes will be reflected on this page along with an updated revision date. Continued use of the website constitutes acceptance of the revised terms.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-blockster-dark">11. CONTACT</h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              Questions regarding these Terms of Service can be sent to{' '}
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
  );
};

export default TermsOfServicePage;

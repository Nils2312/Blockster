
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import ContentGrid from './components/ContentGrid';
import ActionTiles from './components/ActionTiles';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import HelpPage from './components/HelpPage';
import ComingSoonPage from './components/ComingSoonPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';

type Page = 'home' | 'about' | 'projects' | 'help' | 'coming-soon' | 'privacy' | 'terms';

const App: React.FC = () => {
  const getPageFromPath = (): Page => {
    const path = window.location.pathname.replace('/', '');
    const validPages: Page[] = ['about', 'projects', 'help', 'coming-soon', 'privacy', 'terms'];
    if (validPages.includes(path as Page)) {
      return path as Page;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<Page>(getPageFromPath());
  const [shouldAnimateHeader, setShouldAnimateHeader] = useState(true);

  useEffect(() => {
    const titles: Record<Page, string> = {
      home: 'Blockster | Immersive Minecraft Maps & Bedrock Marketplace Worlds',
      about: 'About Blockster | Nils Kristian Bjøro - Minecraft Creator',
      projects: 'Minecraft Marketplace Projects | Adventure & Horror Maps',
      help: 'Support & FAQ | Blockster Minecraft Marketplace Help',
      'coming-soon': 'Upcoming Minecraft Projects | Blockster Studio',
      privacy: 'Privacy Policy | Blockster Studio',
      terms: 'Terms of Service | Blockster Studio'
    };

    const descriptions: Record<Page, string> = {
      home: 'Official website of Blockster. Explore professional Minecraft Bedrock Marketplace worlds with cinematic storytelling.',
      about: 'Learn about the vision behind Blockster. Blockster creates immersive Minecraft experiences through atmosphere and storytelling.',
      projects: 'Explore my portfolio of handcrafted Minecraft maps, including Deep Sea Horror, Legendary Dragons, and more.',
      help: 'Get support for your Minecraft Marketplace purchases. Find FAQs about filming, refunds, and community access.',
      'coming-soon': 'Sneak peek at upcoming Blockster projects. High-quality Minecraft adventure maps currently in development.',
      privacy: 'How we handle your data and protect your privacy at Blockster Studio.',
      terms: 'Terms and conditions for using the Blockster website and our Minecraft Marketplace content.'
    };

    document.title = titles[currentPage] || 'Blockster';
    
    // Oppdaterer meta-beskrivelsen dynamisk for Google crawlere
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      (metaDesc as HTMLMetaElement).name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', descriptions[currentPage] || descriptions.home);

  }, [currentPage]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
      setShouldAnimateHeader(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observerOptions = {
      threshold: 0,
      rootMargin: isMobile ? '0px 0px -30px 0px' : '0px 0px -120px 0px' 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [currentPage]);

  const handlePageChange = (page: Page) => {
    const isScrolled = window.scrollY > 100;
    const fromHome = currentPage === 'home';
    const toHome = page === 'home';

    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({ page }, '', newPath);
    }

    if (fromHome) {
      setShouldAnimateHeader(true);
    } else if (!toHome) {
      setShouldAnimateHeader(isScrolled);
    }

    if (currentPage === page) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="flex-grow relative z-10">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <div className="max-w-7xl mx-auto px-6 pt-14 pb-16 md:pb-24 space-y-16 md:space-y-32">
              <Intro />
              <ContentGrid onPageChange={handlePageChange} />
              <ActionTiles onPageChange={handlePageChange} />
            </div>
          </>
        ) : currentPage === 'about' ? (
          <AboutPage shouldAnimateHeader={shouldAnimateHeader} />
        ) : currentPage === 'projects' ? (
          <ProjectsPage shouldAnimateHeader={shouldAnimateHeader} onPageChange={handlePageChange} />
        ) : currentPage === 'help' ? (
          <HelpPage shouldAnimateHeader={shouldAnimateHeader} />
        ) : currentPage === 'coming-soon' ? (
          <ComingSoonPage shouldAnimateHeader={shouldAnimateHeader} onPageChange={handlePageChange} />
        ) : currentPage === 'privacy' ? (
          <PrivacyPolicyPage shouldAnimateHeader={shouldAnimateHeader} />
        ) : currentPage === 'terms' ? (
          <TermsOfServicePage shouldAnimateHeader={shouldAnimateHeader} />
        ) : (
          <div className="max-w-7xl mx-auto px-6 py-48 text-center">
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-blockster-dark">Page not found</h2>
             <button onClick={() => handlePageChange('home')} className="minecraft-btn bg-blockster-green text-white px-12 py-4 rounded-xl font-black uppercase shadow-block-green">Back home</button>
          </div>
        )}
      </main>
      <Footer onPageChange={handlePageChange} />
    </div>
  );
};

export default App;

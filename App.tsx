
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

type Page =
  | 'home'
  | 'about'
  | 'projects'
  | 'help'
  | 'coming-soon'
  | 'privacy'
  | 'terms';

const App: React.FC = () => {
  const getPageFromPath = (): Page => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    const validPages: Page[] = [
      'about',
      'projects',
      'help',
      'coming-soon',
      'privacy',
      'terms'
    ];
    if (validPages.includes(path as Page)) {
      return path as Page;
    }
    return 'home';
  };
  

  const [currentPage, setCurrentPage] = useState<Page>(getPageFromPath());
  const [shouldAnimateHeader, setShouldAnimateHeader] = useState(true);

  // SEO: title, description, canonical
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
      projects: 'Explore handcrafted Minecraft maps including horror, adventure, and cinematic experiences.',
      help: 'Get support for your Minecraft Marketplace purchases. FAQs, filming rules, and community access.',
      'coming-soon': 'Sneak peek at upcoming Blockster Minecraft projects currently in development.',
      privacy: 'How Blockster handles your data and protects your privacy.',
      terms: 'Terms and conditions for using the Blockster website and content.'
    };

    document.title = titles[currentPage] || 'Blockster';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      descriptions[currentPage] || descriptions.home
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    const canonicalUrl =
      currentPage === 'home'
        ? 'https://www.blockster.games/'
        : `https://www.blockster.games/${currentPage}`;

    canonical.setAttribute('href', canonicalUrl);
  }, [currentPage]);

  // Back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
      setShouldAnimateHeader(false);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Reveal animations
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('active', entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: isMobile ? '0px 0px -30px 0px' : '0px 0px -120px 0px'
      }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage]);

  const handlePageChange = (page: Page) => {
    const isCurrentlySubPage = currentPage !== 'home';
    const isNextSubPage = page !== 'home';
    // Sjekk om brukeren er på toppen av siden (headeren er synlig) før vi scroller opp
    const isAtTop = window.scrollY < 100;

    if (isCurrentlySubPage && isNextSubPage && isAtTop) {
      // Hvis vi er på toppen av en underside og går til en annen, hold headeren statisk
      setShouldAnimateHeader(false);
    } else {
      // Hvis vi er scrollet ned, eller kommer fra Home, kjør animasjon
      setShouldAnimateHeader(true);
    }

    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }

    window.scrollTo({ top: 0, behavior: 'instant' as any });
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <div className="max-w-7xl mx-auto px-6 pt-14 pb-24 space-y-24">
              <Intro />
              <ContentGrid onPageChange={handlePageChange} />
              <ActionTiles onPageChange={handlePageChange} />
            </div>
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage shouldAnimateHeader={shouldAnimateHeader} />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            shouldAnimateHeader={shouldAnimateHeader}
            onPageChange={handlePageChange}
          />
        )}

        {currentPage === 'help' && (
          <HelpPage shouldAnimateHeader={shouldAnimateHeader} />
        )}

        {currentPage === 'coming-soon' && (
          <ComingSoonPage
            shouldAnimateHeader={shouldAnimateHeader}
            onPageChange={handlePageChange}
          />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicyPage shouldAnimateHeader={shouldAnimateHeader} />
        )}

        {currentPage === 'terms' && (
          <TermsOfServicePage shouldAnimateHeader={shouldAnimateHeader} />
        )}
      </main>

      <Footer onPageChange={handlePageChange} />
    </div>
  );
};

export default App;

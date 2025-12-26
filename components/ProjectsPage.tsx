
import React from 'react';

const projects = [
  {
    id: 1,
    title: "THRONES OF DRAGONS",
    description: "Experience an epic RPG adventure where you can ride dragons, complete challenging quests, and explore a vast, immersive world filled with secrets and ancient ruins.",
    image: "/images/18.jpg",
    url: null
  },
  {
    id: 2,
    title: "DEEP SEA HORROR",
    description: "Alone in an underwater base, the crew is gone and something lurks in the depths. Solve the mystery and escape before the deep swallows you whole.",
    image: "/images/19.jpg",
    url: "https://www.minecraft.net/en-us/marketplace/pdp/norvale/deep-sea-horror/9489eaad-d032-4fc3-9e5f-360b86ea0214"
  },
  {
    id: 3,
    title: "ALIEN ESCAPE",
    description: "You wake up on an abandoned alien ship drifting in space. Alarms echo and shadows move. Find a way out before whatever’s onboard finds you.",
    image: "/images/20.jpg",
    url: "https://www.minecraft.net/en-us/marketplace/pdp/norvale/alien-escape/d5cd4bab-7066-4f92-94e6-d7197f960da8"
  },
  {
    id: 4,
    title: "LEGENDARY DRAGONS",
    description: "Explore a vast open world filled with dragons, side quests, hidden secrets, and ancient ruins. Tame, ride, and rise to become a legendary dragon rider.",
    image: "/images/21.jpg",
    url: "https://www.minecraft.net/en-us/marketplace/pdp/norvale/legendary-dragons/63997522-8f8a-4380-bc8d-e01e9da8d6dc"
  },
  {
    id: 5,
    title: "ANTLERS",
    description: "A dark forest hides a terrifying secret. Something ancient and twisted stalks the trees. Survive the night and escape the creature with antlers.",
    image: "/images/22.jpg",
    url: "https://www.minecraft.net/en-us/marketplace/pdp/norvale/antlers/77dd3cad-a65d-4f83-9903-8529937b2544"
  },
  {
    id: 6,
    title: "THE ICE AGE",
    description: "Travel back to the Ice Age and explore a frozen world. Learn about ancient animals, tame them and ride through the snow-covered wilderness.",
    image: "/images/23.jpg",
    url: "https://www.minecraft.net/en-us/marketplace/pdp/norvale/the-ice-age/e3ce7116-9561-4310-a637-94b804f12a95"
  }
];

interface ProjectsPageProps {
  shouldAnimateHeader?: boolean;
  onPageChange: (page: any) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ shouldAnimateHeader = true, onPageChange }) => {
  const rotations = ['rotate-1', '-rotate-[1.5deg]', 'rotate-[1.5deg]', '-rotate-1', 'rotate-[1.2deg]', '-rotate-[1.2deg]'];

  const handleProjectClick = (project: any) => {
    if (project.title === "THRONES OF DRAGONS") {
      onPageChange('coming-soon');
    } else if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="pb-24 overflow-hidden">
      <section className={`bg-blockster-dark pt-48 pb-24 px-6 md:px-12 rounded-b-xl md:rounded-b-3xl shadow-block-dark relative z-10 ${shouldAnimateHeader ? 'animate-slide-down' : ''}`}>
        <div className="max-w-7xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: shouldAnimateHeader ? '0.6s' : '0.1s' }}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.0] tracking-tighter text-white max-w-4xl">
            FEATURED <br />
            <span className="text-blockster-green">PROJECTS</span>
          </h2>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 md:gap-y-40">
          {projects.map((project, index) => {
            const isFirstRow = index < 2;
            
            return (
              <div 
                key={project.id} 
                onClick={() => handleProjectClick(project)}
                className={`group cursor-pointer ${isFirstRow ? 'opacity-0 animate-fade-in-up' : 'reveal'}`}
                style={isFirstRow ? { 
                  animationDelay: shouldAnimateHeader 
                    ? `${1.1 + (index * 0.15)}s` 
                    : `${0.3 + (index * 0.1)}s`
                } : {
                  transitionDelay: `${(index % 2) * 0.1}s`
                }}
              >
                <div className="relative mb-10 mx-2 md:mx-4">
                  <div className={`absolute -inset-3 bg-blockster-green rounded-xl ${rotations[index % rotations.length]} group-hover:rotate-0 transition-transform duration-700`}></div>
                  <div className="relative overflow-hidden rounded-xl aspect-[16/9] bg-white">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div className="space-y-4 mt-12 px-2">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-blockster-dark group-hover:text-blockster-green transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;

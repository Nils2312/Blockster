
import React from 'react';

interface ContentGridProps {
  onPageChange: (page: any) => void;
}

const ContentGrid: React.FC<ContentGridProps> = ({ onPageChange }) => {
  const deepSeaUrl = "https://www.minecraft.net/en-us/marketplace/pdp/norvale/deep-sea-horror/9489eaad-d032-4fc3-9e5f-360b86ea0214";

  return (
    <section id="projects" className="space-y-12 scroll-mt-32">
      <div className="flex justify-between items-end mb-4 reveal">
        <div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Featured Projects</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div 
          onClick={() => window.open(deepSeaUrl, '_blank', 'noopener,noreferrer')}
          className="md:col-span-7 group relative overflow-hidden rounded-2xl bg-blockster-dark min-h-[480px] text-left reveal tilt-l shadow-block cursor-pointer"
        >
          <img 
            src="/images/2.jpg"
            alt="Deep Sea Horror" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blockster-dark via-blockster-dark/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 px-6 py-10 md:p-12 w-full">
            <h3 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">DEEP SEA <br /> HORROR</h3>
            <p className="text-gray-300 max-w-xl mb-8 text-base md:text-lg leading-relaxed font-medium">
              Descend into the ocean's abyss in this heart-pounding story. Explore a desolate base, solve puzzles, and decide who to trust. Will you survive the deep sea horror?
            </p>
            <button className="minecraft-btn bg-white text-blockster-dark px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-block">
              Explore World
            </button>
          </div>
        </div>

        <div className="md:col-span-5 bg-blockster-green rounded-2xl px-6 py-10 md:p-12 flex flex-col justify-between group min-h-[480px] relative overflow-hidden reveal tilt-r shadow-block-green">
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-3xl rotate-12 transition-transform duration-700 group-hover:rotate-[30deg] group-hover:scale-110"></div>
          
          <div className="relative z-10">
            <h3 className="text-white text-4xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-6">EXPLORE OUR WORLDS</h3>
            <p className="text-white/90 font-medium text-base md:text-lg leading-relaxed">
              From epic dragon adventures to terrifying horror maps, every project we build has its own story. Whether you're exploring massive open worlds, solving mysteries, or fighting for survival.
            </p>
          </div>
          
          <div className="relative z-10 mt-8 md:mt-0">
            <button 
              onClick={(e) => { e.stopPropagation(); onPageChange('projects'); }}
              className="minecraft-btn inline-block bg-white text-blockster-dark px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-block"
            >
              View All Projects
            </button>
          </div>
        </div>

        <div 
          onClick={() => onPageChange('projects')}
          className="md:col-span-3 group relative overflow-hidden rounded-2xl min-h-[340px] reveal tilt-ls shadow-block cursor-pointer"
        >
          <img 
            src="/images/3.jpg"
            alt="Project Preview" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
          <div className="absolute inset-0 px-6 py-8 md:p-10 flex flex-col justify-end">
            <h4 className="text-white text-3xl font-black uppercase tracking-tight mb-2">Horror Series</h4>
            <p className="text-white/70 font-bold uppercase tracking-widest text-[10px]">Experience the thrill</p>
          </div>
        </div>

        <div className="md:col-span-9 bg-white rounded-2xl px-6 py-10 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center reveal tilt-rs shadow-block">
          <div className="flex-[0.6] text-left">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">BEHIND <br /> THE BLOCKS</h3>
            <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed mb-4">
              Every map begins with a spark, an idea that grows into something much bigger through building, world design, and storytelling.
            </p>
            <div className="pt-6 md:pt-12">
              <button 
                onClick={() => onPageChange('about')}
                className="minecraft-btn bg-blockster-dark text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs shadow-block-dark"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="flex-[0.4] flex justify-center items-center w-full">
            <img 
                src="/images/crafting.gif"
                alt="Behind the blocks process" 
                className="w-full max-w-[200px] md:max-w-[250px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;

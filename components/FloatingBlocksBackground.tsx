
import React, { useEffect, useRef, useState } from 'react';

interface Block {
  worldX: number;
  worldY: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
}

interface FloatingBlocksBackgroundProps {
  currentPage: string;
}

const FloatingBlocksBackground: React.FC<FloatingBlocksBackgroundProps> = ({ currentPage }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blocks = useRef<Block[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const docHeight = useRef(0);
  
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    setIsReady(false);
    
    const timer = setTimeout(() => {
      docHeight.current = document.documentElement.scrollHeight;
      setIsReady(true);
      
      const fadeTimer = setTimeout(() => {
        setIsVisible(true);
      }, 400);
      
      return () => clearTimeout(fadeTimer);
    }, 100); 
    
    return () => clearTimeout(timer);
  }, [currentPage]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      docHeight.current = document.documentElement.scrollHeight;
      initBlocks();
    };

    const initBlocks = () => {
      const totalArea = window.innerWidth * Math.max(docHeight.current, window.innerHeight * 2);
      const blockCount = Math.floor(totalArea / 58000); 
      const newBlocks: Block[] = [];
      
      for (let i = 0; i < blockCount; i++) {
        newBlocks.push({
          worldX: Math.random() * window.innerWidth,
          worldY: Math.random() * docHeight.current,
          size: Math.random() * 55 + 35,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          opacity: Math.random() * 0.05 + 0.065, 
        });
      }
      blocks.current = newBlocks;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const updateDocHeight = () => {
      const newHeight = document.documentElement.scrollHeight;
      if (Math.abs(newHeight - docHeight.current) > 300) {
        docHeight.current = newHeight;
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', updateDocHeight);
    
    resize();

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isReady) {
        const currentScrollY = window.scrollY;
        const repulsionRadius = 260; 
        const repulsionStrength = 5.5;

        blocks.current.forEach((block) => {
          block.worldX += block.vx;
          block.worldY += block.vy;

          const padding = 120;
          if (block.worldX < -padding) block.worldX = window.innerWidth + padding;
          if (block.worldX > window.innerWidth + padding) block.worldX = -padding;
          if (block.worldY < -padding) block.worldY = docHeight.current + padding;
          if (block.worldY > docHeight.current + padding) block.worldY = -padding;

          const screenX = block.worldX;
          const screenY = block.worldY - currentScrollY;

          if (screenY > -150 && screenY < canvas.height + 150) {
            const dx = screenX - mouse.current.x;
            const dy = screenY - mouse.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < repulsionRadius) {
              const force = (repulsionRadius - distance) / repulsionRadius;
              const angle = Math.atan2(dy, dx);
              block.worldX += Math.cos(angle) * force * repulsionStrength;
              block.worldY += Math.sin(angle) * force * repulsionStrength;
            }

            ctx.fillStyle = `rgba(91, 179, 93, ${block.opacity})`;
            ctx.beginPath();
            const r = 10; 
            ctx.roundRect(screenX, screenY, block.size, block.size, r);
            ctx.fill();
          }
        });
      }

      requestAnimationFrame(animate);
    };

    const animFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', updateDocHeight);
    };
  }, [isReady]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        mixBlendMode: 'multiply',
        transition: isVisible ? 'opacity 1200ms ease-out' : 'none'
      }}
    />
  );
};

export default FloatingBlocksBackground;

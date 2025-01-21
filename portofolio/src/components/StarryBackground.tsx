import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const StarryBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { themeColors } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const backgroundContainer = containerRef.current;
    backgroundContainer.style.background = themeColors.background;
    backgroundContainer.innerHTML = '';

    const canvasSize = backgroundContainer.clientWidth * backgroundContainer.clientHeight;
    const starsFraction = canvasSize / 4000;

    // Create stars
    for (let i = 0; i < starsFraction; i++) {
      const size = Math.random() < 0.5 ? 1 : 2;
      const star = document.createElement('div');
      
      Object.assign(star.style, {
        position: 'absolute',
        left: `${random(0, 99)}%`,
        top: `${random(0, 99)}%`,
        opacity: random(0.5, 1).toString(),
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: themeColors.star,
        zIndex: '-1',
        borderRadius: '50%'
      });

      if (Math.random() < 0.2) {
        star.style.animation = `twinkle${Math.floor(Math.random() * 4) + 1} 5s infinite`;
      }

      backgroundContainer.appendChild(star);
    }

    // Create shooting stars - increased from 4 to 12
    for (let i = 0; i < 12; i++) {
      const shootingStar = document.createElement('span');
      shootingStar.className = 'shooting-star';
      
      if (Math.random() < 0.75) {
        shootingStar.style.top = '-4px';
        shootingStar.style.right = `${random(0, 90)}%`;
      } else {
        shootingStar.style.top = `${random(0, 50)}%`;
        shootingStar.style.right = '-4px';
      }

      shootingStar.style.backgroundColor = themeColors.shootingStar;
      shootingStar.style.boxShadow = `0 0 0 4px ${themeColors.shootingStarGlow}1a, 0 0 0 8px ${themeColors.shootingStarGlow}1a`;

      // Increased animation duration for slower movement
      shootingStar.style.animationDuration = `${Math.floor(random(5, 10))}s`;
      shootingStar.style.animationDelay = `${Math.floor(random(0, 8))}s`;

      backgroundContainer.appendChild(shootingStar);

      // Add animation end handler for continuous effect
      shootingStar.addEventListener('animationend', () => {
        if (Math.random() < 0.75) {
          shootingStar.style.top = '-4px';
          shootingStar.style.right = `${random(0, 90)}%`;
        } else {
          shootingStar.style.top = `${random(0, 50)}%`;
          shootingStar.style.right = '-4px';
        }

        shootingStar.style.animation = 'none';
        void shootingStar.offsetWidth;
        shootingStar.style.animation = '';
        // Maintain slower animation on reset
        shootingStar.style.animationDuration = `${Math.floor(random(5, 10))}s`;
      });
    }
  }, [themeColors]);

  return <div ref={containerRef} className="starry-background" />;
};

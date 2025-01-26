import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'galaxy' | 'cotton-candy';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes = {
  'galaxy': {
    background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
    star: '#FFFFFF',
    starGlow: '#FFFFFF',
    shootingStar: '#FFFFFF',
    shootingStarGlow: '#FFFFFF',
    iconPrimary: '#8A2BE2',    // Purple for galaxy theme
    iconSecondary: '#6B24B2',  // Darker purple for hover
    sliderBg: 'rgba(138, 43, 226, 0.1)'
  },
  'cotton-candy': {
    background: 'linear-gradient(to bottom, #ff71b2, #509be1)',
    star: '#FFFFFF',
    starGlow: '#FFFFFF',
    shootingStar: '#FFFFFF',
    shootingStarGlow: '#FFFFFF',
    iconPrimary: '#509be1',    // Blue for cotton-candy theme
    iconSecondary: '#3d7ab0',  // Darker blue for hover
    sliderBg: 'rgba(80, 155, 225, 0.1)'
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('galaxy');

  const toggleTheme = () => {
    setTheme(prev => prev === 'galaxy' ? 'cotton-candy' : 'galaxy');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return { ...context, themeColors: themes[context.theme] };
};

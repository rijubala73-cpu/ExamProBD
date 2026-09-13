import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Default to false (Light Mode with 3-4 color background) as requested
    const saved = typeof window !== 'undefined' ? localStorage.getItem('exambd_theme') : null;
    return saved === 'dark';
  });

  useEffect(() => {
    try {
      localStorage.setItem('exambd_theme', isDarkMode ? 'dark' : 'light');
    } catch {
      // ignore storage error
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

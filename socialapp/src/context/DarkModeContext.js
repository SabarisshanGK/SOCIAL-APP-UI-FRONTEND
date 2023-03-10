import { createContext, useEffect, useState } from 'react';

export const DarkModeToggleContext = createContext();

export const DarkModeToggleContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <DarkModeToggleContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeToggleContext.Provider>
  );
};

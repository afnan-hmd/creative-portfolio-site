'use client'

import { useTheme } from 'next-themes'; 
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [mount, setMount] = useState(false);
  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMount(true);
  }, []);
  console.log(currentTheme)

  return mount ? (
    <button 
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        type="button"
    className='rounded-xl p-1 hover:bg-(--accent) active:bg-(--secondary)'>
      <Sun 
      color="white" 
      size={30}
      className='hidden dark:block'
      />
      
      <Moon
        color="white"
        size={30}
        className="block dark:hidden"
      />
    </button>

  ) : null;
};

export default ThemeToggle;

import React from 'react';
import NavLinks from './../utils/nav-links.js';
import ThemeToggle from './themeToggle.js';

export default function Header() {

  return (
    <div className="sticky top-0 bg-(--secondary)/85 flex content-center items-center justify-between mx-auto py-4 px-16">
      <div className="text-(--text) font-bold">
        Raven Moonstone
      </div>

      <nav>
        <ul className="flex justify-between content-center items-center gap-4 ">
          <NavLinks /> 
        </ul>
      </nav>

      <div className='self-center'>
         <ThemeToggle></ThemeToggle>
      </div>

    </div>
  );
};

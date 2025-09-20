import React from 'react';
import { Sun, Moon } from 'lucide-react';
import NavLinks from './../utils/nav-links.js';

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
        <button className='rounded-xl p-1 hover:bg-(--accent) active:bg-(--secondary)'>
          <Sun color="white" size={30} />
        </button>
      </div>

    </div>
  );
};

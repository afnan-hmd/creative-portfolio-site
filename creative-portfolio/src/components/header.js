import React from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';

export default function Header() {
  const headerPages = [
    "Home", "About", "Projects", "Contact"
  ];

  return (
    <div className="bg-(--primary) flex content-center items-center justify-between mx-auto p-4">
      <div className="text-(--text) font-bold">
        Raven Moonstone
      </div>

      <nav>
        <ul className="flex justify-between content-center items-center gap-4 ">
          {headerPages.map((page) => (
            <li key={page}>
              <Link
                href="/"
                className="text-(--text)"
              >
                {page}
              </Link>
            </li>
          ))}
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

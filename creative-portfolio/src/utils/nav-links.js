'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks() {
  const pathname = usePathname();

  const headerPages = [
    "Home", "About", "Services", "Projects", "Contact"
  ];


  return (
    <>
      {headerPages.map((page, index) => {
        const hash= `#${page.toLowerCase()}`;
        return(
          <li key={index}>
            <Link
              href={`/${hash}`}
              className={clsx("text-(--text) hover:font-bold hover:text-(--primary)",
                {
                  "font-bold text-(--primary)": pathname === `/${hash}`,
              },
              )}
            >
              {page}
            </Link>
          </li>
        );
      })}
    </>
  )

}

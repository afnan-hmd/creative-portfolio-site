'use client'

import React from 'react';


export default function ActionBtn({ label }) {
  function handleClick() {
    console.log('meow');
  }

  return (
    <>
      <button onClick={handleClick}
        className='text-(--text) border-2 border-(--primary) py-2 px-12 my-4 font-bold rounded-3xl
                  hover:bg-(--primary) shadow-md shadow-gray-400 active:bg-(--secondary)/50
                  hover:tracking-wide hover:shadow-lg active:transition-transform duration-300 active:translate-y-2
        '
      >
        {label}
      </button>
    </>
  );
}

import React from 'react';


export default function ActionBtn({ label }) {


  return (
    <>
      <button
        className='text-(--text) border-s-(--primary) py-2 px-8 font-bold rounded-3xl'
      >
        {label}
      </button>
    </>
  );
}

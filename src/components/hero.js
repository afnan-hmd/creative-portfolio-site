import React from 'react';
import ActionBtn from './actionBtn';
import Image from 'next/image';

const HeroSect = () => {

  return (
    <div id='about' className='text(--text) p-16 grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='flex flex-col items-start'>
        <h3 className='font-semibold text-2xl text-(--text)/75 tracking-wide'>
          GRAPHIC DESIGNER
        </h3>
        <h1 className='text-8xl font-bold text-(--primary)'>raven</h1>
        <h2 className='text-6xl font-bold text-black dark:text-white'>moonstone</h2>
        <p className='text-(--text)/75 py-4'>
          I&apos;m a freelance graphic designer specializing in brand identity, web design,
          and visual storytelling. With a passion for clean design and strategic thinking,
          I help businesses bring their ideas to life through impactful visuals.
        </p>
        <ActionBtn label="contact me" />
      </div>

      <div className='flex justify-end'>
        <Image 
          src={"/raven.png"} 
          width={500} 
          height={500} 
          alt='logo' 
        />

      </div>

    </div>
  )
};

export default HeroSect;

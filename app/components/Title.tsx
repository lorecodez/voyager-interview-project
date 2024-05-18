'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import useMousePosition from '@/app/utils/useMousePosition';




//must include name and be at the top of the page
export default function Title() {

  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;

  return (
    <section className='w-full h-max flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center h-screen'>
        <svg id="10015.io" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
        className='relative drop-shadow-xl z-10 w-full h-full'
        >
	        {/* <path fill="#09090b" d="M370,309Q320,378,231,394Q142,410,83.5,325Q25,240,88,162.5Q151,85,246,74.5Q341,64,380.5,152Q420,240,370,309Z" /> */}
	        <path fill="#09090b" d="M398,292.5Q421,345,374,368Q327,391,283.5,422Q240,453,190,433Q140,413,101.5,377.5Q63,342,38.5,291Q14,240,71.5,208Q129,176,130.5,114.5Q132,53,186,85.5Q240,118,280,110Q320,102,375,116Q430,130,402.5,185Q375,240,398,292.5Z" />
        </svg>
       
        <motion.div
        className={'mask text-7xl flex flex-col gap-4 items-center justify-center font-bold text-center shadow-inner'}
        animate={{

          WebkitMaskPosition: `${x! - (size + 150)}px ${y! - (size - 70)}px`,

          WebkitMaskSize: `${size}px`,

        }}

        transition={{ type: "tween", ease: "backOut", duration:0.5}}
        >
          <p
          onMouseEnter={() => {
            setIsHovered(true)
          }}

          onMouseLeave={() => {
            setIsHovered(false)
          }}

          className=' drop-shadow-xl'
          >
            Here is why I&apos;m
          </p>
          <button
          title='Click Me'
          onClick={() =>{
            const element = document.getElementById('why')
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}

          onMouseEnter={() => {
            setIsHovered(true)
          }}

          onMouseLeave={() => {
            setIsHovered(false)
          }}

          className='hover:text-red-600 transition-all duration-200 ease-linear drop-shadow-xl'
          >
            &darr;
          </button>
        </motion.div>
        <h1 className='text-7xl font-sans w-min text-white bg-transparent font-bold absolute z-20 drop-shadow-xl'>&lt;Lorenzo Washington/&#62;</h1>
        
      </div> 
      <p id='why' className='text-black m-10 my-9 text-9xl font-bold'>&quot;The Prefect Peice to Your Puzzle&quot;</p>
    </section>
  )
}


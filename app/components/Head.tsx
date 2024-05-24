'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Head() {

  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {

    const prev = scrollY.getPrevious();

    if(!prev){
      throw new Error('somthing went wrong')
    }

    if ( latest > prev && latest > 150){
      setHidden(true);
    } else {
      setHidden(false);
    };

  });

  return (
    <motion.div

    variants={{
      visibile: { y: 0},
      hidden: { y: "-130%"},
    }}
    animate={hidden ? "hidden" : "visible"}
    transition={{ duration: 0.35, ease: "easeInOut"}}
    className='w-max rounded-2xl bg-stone-50 px-4 py-2 flex items-center justify-center shadow-xl'
    >
      <menu className='flex gap-10 text-zinc-950 text-xl font-mono font-bold'>
        <li className='group' title='Objective'>
          <button 
          onClick={() =>{
            const element = document.getElementById('obj')
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}
          className='hover:text-red-600 transition-all duration-200 ease-linear'
          >Objective</button>
          <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-zinc-950 w-full h-[2px]`}></span>
        </li>
        <li className='group' title='Education'>
          <button
          onClick={() =>{
            const element = document.getElementById('edu')
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}
          className='hover:text-red-600 transition-all duration-200 ease-linear'
          >Education
          </button>
          <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-zinc-950 w-full h-[2px]`}></span>
        </li>
        <li className='group' title='Experience'>
          <button
          onClick={() =>{
            const element = document.getElementById('exp')
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}
          className='hover:text-red-600 transition-all duration-200 ease-linear'
          >Experience
          </button>
          <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-zinc-950 w-full h-[2px]`}></span>
        </li>
        <li className='group' title='My Coding Journey'>
          <button
          onClick={() =>{
            const element = document.getElementById('code')
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}
          className='hover:text-red-600 transition-all duration-200 ease-linear'
          >My Coding Journey
          </button>
          <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-zinc-950 w-full h-[2px]`}></span>
        </li>
        <li className='group' title='Hobbies'>
          <button
          onClick={() =>{
            const element = document.getElementById('hob')
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}
          className='hover:text-red-600 transition-all duration-200 ease-linear'
          >Hobbies
          </button>
          <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-zinc-950 w-full h-[2px]`}></span>
        </li>
      </menu>
    </motion.div>
  )
}

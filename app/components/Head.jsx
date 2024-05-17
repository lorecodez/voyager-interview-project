'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Head() {

  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {

    const prev = scrollY.getPrevious();

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
      hidden: { y: "-100%"},
    }}
    animate={hidden ? "hidden" : "visible"}
    transition={{ duration: 0.35, ease: "easeInOut"}}
    className='w-full flex items-center justify-center'
    >
      <menu className='flex gap-10 text-zinc-950 text-xl font-sans font-bold'>
        <li className='group'>
          <Link href={'#obj'}>Objective</Link>
          <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-zinc-950 w-full h-[2px]`}></span>
        </li>
        <li className='group'>
          <Link href={'#edu'}>Education</Link>
          <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-zinc-950 w-full h-[2px]`}></span>
        </li>
        <li className='group'>
          <Link href={'#exp'}>Experience</Link>
          <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-zinc-950 w-full h-[2px]`}></span>
        </li>
        <li className='group'>
          <Link href={'#hob'}>Hobbies</Link>
          <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-zinc-950 w-full h-[2px]`}></span>
        </li>
      </menu>
    </motion.div>
  )
}

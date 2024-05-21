'use client'
import React, { useState } from 'react'

export default function CodingJourney() {

  const first = 'I first started coding back in high school. I would play around with the Unity game engine. Using C#, I created small, simple, 2d pixel games.';
  const second = '';
  const third = '';
  const fourth = '';

  const [details, setDetails] = useState(first);

  return (
    <section id='code' className='w-full  h-fit flex-col items-center justify-center bg-inherit p-20'>
      <h5 className='text-7xl font-bold font-sans w-fit mx-auto my-10 '>&#8608;My Coding Journey&#8606;</h5>
      <div className='w-full flex gap-10 justify-center items-center'>
        {/* time line */}
        <div className='flex flex-col h-full'>

          {/* section */}
          <div className='flex items-center justify-center gap-2 h-28'>
            <div className='flex flex-col items-center justify-center relative'>
              <div className='bg-zinc-950 rounded-full h-5 aspect-square flex items-center justify-center relative'>
                <div className='bg-stone-50 rounded-full h-3 aspect-square absolute z-20'></div>
              </div>
              <div className='bg-zinc-950 h-28 w-1 absolute z-10 border border-dashed'></div>
            </div>
            <button 
            className='bg-zinc-950 text-stone-50 rounded-full py-3 px-6 font-mono text-4xl h-fit hover:bg-red-600 hover:scale-105 transition-all duration-200 ease-in shadow-2xl'
            onClick={() => setDetails(first)}
            >
              2016
            </button>
          </div>

          <div className='flex items-center justify-center gap-2 h-28'>
            <div className='flex flex-col items-center justify-center relative'>
              <div className='bg-zinc-950 rounded-full h-5 aspect-square flex items-center justify-center relative'>
                <div className='bg-stone-50 rounded-full h-3 aspect-square absolute z-20'></div>
              </div>
              <div className='bg-zinc-950 h-28 w-1 absolute z-10 border border-dashed'></div>
            </div>
            <button className='bg-zinc-950 text-stone-50 rounded-full py-3 px-6 font-mono text-4xl h-fit hover:bg-red-600 hover:scale-105 transition-all duration-200 ease-in shadow-2xl'>
              2020
            </button>
          </div>

          <div className='flex items-center justify-center gap-2 h-28'>
            <div className='flex flex-col items-center justify-center relative'>
              <div className='bg-zinc-950 rounded-full h-5 aspect-square flex items-center justify-center relative'>
                <div className='bg-stone-50 rounded-full h-3 aspect-square absolute z-20'></div>
              </div>
              <div className='bg-zinc-950 h-28 w-1 absolute z-10 border border-dashed'></div>
            </div>
            <button className='bg-zinc-950 text-stone-50 rounded-full py-3 px-6 font-mono text-4xl h-fit hover:bg-red-600 hover:scale-105 transition-all duration-200 ease-in shadow-2xl'>
              2023
            </button>
          </div>

          <div className='flex items-center justify-center gap-2 h-28'>
            <div className='flex flex-col items-center justify-center relative'>
              <div className='bg-zinc-950 rounded-full h-5 aspect-square flex items-center justify-center relative'>
                <div className='bg-stone-50 rounded-full h-3 aspect-square absolute z-20'></div>
              </div>
              <div className='bg-zinc-950 h-28 w-1 absolute z-10 border border-dashed'></div>
            </div>
            <button className='bg-zinc-950 text-stone-50 rounded-full py-3 px-6 font-mono text-4xl h-fit hover:bg-red-600 hover:scale-105 transition-all duration-200 ease-in shadow-2xl'>
              2024
            </button>
          </div>

        </div>

        <article className='bg-stone-50 shadow-2xl rounded-2xl w-1/3 px-6 py-3'>
        <p className='font-mono text-xl font-medium '>
          {details}
        </p>
        </article>
      </div>
    </section>
  )
}

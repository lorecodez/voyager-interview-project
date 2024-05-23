'use client'
import React, { useState } from 'react'

export default function CodingJourney() {

  const first = () => <>I first started coding back in high school. I would play around with the Unity game engine. Using C#, I created small, simple, 2D pixel games. During my summers, while at SMASH, I learned <strong className='text-red-500'>Scratch</strong> and basic <strong className='text-red-500'>JavaScript</strong>.</>;
  const second = () =><>In the summer of 2020, I was given the opportunity to work with Genius Plaza through the SMASH-Rising internship. My coworkers and I built a solution to increase civic engagement within local communities with the help from the team at Genius Plaza. In the process, I was exposed to <strong className='text-red-500'>React Native</strong> and <strong className='text-red-500'>Python</strong>.</>;
  const third = () => <>During 2023 I challenged myself to advance my JavaScript skills by learning <strong className='text-red-500'>React.js</strong>, <strong className='text-red-500'>Next.js</strong> and <strong className='text-red-500'>TypeScript</strong>. I would also begin to develop simple static websites.</>;
  const fourth = () => <>In 2024, I started to learn backend programming with <strong className='text-red-500'>Node.js</strong> and <strong className='text-red-500'>MYSQL</strong>. I became confident enough to start my own freelance web development business. Currently I am experimenting with <strong className='text-red-500'>PowerShell</strong> and <strong className='text-red-500'>PHP</strong>.</>;

  const [details, setDetails] = useState(first);
  const [year, setYear] = useState(2016)

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
            className={`${year == 2016 && 'bg-red-600'} bg-zinc-950 text-stone-50 rounded-full py-3 px-6 font-mono text-4xl h-fit hover:bg-red-600 hover:scale-105 transition-all duration-200 ease-in shadow-2xl`}
            onClick={() => {
              setDetails(first)
              setYear(2016)
            }}
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
            <button
            onClick={() => {
              setDetails(second)
              setYear(2020)
            }} 
            className={`${year == 2020 && 'bg-red-600'} bg-zinc-950 text-stone-50 rounded-full py-3 px-6 font-mono text-4xl h-fit hover:bg-red-600 hover:scale-105 transition-all duration-200 ease-in shadow-2xl`}
            >
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
            <button 
            className={`${year == 2023 && 'bg-red-600'} bg-zinc-950 text-stone-50 rounded-full py-3 px-6 font-mono text-4xl h-fit hover:bg-red-600 hover:scale-105 transition-all duration-200 ease-in shadow-2xl`}
            onClick={() => {
              setDetails(third)
              setYear(2023)
            }}
            >
              2023
            </button>
          </div>

          <div className='flex items-center justify-center gap-2 h-28 group'>
            <div className='flex flex-col items-center justify-center relative'>
              <div className='bg-zinc-950 rounded-full h-5 aspect-square flex items-center justify-center relative'>
                <div className={` bg-stone-50 rounded-full h-3 aspect-square absolute z-20 transition-all duration-200 ease-in-out`}></div>
              </div>
              <div className='bg-zinc-950 h-28 w-1 absolute z-10 border border-dashed'></div>
            </div>
            <button 
            className={`${year == 2024 && 'bg-red-600'} bg-zinc-950 text-stone-50 rounded-full py-3 px-6 font-mono text-4xl h-fit hover:bg-red-600 hover:scale-105 transition-all duration-200 ease-in shadow-2xl`}
            onClick={() => {
              setDetails(fourth)
              setYear(2024)
            }}
            >
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

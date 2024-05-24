'use client'
import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa6';
import Link from 'next/link';


export default function Foot() {
  return (
    <section className='fixed bottom-0 flex items-center py-3 px-6 justify-start gap-2 h-64 w-full'>
      
      <div className='h-full w-1/3 font-medium text-xl flex flex-col gap-2 rounded-2xl bg-zinc-950 text-stone-50 px-6 py-3 drop-shadow-xl'>
        <p className='text-4xl font-bold'>Navigation</p>
        <menu className='flex flex-col font-mono'>
          <li className='group w-fit' title='Objective'>
            <button 
            onClick={() =>{
              const element = document.getElementById('obj')
              element?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
            className='hover:text-red-600 transition-all duration-200 ease-linear'
            >Objective</button>
            <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-stone-50 w-full h-[2px]`}></span>
          </li>
          <li className='group w-fit' title='Education'>
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
            <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-stone-50 w-full h-[2px]`}></span>
          </li>
          <li className='group w-fit' title='Experience'>
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
            <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-stone-50 w-full h-[2px]`}></span>
          </li>
          <li className='group w-fit' title='My Coding Journey'>
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
            <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-stone-50 w-full h-[2px]`}></span>
          </li>
          <li className='group w-fit' title='Hobbies'>
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
            <span className={`group-hover:scale-100 block duration-200 group- scale-0 transiton-all ease-in-out bg-stone-50 w-full h-[2px]`}></span>
          </li>
        </menu>
      </div>

      {/* <div className='h-full w-1/3 flex items center justify-center'>
        <p className='text-4xl font-sans font-bold'>Thanks for Viewing <span className='rotate-90'>:)</span></p>
      </div> */}

      <div className='flex flex-col items-center justify-center w-full rounded-2xl bg-zinc-950 text-stone-50 px-6 py-3 drop-shadow-xl h-full'>
        <p className='text-4xl font-bold w-fit'>Contect With Me</p>
        <div className='flex flex-row items-center gap-3 w-full justify-center mt-9'>
          <Link title="Linedin" href='https://www.linkedin.com/in/lorenzowashington-abb274122'><FaLinkedin size='35px' className='hover:scale-105 transition'/></Link>
          <Link title="Github" href='https://github.com/lorecodez'><FaGithub size='35px' className='hover:scale-105 transition'/></Link>
          <Link title="Twitter" href='https://twitter.com/lorecodez'><FaTwitter size='35px' className='hover:scale-105 transition'/></Link>
          <Link title="Instagram" href='https://www.instagram.com/lorecodez/'><FaInstagram size='35px' className='hover:scale-105 transition'/></Link>
          <Link title="Facebook" href='https://www.facebook.com/lorecodez'><FaFacebook size='35px' className='hover:scale-105 transition'/></Link>   
        </div>
      </div>
    </section>
  )
}

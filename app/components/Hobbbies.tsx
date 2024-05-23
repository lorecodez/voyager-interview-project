import React from 'react';
import Image from 'next/image';
import JakeSandwich from '@/public/127934-jake-adventure-time-download-hd.png';
import BMO from '@/public/favcon.ico.png';
import Racecar from '@/public/racecar-jake.png'

export default function Hobbbies() {
  return (
    <section id='hob' className=' bg-zinc-950 flex flex-col items-center p-10 border-y-4 border-dashed gap-10 py-40 font-mono'>
      <h6 className='text-stone-50 text-7xl font-sans font-bold mb-10'>&#8608;Hobbies&#8606;</h6>
      <div className=' self-start bg-stone-50 w-1/2 rounded-2xl px-6 py-3 relative drop-shadow-xl'>
        <p className='font-bold text-4xl my-2'>I Like to Cook</p>
        <p className='text-xl font-medium pl-20'>Cooking just runs in my family. My father is a chef, so is my aunt and my sister is a baker. Some of my favorite things to cook are smoked chicken, bugers, bolognese, and bulgogi.</p>
        <Image
        src={JakeSandwich}
        height={300}
        width={200}
        title='Me With Sandwich'
        alt='Jake and a sandwich'
        className='absolute z-10 -left-16 -bottom-20 '
        />
      </div>
      <div className='self-end bg-stone-50 w-1/2 rounded-2xl drop-shadow-xl px-6 py-3 relative'>
        <p className='font-bold text-4xl my-2'>Hobby # 2 Gaming</p>
        <p className='text-xl font-medium pr-16'>I grew up on gaming, after all who doesn&apos;t love a good quest. from playing zelda on my n64 to today playing the witcher on my PC, I will always be a gamer at heart.</p>
        <Image
        src={BMO}
        height={300}
        width={200}
        title='MO Unit Model B'
        alt='BMO'
        className='absolute z-10 -right-10 -bottom-20 '
        />
      </div>
      <div className=' self-start bg-stone-50 w-1/2 rounded-2xl px-6 py-3 relative drop-shadow-xl'>
        <p className='font-bold text-4xl my-2'>Inital D Enthusist</p>
        <p className='text-xl font-medium '>Inspired by the anime sensation Inital D, I bought an old E46 to fix up and take to Sonoma Raceway. <span className='pl-24'>Im hoping to take to car to autocross events <span className='pl-24'>aswell.</span></span></p>
        <Image
        src={Racecar}
        height={300}
        width={200}
        title='Me as a Car'
        alt='Jake as a Car with fin'
        className='absolute z-10 -left-10 -bottom-20 '
        />
      </div>
    </section>
  )
}

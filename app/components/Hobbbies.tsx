import React from 'react';
import Image from 'next/image';
import JakeSandwich from '@/public/127934-jake-adventure-time-download-hd.png';
import BMO from '@/public/favcon.ico.png';
import Racecar from '@/public/racecar-jake.png'

export default function Hobbbies() {
  return (
    <section id='hob' className=' bg-zinc-950 flex flex-col items-center p-10 border-y-4 border-dashed gap-10 py-40'>
      <h6 className='text-stone-50 text-7xl font-bold mb-10'>&#8608;Hobbies&#8606;</h6>
      <div className=' self-start bg-stone-50 w-1/2 rounded-2xl px-6 py-3 relative drop-shadow-xl font-mono'>
        <p className='font-bold text-4xl my-2'>I Like to Cook</p>
        <p className='text-xl font-medium pl-20'>Cooking just runs in my family. My father is a chef, so is my aunt, and my sister is a baker. Some of my favorite things to cook are smoked chicken, burgers, bolognese, and bulgogi.</p>
        <Image
        src={JakeSandwich}
        height={300}
        width={200}
        title='Me With Sandwich'
        alt='Jake and a sandwich'
        className='absolute z-10 -left-16 -bottom-24 '
        />
      </div>
      <div className='self-end bg-stone-50 w-1/2 rounded-2xl drop-shadow-xl px-6 py-3 relative'>
        <p className='font-bold text-4xl my-2'>Hobby # 2 Gaming</p>
        <p className='text-xl font-medium pr-20 font-mono'>I grew up on gaming, after all, who doesn&apos;t love a good quest. From playing Zelda on my N64 to today playing The Witcher on my PC, I will always be a gamer at heart.</p>
        <Image
        src={BMO}
        height={300}
        width={200}
        title='MO Unit Model B'
        alt='BMO'
        className='absolute z-10 -right-10 -bottom-36 '
        />
      </div>
      <div className=' self-start bg-stone-50 w-1/2 rounded-2xl px-6 py-3 relative drop-shadow-xl'>
        <p className='font-bold text-4xl my-2'>Initial D Enthusiast</p>
        <p className='text-xl font-medium pl-24 font-mono'>Inspired by the anime sensation Initial D, I bought an old E46 to fix up and take to Sonoma Raceway. I&apos;m hoping to take the car to autocross events as well.</p>
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

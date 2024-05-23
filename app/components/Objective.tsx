'use client'
import Image from "next/image";
import longJake from '@/public/Daco_2253049.png'

//short section to summerize my goals, qualifications and what I bring to the program
export default function Objective() {


  return (
    <section id='obj' className='my-20 p-20 mb-0 py-28  w-full flex flex-col items-center justify-center bg-zinc-950 gap-5 border-y-4 border-dashed'>
      <div className='rounded-2xl w-full flex flex-col items-center justify-center p-2 bg-gradient-radial'>
        <h2 className='text-stone-50 text-7xl font-bold'>
          &#8608;Objective&#8606;
        </h2>
        <Image
        title='Profile Photo'
        height={300}
        width={800}
        src={longJake}
        alt='Profile Photo'
        className=' drop-shadow-xl'
        />
      </div>
      <article className='text-stone-50 p-4 w-3/4 font-mono text-xl font-medium leading-relaxed'>
      The Voyager program is a chance for me to act as a role model in my community while working with real-world professionals from Niantic. This is a golden opportunity to gain a fresh perspective on coding, one that I cannot miss. I aim to take away new skills, new friends and connections from this bootcamp. What I bring to the table is a desire to learn and grow with others. I am eager to share and showcase the knowledge I have now, as well as what I will learn through this program.
      </article>
    </section>
  )
}

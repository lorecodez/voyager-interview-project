'use client'
import Image from "next/image";
import longJake from '@/public/Daco_2253049.png'

//short section to summerize my goals, qualifications and what I bring to the program
export default function Objective() {


  return (
    <section id='obj' className='my-20 p-20 py-28  w-full flex flex-col items-center justify-center bg-zinc-950 gap-5 border-y-4 border-dashed'>
      <div className='rounded-2xl bg w-full flex flex-col items-center justify-center p-2 bg-gradient-radial'>
        <h2 className='text-stone-50 text-7xl font-bold'>
        &#8608;Objective&#8606;
        </h2>
        <Image
        title='Profile Photo'
        height={300}
        width={800}
        src={longJake}
        alt='Profile Photo'
        className=''
        />
      </div>
      <article className='text-stone-50 p-4 w-3/4 font-mono text-xl font-medium leading-relaxed'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </article>
    </section>
  )
}

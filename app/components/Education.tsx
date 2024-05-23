import React from 'react'
import Image from 'next/image'
import Jake from '@/public/jake-reading.png'

export default function Education() {
  return (
    <section id='edu' className=' flex flex-col items-center justify-center h-fit bg-inherit'>
      
      <div className='mb-20 my-24 pb-20 w-full flex flex-col items-center justify-center'>
        <h3 className='font-sans text-7xl m-10 font-bold'>
          &#8608;Education&#8606;
        </h3>
        <div className='bg-stone-50  shadow-xl w-2/3 relative rounded-2xl'>
          <table className='w-full font-mono '>
            <thead>
              <tr className='border bg-zinc-950 text-stone-50 text-left text-3xl rounded-2xl'>
                <th scope='col' className='px-6 py-3'>Name</th>
                <th scope='col' className=' py-3'>Date</th>
                <th scope='col' className='px-6 py-3'>Description</th>
              </tr>
            </thead>
            <tbody className='text-xl'>
              <tr className='rounded-2xl border-b hover:scale-105 hover:bg-red-600 hover:text-stone-50 transition-all duration-200 ease-in-out'>
                <td className='px-6 py-3'>Vallejo High School</td>
                <td className=' py-3'>Aug 2015 - Jun 2019</td>
                <td className='px-6 py-3'>High School Diploma.</td>
              </tr>
              <tr className='rounded-2xl border-b hover:scale-105 hover:bg-red-600 hover:text-stone-50 transition-all duration-200 ease-in-out'>
                <td className='px-6 py-3'>LPFI&apos;s SMASH(Summer Math and Science Honors) Academy</td>
                <td className=' py-3'>Jun 2016 - July 2018</td>
                <td className='px-6 py-3'>Certificate Of Achievement & Certificate of Special Congressional Recongition.</td>
              </tr>
              <tr className='rounded-2xl border-b hover:scale-105 hover:bg-red-600 hover:text-stone-50 transition-all duration-200 ease-in-out'>
                <td className='px-6 py-3'>Google It Professional Certificate</td>
                <td className=' py-3'>Aug 2023 - Sep 2023</td>
                <td className='px-6 py-3'>Professional Certificate.</td>
              </tr>
              <tr className='rounded-2xl hover:scale-105 hover:bg-red-600 hover:text-stone-50 transition-all duration-200 ease-in-out'>
                <td className='px-6 py-3'>straighterline.com MAT201 | Precalculus</td>
                <td className=' py-3'>Feb 2024 - April 2024</td>
                <td className='px-6 py-3'>College credit for transfer.</td>
              </tr>
            </tbody>
          </table>
          <Image
          src={Jake}
          height={400}
          width={400}
          alt='Jake the dog reading'
          title='Me Reading'
          className='absolute z-10 -right-36 -bottom-10 '
          />
        </div>
      </div>
    </section>
  )
}

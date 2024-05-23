'use client'
import React from 'react'

export default function Experience() {
  return (
    <section id='exp' className='flex flex-col items-center justify-center  mx-auto py-40 bg-zinc-950 h-full border-y-4 border-dashed'>
      <h4 className='text-7xl text-stone-50 font-sans font-bold my-10 mt-0 max-w-6xl'>&#8608;Experience&#8606;</h4>
      <div className='bg-gray-50 font-mono text-xl font-medium w-full max-w-6xl flex flex-col gap-4 rounded-2xl p-3 px-6 shadow-xl'> 
        <div className='flex justify-between items-center w-full'>
          <p>
            <span className='font-bold text-3xl'>Freelance Web Developer</span> | <span className=' italic'>Self Employed</span>
          </p>
          <p>
            <span className='italic'>Vallejo, CA</span> | <span className='font-bold'>11/2023 - Present</span>
          </p>
        </div>
        <div>
          <ul className=' list-disc list-inside flex flex-col gap-1'>
            <li>Developed & designed websites for clients.</li>
            <li>Maintained & updated webistes for clients.</li>
            <li>Provided web hosting for clients.</li>
            <li>Secured and maintained a Linux VPS.</li>
          </ul>
        </div>

        <hr />

        <div className='flex justify-between items-center w-full'>
          <p>
            <span className='font-bold text-3xl'>Security Professional</span> | <span className=' italic'>Allied Universal</span>
          </p>
          <p>
            <span className='italic'>Napa, CA</span> | <span className='font-bold'>12/2022 - Present</span>
          </p>
        </div>
        <div>
          <ul className=' list-disc list-inside flex flex-col gap-1'>
            <li>Ensured the safety and security of Napa and American Canyon Public libraries.</li>
            <li>Made routine rounds around the property, writing daily activity reports and enforcing the library&apos;s policy of use. </li>
            <li>Provided customer support and answered any questions library patrons would ask.</li>
            <li>During closing, I would ensure that the tills from the drawer were securely locked in the safe and that all doors were secured and locked.</li>
          </ul>
        </div>

        <hr />

        <div className='flex justify-between items-center w-full'>
          <p>
            <span className='font-bold text-3xl'>Manager & Cook</span> | <span className=' italic'>Ruby Jewels</span>
          </p>
          <p>
            <span className='italic'>Vallejo, CA</span> | <span className='font-bold'>10/2020 - 09/2022</span>
          </p>
        </div>
        <div>
          <ul className=' list-disc list-inside flex flex-col gap-1'>
            <li>Managed the front desk where I would take and keep track of orders while working the till.</li>
            <li>Oversaw the kitchen, making sure it was efficient and organized. I would periodically provide a helping hand during busier times.</li>
            <li>Provided customer support and answered any questions customers would have.</li>
            <li>Kept track of inventory and bought supplies and ingredients when needed.</li>
            <li>Cleaned the kitchen in accordance with sanitary standards during opening and closing hours.</li>
          </ul>
        </div>

        <hr />

        <div className='flex justify-between items-center w-full'>
          <p>
            <span className='font-bold text-3xl'>SMASH Rising Intern</span> | <span className=' italic'>Genuis Plaza</span>
          </p>
          <p>
            <span className='italic'>Miami, FL</span> | <span className='font-bold'>05/2020 - 09/2022</span>
          </p>
        </div>
        <div>
          <p>
            A 10-week micro-internship, where interns would design and implement real-world challenges being faced by
            SMASH Rising with the following skills:
          </p>
          <ul className=' list-disc list-inside flex flex-col gap-1'>
            <li>Utilized Google Venture’s Design Sprint process to design an application to increase civic engagement in youth.</li>
            <li>Tested different solutions to create our mobile application, Activatable.</li>
            <li>Programming Activatable using JavaScript, React Native, and Python with senior developers from Genius Plaza.</li>
            <li>Provided insight into the competition. Researched and analyzed critical competitors in our hosen market. Highlighting their strengths and weaknesses to better our own.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

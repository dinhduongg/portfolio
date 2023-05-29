import React from 'react'
import Experience from './Experience'

import { experience } from '@/utils/dummy'

const Work = () => {
  return (
    <div id='work' className='w-full md:h-screen p-2 flex items-center'>
      <div className='w-full md:w-2/5 m-auto pt-24'>
        <div className='col-span-2 text-center'>
          <p className='text-3xl tracking-widest text-[#5651e5]'>Where I&#39;ve worked</p>
        </div>
        <div className='pt-6 space-y-6'>
          {experience.map((exp, index) => {
            return <Experience exp={exp} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Work

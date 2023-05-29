import { exp } from '@/utils/dummy'
import { FC } from 'react'
import { BsCaretRight } from 'react-icons/bs'

interface Props {
  exp: exp
}

const Experience: FC<Props> = ({ exp }) => {
  return (
    <div>
      <h6 className='text-[#5651e5]'>{exp.time}</h6>
      <div className='block md:flex items-center  md:space-x-2'>
        <p className='font-bold text-[#5651e5]'>{exp.compName}</p>
        <p className='text-gray-600'>( {exp.position} )</p>
      </div>
      <ul className='pt-4 md:pt-2 space-y-2'>
        {exp.jobDetail.map((item, index) => {
          return (
            <li key={index} className='flex items-center space-x-1 cursor-default'>
              <span>
                <BsCaretRight />
              </span>
              <p>{item}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Experience

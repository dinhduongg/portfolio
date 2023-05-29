import Image from 'next/image'
import React from 'react'
import { HiDesktopComputer, HiServer } from 'react-icons/hi'

const About = () => {
  return (
    <>
      <div id='about' className='w-full md:h-screen p-2 flex items-center'>
        <div className='max-w-[1240px] m-auto pt-10'>
          <div className='col-span-2 text-center'>
            <p className='uppercase text-3xl tracking-widest text-[#5651e5]'>About me</p>
            <p className='py-2 text-gray-600 w-full md:w-3/4 mx-auto'>
              I’m a software engineer specializing in building exceptional digital experiences. I enjoy creating things
              that live on the internet. My interest in web development started back in 2022 when I took a course on
              website design. I'm quietly confident, naturally curious, and perpetually working on improving my chops
              one develop problem at a time.
            </p>
          </div>
          <div className='max-w-[1000px] grid grid-cols-1 md:grid-cols-2 w-full rounded-3xl overflow-hidden border-[1px] shadow-lg mx-auto'>
            {/* frontend */}
            <div className='bg-white w-full flex flex-col items-center justify-start md:border-r-[1px]'>
              <div className='my-10 flex flex-col items-center justify-start'>
                <div className='flex items-center justify-center pt-10 pb-4 mt-8'>
                  <div className='text-white rounded-[50%] bg-[#080808] w-[80px] h-[80px] flex justify-center items-center text-[50px]'>
                    <HiDesktopComputer />
                  </div>
                </div>
                <div className='font-bold pb-5 text-[24px]'>Frontend developer</div>
                <div className='text-center px-10 h-20'>
                  Builds the front-end portion of websites and web applications—the part users see and interact with.
                </div>
                <div className='pt-7 pb-4 text-[20px] text-[#080808] font-bold'>Skills</div>
                <div className='grid grid-cols-4 gap-6 mt-8'>
                  <div className='hover:scale-110 duration-150'>
                    <Image src='/assets/skills/html.png' alt='/' width={50} height={50} className='cursor-pointer' />
                  </div>
                  <div className='hover:scale-110 duration-150'>
                    <Image src='/assets/skills/css.png' alt='/' width={50} height={50} className='cursor-pointer' />
                  </div>
                  <div className='hover:scale-110 duration-150'>
                    <Image
                      src='/assets/skills/javascript.png'
                      alt='/'
                      width={50}
                      height={50}
                      className='cursor-pointer'
                    />
                  </div>
                  <div className='hover:scale-110 duration-150'>
                    <Image src='/assets/skills/react.png' alt='/' width={50} height={50} className='cursor-pointer' />
                  </div>
                  <div className='hover:scale-110 duration-150'>
                    <Image src='/assets/skills/nextjs.png' alt='/' width={50} height={50} className='cursor-pointer' />
                  </div>
                  <div className='hover:scale-110 duration-150'>
                    <Image
                      src='/assets/skills/tailwind.png'
                      alt='/'
                      width={50}
                      height={50}
                      className='cursor-pointer'
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* backend */}
            <div className='bg-white w-full flex flex-col items-center justify-start md:border-r-[1px]'>
              <div className='my-10 flex flex-col items-center justify-start'>
                <div className='flex items-center justify-center pt-10 pb-4 mt-8'>
                  <div className='text-white rounded-[50%] bg-[#080808] w-[80px] h-[80px] flex justify-center items-center text-[50px]'>
                    <HiServer />
                  </div>
                </div>
                <div className='font-bold pb-5 text-[24px]'>Backend developer</div>
                <div className='text-center px-10 h-20'>
                  Creates code that does relational mapping to retrieve data from a database
                </div>
                <div className='pt-7 pb-4 text-[20px] text-[#080808] font-bold'>Skills</div>
                <div className='grid grid-cols-4 gap-4 mt-8'>
                  <div className='hover:scale-110 duration-150'>
                    <Image
                      src='/assets/skills/firebase.png'
                      alt='/'
                      width={50}
                      height={50}
                      className='cursor-pointer'
                    />
                  </div>
                  <div className='hover:scale-110 duration-150'>
                    <Image src='/assets/skills/mongo.png' alt='/' width={50} height={50} className='cursor-pointer' />
                  </div>
                  <div className='hover:scale-110 duration-150'>
                    <Image src='/assets/skills/node.png' alt='/' width={50} height={50} className='cursor-pointer' />
                  </div>
                  <div className='hover:scale-110 duration-150'>
                    <Image src='/assets/skills/nestjs.svg' alt='/' width={50} height={50} className='cursor-pointer' />
                  </div>
                  <div className='hover:scale-110 duration-150'>
                    <Image
                      src='/assets/skills/mikroorm.png'
                      alt='/'
                      width={50}
                      height={50}
                      className='cursor-pointer'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

import { AiOutlineMail } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import Head from 'next/head'

import avatar from 'public/assets/avatar-1.jpg'
import Image from 'next/image'

const Home = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <div className='mx-auto w-2/6 rounded-full overflow-hidden border-4 border-[#5651e5] p-2'>
            <Image src={avatar} alt='/' className='rounded-full' draggable={false} />
          </div>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Duong</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Web Developer</h1>
          {/* <h1 className='text-gray-700 py-4'>Nguyen Dinh Duong</h1>
          <h2 className='tracking-widest text-gray-600'>Web developer</h2> */}
          <div className='flex items-center justify-between max-w-[330px] m-auto py-6'>
            <a href='https://www.linkedin.com/in/duong-nguyen-2b3683278/' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/dinhduongg' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                <FaGithub />
              </div>
            </a>
            <a href='mailto:duongnd1402@gmail.com'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                <AiOutlineMail />
              </div>
            </a>
            <a href='tel:0941356960'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5651e5]'>
                <IoMdCall />
              </div>
            </a>
          </div>
          <a
            href='/assets/NguyenDinhDuong.pdf'
            download='NguyenDinhDuong'
            className='inline-flex items-center space-x-8 p-4 bg-[#5651e5] text-white rounded-md cursor-pointer font-semibold shadow-lg shadow-gray-400 hover:scale-110 ease-in duration-300'
          >
            <p>Download CV</p>
            <BsDownload />
          </a>
          {/* <a
            href='/assets/NguyenDinhDuong.pdf'
            target='_blank'
            className='inline-flex items-center space-x-8 p-4 bg-[#5651e5] text-white rounded-md cursor-pointer font-semibold shadow-lg shadow-gray-400'
          >
            <p>View CV</p>
            <BsDownload />
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default Home

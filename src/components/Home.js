import React from 'react';
import indexImage from '../assests/pro.gif';
import { AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";

export default function Home() {
  const config = {
    subtitle: 'Front - end - Developer'
  };

  return (
    <section id='home' className='flex flex-col md:flex-row px-5'>
      <div className='w-1/2 flex flex-col md:py-32'>
        <h1 className='text-7xl justify-center font-Home-font'>
          Hi, <br /> I'am <span className='to-black'>Naveen</span>
          <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-5'>
          <a
            href='https://www.linkedin.com/in/naveen-k-6337b6214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            className='pr-3 hover:text-[#318445]'
          >
            <AiOutlineLinkedin size={40} />
          </a>
          <a href='https://github.com/KNAVEEN1705' className='hover:text-[#318445]'>
            <AiOutlineGithub size={40} />
          </a>
        </div>
      </div>

      <img className='md:w-1/2' src={indexImage} alt="Naveen's Profile" />
    </section>
  );
}

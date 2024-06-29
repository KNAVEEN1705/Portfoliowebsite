
import aboutGif from '../assests/aboutme.gif';
import { AiOutlinePython } from "react-icons/ai";
import { DiJavascript, DiMysql } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";

export default function About() {
  const config={
    line1:'Hi, I`m Naveen K, a frontend developer and MCA student with a passion for building intuitive and visually appealing user interfaces. As a fresher, I`m eager to expand my skill set and transition into a full-stack developer role',
    line2:'I`m currently focused on developing my backend skills, with a particular interest in Node.js and Express. I`m excited to learn and grow in this area, and I`m looking for opportunities to collaborate and gain experience.'
  }
  return (
    <section id='about' className='flex flex-col md:flex-row px-5 font-Home-font'>
      <div className='md:w-1/2'>
        <img src={aboutGif} alt="About Gif" />
      </div>
      <div className='md:w-1/2 pl-10'>
        <div className='flex flex-col justify-center pt-16'>
          <h1 className='text-4xl border-b-4 border-[#318445] mb-5 w-[190px]'>ABOUT ME</h1>
          <p className='text-justify'>{config.line1}</p>
          <ul className='list-none mb-5'>
            <li className='flex items-center mb-2 py-3'>
              <AiOutlinePython className='mr-2 hover:text-[#318445]' size={40} />
              Python
            </li>
            <li className='flex items-center mb-2'>
              <DiJavascript className='mr-2 hover:text-[#318445]' size={40}/>
              JavaScript
            </li>
            <li className='flex items-center mb-2'>
              <RiReactjsFill className='mr-2 hover:text-[#318445]' size={40}/>
              React.js
            </li>
            <li className='flex items-center mb-2'>
              <FaCss3Alt className='mr-2 hover:text-[#318445]' size={40}/>
              CSS
            </li>
            <li className='flex items-center mb-2'>
              <RiTailwindCssLine className='mr-2 hover:text-[#318445]' size={40}/>
              Tailwind CSS
            </li>
            <li className='flex items-center mb-2'>
              <DiMysql className='mr-2 hover:text-[#318445]' size={40}/>
              SQL
            </li>
          </ul>
          <p className='text-justify'>{config.line2}</p>
        </div>
      </div>
    </section>
  );
}
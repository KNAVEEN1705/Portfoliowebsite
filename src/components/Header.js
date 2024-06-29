import {Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header()
{
    const[toggleMenu,setToggleMenu]=useState(false)
    return <header className="flex justify-between px-5 py-3 bg-primary font-Home-font">
        <a className='font-bold text-black font-Home-font' href="#">NAVEEN.K</a>
        <nav className='hidden md:block'>
        <ul className="flex">
            <li><a href="/">HOME</a></li>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#project">PROJECTS</a></li>
            <li><a href="#resume">RESUME</a></li>
            <li><a href="#contact">CONTACT</a></li>
            
        </ul>
        </nav>
        { toggleMenu &&
            <nav className='block md:hidden '>
            <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col mobile-nav">
                <li><a href="/">HOME</a></li>
                <li><a href="#about">ABOUT ME</a></li>
                <li><a href="#project">PROJECTS</a></li>
                <li><a href="#resume">RESUME</a></li>
                <li><a href="# contact">CONTACT</a></li>
            </ul>
            </nav>
        }
        <button className='block md:hidden' onClick={()=>setToggleMenu(!toggleMenu)}><Bars3Icon className='text-black h-6'/></button>
        
    </header>
}
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-zinc-900 px-4' >
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-evenly'>
        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className='flex text[14px] gap-9'>
            <Link href="#home" className='flex items-center cursor-pointer hover:text-textDark duration-300 nav-link'>
              <motion.span initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration: 0.1}}>Home</motion.span>
            </Link>
            <Link href="#home" className='flex items-center cursor-pointer hover:text-textDark duration-300 nav-link'>
              <motion.span initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration: 0.2}}>About</motion.span>
            </Link>
            <Link href="#home" className='flex items-center cursor-pointer hover:text-textDark duration-300 nav-link'>
              <motion.span initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration: 0.3}}>Experience</motion.span>
            </Link>
            <Link href="#home" className='flex items-center cursor-pointer hover:text-textDark duration-300 nav-link'>
              <motion.span initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration: 0.4}}>Projects</motion.span>
            </Link>
            <Link href="#home" className='flex items-center cursor-pointer hover:text-textDark duration-300 nav-link'>
              <motion.span initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration: 0.5}}>Contact</motion.span>
            </Link>
          </ul>
        </div>

        {/* small screen */}
        <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textLight cursor-pointer overflow-hidden group'>
          <span className='w-full h-[2px] bg-textLight inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'>
            
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MdOutlineClose } from 'react-icons/md';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false)
  const [showNavIcon, setShowNavIcon] = useState(true)

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setShowMenu(false)
    setShowNavIcon(true)
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const element = document.getElementById(targetId)
    element?.scrollIntoView({
      behavior: "smooth"
    })

    const links = document.querySelectorAll(".nav-link")
    links.forEach((link) => {
      link.classList.remove("active")
    })

    e.currentTarget.classList.add("active")
  }
  
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4' >
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
        <div>
          <span className='w-10 font-semibold text-2xl lgl:text-4xl font-thin text-black'>S</span>
        </div>
        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className='flex text[14px] gap-9'>
            <Link href="#home" className='flex items-center cursor-pointer hover:text-textLight duration-300 nav-link' onClick={handleNavigation}>
              <motion.span initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration: 0.1}}>Home</motion.span>
            </Link>
            <Link href="#about" className='flex items-center cursor-pointer hover:text-textLight duration-300 nav-link' onClick={handleNavigation}>
              <motion.span initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration: 0.2}}>About</motion.span>
            </Link>
            <Link href="#experience" className='flex items-center cursor-pointer hover:text-textLight duration-300 nav-link' onClick={handleNavigation}>
              <motion.span initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration: 0.3}}>Experience</motion.span>
            </Link>
            <Link href="#projects" className='flex items-center cursor-pointer hover:text-textLight duration-300 nav-link' onClick={handleNavigation}>
              <motion.span initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration: 0.4}}>Projects</motion.span>
            </Link>
          </ul>
        </div>

        {/* small screen */}
        {showNavIcon && (
        <div onClick={() => {setShowMenu(true); setShowNavIcon(false)}} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textLight cursor-pointer overflow-hidden group'>
          <span className='w-full h-[2px] bg-textLight inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'> 
          </span>
          <span className='w-full h-[2px] bg-textLight inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'> 
          </span>
          <span className='w-full h-[2px] bg-textLight inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'> 
          </span>
        </div>
)}
        {showMenu && (
          <div 
          className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end' 
          >
            <motion.div 
              initial={{x:20, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:0.1}}
              className='w-[50%] h-full overflow-y-scroll scrollbarHide bg-[#222222]/50 flex flex-col items-center px-4 py-10 relative'
            >
              <MdOutlineClose onClick={() => {setShowMenu(false); setShowNavIcon(true)}} className="text-3xl text-textLight cursor-pointer hover:text-textDark absolute top-4 right-4" />

              <ul className='flex flex-col text[14px] gap-9'>
                <Link href="#home" className='flex items-center cursor-pointer hover:text-textLight duration-300 nav-link' onClick={handleNavigation}>
                  <motion.span initial={{x:20,opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 0.1}}>Home</motion.span>
                </Link>
                <Link href="#about" className='flex items-center cursor-pointer hover:text-textLight duration-300 nav-link' onClick={handleNavigation}>
                  <motion.span initial={{x:20,opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 0.2}}>About</motion.span>
                </Link>
                <Link href="#experience" className='flex items-center cursor-pointer hover:text-textLight duration-300 nav-link' onClick={handleNavigation}>
                  <motion.span initial={{x:20,opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 0.3}}>Experience</motion.span>
                </Link>
                <Link href="#projects" className='flex items-center cursor-pointer hover:text-textLight duration-300 nav-link' onClick={handleNavigation}>
                  <motion.span initial={{x:20,opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 0.4}}>Projects</motion.span>
                </Link>
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
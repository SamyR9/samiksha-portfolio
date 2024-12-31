import React, { useState } from 'react'
import Simpplr from './experience/Simpplr'
import Axtria from './experience/Axtria'
import Cognizant from './experience/Cognizant'

function Experience() {

  const [workSimp, setWorkSimp] = useState(true)
  const [workAxt, setWorkAxt] = useState(false)
  const [workCog, setWorkCog] = useState(false)

  const handleSimp = () => {
    setWorkSimp(true)
    setWorkAxt(false)
    setWorkCog(false)
  }
  
  const handleAxt = () => {
    setWorkSimp(false)
    setWorkAxt(true)
    setWorkCog(false)
  }

  const handleCog = () => {
    setWorkSimp(false)
    setWorkAxt(false)
    setWorkCog(true)
  }
  
  return (
    <section id='experience' className='max-w-contentContainer mx-auto mdl-px-10 cl:px-4 py-24'>
      <h2 className="text-2xl lgl:text-4xl items-center text-textLight mt-2 lgl:mt-4 font-semibold">
        Experience
      </h2>
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:2-32 flex flex-col'>
          <li onClick={handleSimp} className={`${workSimp ? "border-s-textLight text-textLight" : "border-s-textDark text-textDark"} border-s-2 bg-transparent hover:bg-[#222222] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Simpplr</li>

          <li onClick={handleAxt} className={ `${workAxt ? "border-s-textLight text-textLight" : "border-s-textDark text-textDark"} border-s-2 border-s-textDarker text-textDark bg-transparent hover:bg-[#222222] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Axtria</li>

          <li onClick={handleCog} className={`${workCog ? "border-s-textLight text-textLight" : "border-s-textDark text-textDark"} border-s-2 border-s-textDarker text-textDark bg-transparent hover:bg-[#222222] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Cognizant</li>
        </ul>

        {workSimp && <Simpplr />}
        {workAxt && <Axtria />}
        {workCog && <Cognizant />}
      </div>
    </section>
  )
}

export default Experience
import {motion} from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa";

const Banner = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto flex flex-col mdl-px-10 cl:px-4 py-40'>
      <motion.h1 initial={{y:10, opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5, delay:0.4}} className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col text-textLight'>Samiksha Rana 
      </motion.h1>
      <motion.h2 initial={{y:10, opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5, delay:0.5}} className='text-2xl lgl:text-4xl  text-textDark mt-2 lgl:mt-4 font-semibold'> Software Engineer
      </motion.h2>
      <motion.h3 initial={{y:10, opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5, delay:0.6}} className='text-xl lgl:text-2xl  text-textDarker mt-4 lgl:mt-14 font-mono'>I build applications for the web
      </motion.h3>

      <motion.div initial={{y:10, opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5, delay:0.6}}  className="flex flex-rows gap-1">
        <a href="https://github.com/SamyR9" target="_blank">
          <span className="w-12 h-20 text-2xl inline-flex items-center justify-between cursor-pointer text-textDarker">
            <FaGithub className="hover:text-textLight" />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/samiksha-rana-314915157" target="_blank">
          <span className="w-12 h-20 text-2xl inline-flex items-center justify-between cursor-pointer text-textDarker">
            <FaLinkedin className="hover:text-textLight"/>
          </span>
        </a>
        <a href="https://www.salesforce.com/trailblazer/sarana" target="_blank">
          <span className="w-12 h-20 text-2xl inline-flex items-center justify-between cursor-pointer text-textDarker">
            <FaSalesforce className="hover:text-textLight"/>
          </span>
        </a>
      </motion.div>
    </section>
  )
}

export default Banner
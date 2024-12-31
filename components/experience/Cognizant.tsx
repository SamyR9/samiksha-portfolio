import { motion } from 'framer-motion'
import React from 'react'

function Cognizant() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className="w-full">
      <h3 className="flex gap-1 font-medium text-xl font-titleFont text-textLight">Programmer Analyst (November 2017- February 2018)</h3>
      <p className="text-sm mt-2 font-medium text-textDark">Programmer Analyst Trainee (November 2016 - November 2017)</p>

      <p className="mt-2 text-textDarker">Build and maintain backend services in Node js and salesforce codebases. <br/>Working on scalability, performance and quality of intranet application. <br/>Implemented integrations with external apps like google and created background jobs to run asynchronous processes seamlessly. <br/>Collaborate with product managers and cross functional teams to advocate and implement complex solutions</p>
    </motion.div>
  )
}

export default Cognizant
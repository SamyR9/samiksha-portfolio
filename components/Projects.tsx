import { profile } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

function Projects() {
  return (
    <section id='projects' className='max-w-contentContainer mx-auto mdl-px-10 cl:px-4 py-24'>
      <h2 className="text-2xl lgl:text-4xl  text-textLight mt-2 lgl:mt-4 font-semibold">
        Projects
      </h2>

      <div className='w-full h-auto flex flex-row mt-10 gap-4 justify-between items-center hover:bg-hoverColor px-2 py-2 border-0 rounded-lg'>
        <div className='w-3/4'>
          <h3 className='text-textLight text-xl font-bold'>Sentiment and Emotion Analysis</h3>
          <p className='mt-2 text-textDark'>Sentiment analysis of geo tagged twitter data Sentiment analysis of geo tagged twitter data Sentiment analysis of geo tagged twitter data Sentiment analysis of geo tagged twitter data </p>
          <ul className='flex gap-2 mt-2'>
            <li className='text-textLight bg-textDarker px-5 py-1 hover:bg-hoverColor border-0 rounded-lg'>Python</li>
            <li className='text-textLight bg-textDarker px-5 py-1 hover:bg-hoverColor border-0 rounded-lg'>Machine Learning</li>
          </ul>
          <ul className='flex gap-4 mt-4'>
            <li>
              <a href='' target='_blank'>
                <FaGithub className='text-textDark hover:text-textLight w-4 h-4'/>
              </a>
            </li>
            <li>
              <a href='' target='_blank'>
                <FaArrowUpRightFromSquare className='text-textDark hover:text-textLight h-4 w-4' />
              </a>
            </li>
          </ul>
        </div>
        <div className='w-1/4'>
          <a href='' target='_blank'>
            <Image src={profile} alt="" className='border-0 rounded-lg'/>
          </a>
        </div>
      </div>

      <div className='w-full h-auto flex flex-row mt-10 gap-4 justify-between items-center hover:bg-hoverColor px-2 py-2 border-0 rounded-lg'>
        <div className='w-1/4'>
          <a href='' target='_blank'>
            <Image src={profile} alt="" className='border-0 rounded-lg'/>
          </a>
        </div>
        <div className='w-3/4'>
          <h3 className='text-textLight text-xl font-bold'>Sentiment and Emotion Analysis</h3>
          <p className='mt-2 text-textDark'>Sentiment analysis of geo tagged twitter data Sentiment analysis of geo tagged twitter data Sentiment analysis of geo tagged twitter data Sentiment analysis of geo tagged twitter data </p>
          <ul className='flex gap-2 mt-2'>
            <li className='text-textLight bg-textDarker px-5 py-1 hover:bg-hoverColor border-0 rounded-lg'>Python</li>
            <li className='text-textLight bg-textDarker px-5 py-1 hover:bg-hoverColor border-0 rounded-lg'>Machine Learning</li>
          </ul>
          <ul className='flex gap-4 mt-4'>
            <li>
              <a href='' target='_blank'>
                <FaGithub className='text-textDark hover:text-textLight w-4 h-4'/>
              </a>
            </li>
            <li>
              <a href='' target='_blank'>
                <FaArrowUpRightFromSquare className='text-textDark hover:text-textLight h-4 w-4' />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='w-full h-auto flex flex-row mt-10 gap-4 justify-between items-center hover:bg-hoverColor px-2 py-2 border-0 rounded-lg'>
        <div className='w-3/4'>
          <h3 className='text-textLight text-xl font-bold'>Sentiment and Emotion Analysis</h3>
          <p className='mt-2 text-textDark'>Sentiment analysis of geo tagged twitter data Sentiment analysis of geo tagged twitter data Sentiment analysis of geo tagged twitter data Sentiment analysis of geo tagged twitter data </p>
          <ul className='flex gap-2 mt-2'>
            <li className='text-textLight bg-textDarker px-5 py-1 hover:bg-hoverColor border-0 rounded-lg'>Python</li>
            <li className='text-textLight bg-textDarker px-5 py-1 hover:bg-hoverColor border-0 rounded-lg'>Machine Learning</li>
          </ul>
          <ul className='flex gap-4 mt-4'>
            <li>
              <a href='' target='_blank'>
                <FaGithub className='text-textDark hover:text-textLight w-4 h-4'/>
              </a>
            </li>
            <li>
              <a href='' target='_blank'>
                <FaArrowUpRightFromSquare className='text-textDark hover:text-textLight h-4 w-4' />
              </a>
            </li>
          </ul>
        </div>
        <div className='w-1/4'>
          <a href='' target='_blank'>
            <Image src={profile} alt="" className='border-0 rounded-lg'/>
          </a>
        </div>
      </div>

      <div className='w-full h-auto flex flex-row mt-10 gap-4 justify-between items-center hover:bg-hoverColor px-2 py-2 border-0 rounded-lg'>
        <div className='w-1/4'>
          <a href='' target='_blank'>
            <Image src={profile} alt="" className='border-0 rounded-lg'/>
          </a>
        </div>
        <div className='w-3/4'>
          <h3 className='text-textLight text-xl font-bold'>Sentiment and Emotion Analysis</h3>
          <p className='mt-2 text-textDark'>Sentiment analysis of geo tagged twitter data Sentiment analysis of geo tagged twitter data Sentiment analysis of geo tagged twitter data Sentiment analysis of geo tagged twitter data </p>
          <ul className='flex gap-2 mt-2'>
            <li className='text-textLight bg-textDarker px-5 py-1 hover:bg-hoverColor border-0 rounded-lg'>Python</li>
            <li className='text-textLight bg-textDarker px-5 py-1 hover:bg-hoverColor border-0 rounded-lg'>Machine Learning</li>
          </ul>
          <ul className='flex gap-4 mt-4'>
            <li>
              <a href='' target='_blank'>
                <FaGithub className='text-textDark hover:text-textLight w-4 h-4'/>
              </a>
            </li>
            <li>
              <a href='' target='_blank'>
                <FaArrowUpRightFromSquare className='text-textDark hover:text-textLight h-4 w-4' />
              </a>
            </li>
          </ul>
        </div>
        
      </div>

    </section>
  )
}

export default Projects
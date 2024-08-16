import React from 'react'
import { EXPERIENCES } from '../constants'

const Experiences = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Experiene</h1>

        <div>
            {EXPERIENCES.map((experiences, index) => (
                <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'>
                            {experiences.year}
                        </p>
                     </div>
                     <div className='w-full max-w-xl lg:w-3/4'> 
                        <h6 className='mb-2 font-semibold'>
                            {experiences.role} - {" "}
                            <span className='text-sm text-purple-100'>
                                {experiences.company}
                            </span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>
                            {experiences.description}
                        </p>
                        {experiences.technologies.map((tech, index) => (
                            <span key={index} className='mr-2 mt-4 rounded px-2 py-1 text-sm font-medium text-purple-800 bg-neutral-900'> {tech}</span>
                        ))}
                     </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Experiences
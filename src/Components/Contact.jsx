import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        {/* <div className=''> */}
            <h2 className='text-center text-4xl my-10'> Get in Touch</h2>
            <div className='tracking-tighter text-center'>
                <p className='my-4'>{CONTACT.address}</p>
                <p className='my-4' >{CONTACT.phoneNo}</p>
                <a href='#' className='border-b' > {CONTACT.email}</a>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Contact
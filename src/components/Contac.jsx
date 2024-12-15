import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"

const Contac = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
        whileInView={{opacity:100, y: 0}}
        initial = {{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='my-8 text-center text-4x1'>Contact Me</motion.h2>
        <div className='text-center tracking-tighter'>

        <motion.div
              whileInView={{opacity:100, y: 0}}
              initial = {{opacity: 0, y: -100}}
              transition={{duration: 0.5}}>
              <a 
                href={`mailto:${CONTACT.email}`} 
                className="border-b">
                    {CONTACT.email}
              </a>
        </motion.div>

        <motion.p 
              whileInView={{ opacity: 1, x: 0 }}
              initial = {{ opacity: 0, x: -100 }}
              transition={{duration: 1}}
              className='my-4'
            >
                {CONTACT.phoneNo}
            </motion.p>

           
            <motion.p 
              whileInView={{ opacity: 1, y: 0 }}
              initial = {{ opacity: 0, y: +100 }}
              transition={{duration: 1}}
              className='my-4'
              >{CONTACT.address}
            </motion.p>

        
            
            
        </div>      
    </div>
  )
}

export default Contac

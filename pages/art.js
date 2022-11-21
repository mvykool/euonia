import React from 'react'
import Head from 'next/head'
import { motion, whileInView, viewport } from 'framer-motion'



/**framer motion variants */

const sectionVariant = {
    hidden : { opacity: 0},
    show: { opacity: 1,
    transition: { duration: 1, delay: 0.5}
    }
  }
  

const art = () => {
  return (
    <div className='art-body'>
     <Head>
    <title>Euonia | Art</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
   </Head>

     <motion.div className='art-title'
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
     >
        <h1>Art & Sculptures</h1>
     </motion.div>

     <section className='layout-grid'>


<div className="grid-container">

    <motion.div className="a"
     variants={sectionVariant}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
    >
     
    </motion.div>

    <motion.div className="b"
     variants={sectionVariant}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
    >
  
    </motion.div>

    <motion.div className="c"
     variants={sectionVariant}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
    >

    </motion.div>

    <motion.div className="d"
     variants={sectionVariant}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
    >
    
    </motion.div>

    <motion.div className="e"
     variants={sectionVariant}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
    >
   
    </motion.div>

    <motion.div className="f"
     variants={sectionVariant}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
    >
    
    </motion.div>

    <motion.div className="g"
     variants={sectionVariant}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
    >
    
    </motion.div>

    <motion.div className="h"
     variants={sectionVariant}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
    >

    </motion.div>
    
    <motion.div className="i"
     variants={sectionVariant}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
    >
     
     </motion.div>

     <motion.div className="j"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
     >
   
     </motion.div>

     <motion.div className="k"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
     >
 
     </motion.div>

     <motion.div className="l"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
     >
     
     </motion.div>  

     <motion.div className="m"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
     >
     
     </motion.div>
 
</div>


</section>
    </div>
  )
}

export default art
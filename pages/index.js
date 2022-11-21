import Head from 'next/head'
import Image from 'next/image'
import { motion, whileInView, viewport } from 'framer-motion'


/**framer motion variants */

const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.5}
  }
}




export default function Home() {
  return (
    <div>
     <Head>
    <title>Euonia | Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
   </Head>
   <div className='wrapper'>
    
   <div className='layer'>
    
    <section className='home'>
      

        <div className='home-container'>
         <motion.div className='home-box-title'
         variants={sectionVariant}
         initial="hidden"
         animate="show"
         
         
         >
         <h1 className='home-title'>Euonia</h1>
          <div className='home-text'>
            <p>[u-noy-a] Greek</p>
            <p>(n.) a pure and well balanced mind, a good spirit.
            </p>
            <span>Beautiful thinking</span>
            <h3>Discover and learn about ancient Greek and Roman art, their history, places, and Gods.  
             </h3>
          </div>
         </motion.div>

       <motion.div
       variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       
       >
       <div className='home-box'/>
         
         <div className='home-img'>
         <Image src="/img.png" width={510} height={700} alt="image" className="home-hero"/>
         </div>

       </motion.div>
         
        </div>
   
    </section>
    
   
    <section className='about'>
    <img src="/wave.svg"  className="wave" alt='wave'/>

    
    <motion.div
    variants={sectionVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    >
    <div className='about-title'>
      <h1>About</h1>
    </div>

  
    <div>

    
    <p className='about-text'>
        Inspired website for the history, and art of Rome, and Ancient Greece.
        Their legacy is still present to this day in many countries, language,
        culture, philosophy.
      <br/><br/>
        The art of the statues, and sculptures is very present in this website,
        Also information from great historical figures such as Julius Caesar, Plato,
        Spartacus, and more.
      </p>
     </div>
     </motion.div>
    
     <motion.div
    variants={sectionVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    >
    <div>
    <div className='about-box'></div>
      <Image src="/roman.png" width={400} height={500} alt='image' className="about-hero"/>
      </div>
      </motion.div>
    </section>
   


   <section className='art'>

    <motion.div
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}

    >
    <div className='art-title'>
      <h1>
      Artem
      </h1>
      <p className='art-subtitle'>[aar-tm] Latin</p>
      <p className='art-subtitle'>(n.) Means Art in Latin</p>
    </div>
    <p className='art-text'>
    The art of the ancient Greeks and Romans is called classical art. This name is used also to describe later periods in which artists looked for their inspiration to this ancient style. The Romans learned sculpture and painting largely from the Greeks and helped to transmit Greek art to later ages.
    </p>

    </motion.div>
    <img src="/wave2.svg" className='wave-two' alt='wave2' />

  
   <div className="heroImageGrid">
	<motion.div className="container"
  variants={sectionVariant}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  >
		<div className="column"></div>
		<div className="column">
			<div className="row"></div>
			<div className="row">
				<div className='main-pic'>
					
				</div>
				<div></div>
			</div>
			<div className="row"></div>
		</div>
	</motion.div>
</div>


   </section>
   
    </div>
    </div>
    
    </div>
)
}

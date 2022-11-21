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



const languages = () => {
  return (
    <div className='languages'>
  <Head>
    <title>Euonia | languages</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
   </Head>
        <section className='languages-top'>
         <h1 className='languages-title'>Languages</h1>
        </section>


        <motion.div className='content-container-text'
         variants={sectionVariant}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
        >
            <div className='content-pic'>
                <div className='content-box'></div>
                <img src='/language-img.png' className='language-img' alt='img'/>
            </div>
            <div className='content-text'>
                <h2 className='content-text-title'>Did both nations speak the same language at some point?</h2>
                <p className='content-text-p'>
                After the Roman conquest of Greece, an unofficial bilingualism of Greek and Latin was established in the city of Rome and Koine Greek became a first or second language in the Roman Empire.
                </p>
            </div>
        </motion.div>

  


       <section className='language-section-two'>
       <img src="/wave2.svg" className='wave-language' alt='wave2' />


       <motion.div
       variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       
       >
       <h1 className='latin-title'>Latin</h1>
       
       <h3 className='latin-subtitle'>Latin (lingua Latīna, [ˈlɪŋɡʷa laˈtiːna] or Latīnum, [laˈtiːnʊ̃])</h3>
       <img alt='roman-flag' src="/roman-flag.png" className='roman-flag'/>
       </motion.div>
  
       <motion.div className='content-container'
       variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       
       
       >
            <div className='content-latin-text'>
              <p>
              It's a classical language belonging to the Italic branch of the Indo-European languages. Latin was originally a dialect spoken in the lower Tiber area (then known as Latium) around present-day Rome,[2] but through the power of the Roman Republic it became the dominant language in the Italian region and subsequently throughout the Roman Empire. Even after the fall of Western Rome, Latin remained the common language of international communication, science, scholarship and academia in Europe until well into the 18th century, when other regional vernaculars (including its own descendants, the Romance languages) supplanted it in common academic and political usage, and it eventually became a dead language in the modern linguistic definition.
              <br/>
              <br/>
             Latin is a highly inflected language, with three distinct genders (masculine, feminine, and neuter), six or seven noun cases (nominative, genitive, dative, accusative, ablative, and vocative), five declensions (1st, 2nd, 3rd, 4th,and fifth), four verb conjugations (1st, 2nd, 3rd, 4th), six tenses (present, imperfect, future, perfect, pluperfect, and future perfect), three persons (1st, 2nd, and 3rd), three moods, two voices (passive and active), two or three aspects, and two numbers (singular and plural). The Latin alphabet is directly derived from the Etruscan and Greek alphabets.
           <br/>
           <br/>

              </p>
            </div>
            <div className='content-latin-imgs'>
              <div className='content-box-latin'/>
              <img alt="cesar" className='cesar-img' src='/cesar.png'/>
            </div>
        </motion.div>
       </section>

       <section className='language-section-three'>

      <motion.div className='content-greek-img'
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      
      >
        <div className='content-box-greek'/>
        <img alt="hercules" className='hercules-img' src='/hercules.png'/>

      </motion.div>

      <motion.div
       variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      
      >
       <h1 className='greek-title'>Greek</h1>
       
       <h3 className='greek-subtitle'>Greek (Modern Greek: Ελληνικά, romanized: Elliniká;
       <br></br>
        Ancient Greek: Ἑλληνική, romanized: Hellēnikḗ) [eliniˈka]</h3>
       <img alt='greek-flag' src="/greek-flag.jpg" className='greek-flag'/>
       <div className='container-greek-text'>
        <p>
         It's an independent branch of the Indo-European family of languages, native to Greece, Cyprus, southern Italy (Calabria and Salento), southern Albania, and other regions of the Balkans, the Black Sea coast, Asia Minor, and the Eastern Mediterranean. It has the longest documented history of any Indo-European language, spanning at least 3,400 years of written records.[2] Its writing system is the Greek alphabet, which has been used for approximately 2,800 years;[3][4] previously, Greek was recorded in writing systems such as Linear B and the Cypriot syllabary.[5] The alphabet arose from the Phoenician script and was in turn the basis of the Latin, Cyrillic, Armenian, Coptic, Gothic, and many other writing systems.
        <br/>
        <br/>
       The Greek language holds a very important place in the history of the Western world. Beginning with the epics of Homer, ancient Greek literature includes many works of lasting importance in the European canon. Greek is also the language in which many of the foundational texts in science and philosophy were originally composed. The New Testament of the Christian Bible was also originally written in Greek.[6][7] Together with the Latin texts and traditions of the Roman world, the Greek texts and Greek societies of antiquity constitute the objects of study of the discipline of Classics.
       <br/>
       <br/>
        </p>
       </div>
       </motion.div>


       </section>
    </div>
  )
}

export default languages
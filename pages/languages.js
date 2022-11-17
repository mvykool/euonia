import React from 'react'
import Head from 'next/head'

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


        <div className='content-container-text'>
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
        </div>


       <section className='language-section-two'>
       <div className='content-container'>
            <div className='content-roman'></div>
            <div className='content-greek'></div>
        </div>
       </section>
    </div>
  )
}

export default languages
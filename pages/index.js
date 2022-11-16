import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
     <Head>
    <title>Euonia | Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
   </Head>
   <div className='layer'>
    <section className='home'>
      

        <div className='home-container'>
         <div className='home-box-title'>
         <h1 className='home-title'>Euonia</h1>
          <div className='home-text'>
            <p>[u-noy-a] Greek</p>
            <p>(n.) a pure and well balanced mind, a good spirit.
            </p>
            <span>Beautiful thinking</span>
            <h3>Discover and learn about ancient Greek and Roman art, their history, places, and Gods.  
             </h3>
          </div>
         </div>

         <div className='home-box'/>
         
         <div className='home-img'>
         <Image src="/img.png" width={510} height={700} className="home-hero"/>
         </div>

         
        </div>
   
    </section>
    
   
    <section className='about'>
    <img src="/wave.svg"  className="wave"/>
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
    <div className='about-box'></div>
      <Image src="/roman.png" width={400} height={500} className="about-hero"/>
    </section>
   
   <section className='art'>
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
    <img src="/wave2.svg" className='wave-two' />
   <div class="heroImageGrid">
	<div class="container">
		<div class="column"></div>
		<div class="column">
			<div class="row"></div>
			<div class="row">
				<div className='main-pic'>
					
				</div>
				<div></div>
			</div>
			<div class="row"></div>
		</div>
	</div>
</div>
   </section>
   
    </div>
    
    </div>
)
}

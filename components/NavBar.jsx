import React from 'react'
import Link  from 'next/link'
import { useState } from 'react';
import { GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from  'react-icons/md'


const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);

let menu;

if(showMenu){
  menu = <div >

  </div>
}


  return (
    <div className='nav-bar'>
        <div className='nav-logo'>
        <h3>Euonia</h3>
        </div>
       <div className='nav-links'>
       <Link href="/" className='link'>Home</Link>
        <Link href="/languages" className='link'>Languages</Link>
        <Link href="/art" className='link'>Art & Sculptures</Link>
       </div>

       <div className='menu-mobile'>

       <div  className='mobile-btn'   onClick={()=> setShowMenu(!showMenu)}><GiHamburgerMenu className='mobile-btn-icon'/></div>
       { menu ? 
      <>
    

        <div className='mobile-menu-container'>
        <div className='mobile-btn-close' onClick={()=> setShowMenu(false)}><MdClose className='mobile-icon-close'/> </div>
        <Link href="/" className='link'>Home</Link>
        <Link href="/languages" className='link'>Languages</Link>
        <Link href="/art" className='link'>Art & Sculptures</Link>

        </div>
    
      </>
         : false}


       </div>


    </div>
  )
}

export default NavBar
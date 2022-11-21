import React from 'react'
import Link  from 'next/link'

const NavBar = () => {
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
    </div>
  )
}

export default NavBar
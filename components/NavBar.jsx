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
        <Link href="/about" className='link'>About</Link>
        <Link href="/ninjas" className='link'>Rome</Link>
        <Link href="/ninjas" className='link'>Greece</Link>
       </div>
    </div>
  )
}

export default NavBar
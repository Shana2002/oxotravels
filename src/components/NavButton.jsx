import Link from 'next/link'
import React from 'react'

const NavButton = ({name,link}) => {
  return (
    <Link href={link || "#"} className='nav-link relative hover:text-green-500'>
        {name}
        
    </Link> 
  )
}

export default NavButton

import Link from 'next/link'
import React from 'react'

const NavButton = ({name,link}) => {
  return (
    <Link href={name} className=''>
        {name}
    </Link>
  )
}

export default NavButton

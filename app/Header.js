import React from 'react'
import Link from 'next/link'
import '../app/globals.css'
import Search from '@/components/client/Search'

const Header = () => {
    return (
        <div className='nav'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Search />
        </div>
    )
}

export default Header
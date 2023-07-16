import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex justify-between mt-2'>
            <Link href='/' className='decoration-transparent'>HOSP</Link>
            <nav className='flex'>
                <Link className='hover:bg-slate-400 py-2 px-4 rounded-full transition' href='/'>Home</Link>
                <Link className='hover:bg-slate-400 py-2 px-4 rounded-full transition' href='/auth'>Login / Signup</Link>
                <Link className='hover:bg-slate-400 py-2 px-4 rounded-full transition' href='/dashboard'>Dashboard</Link>
            </nav>
        </header>
    )
}

export default Header

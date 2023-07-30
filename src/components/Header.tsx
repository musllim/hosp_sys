import isLogedIn from '@/isLogedIn'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const Header = () => {
    const logout = async () => {
        "use server"
        console.log('hello')
        cookies().set({
            name: "jwt",
            value: '',
            expires: Date.now(),
            path: "/",
        });
        redirect("/");

    }

    return (
        <header className='flex justify-between mt-2'>
            <Link href='/' className='decoration-transparent'>HOSP</Link>
            <nav className='flex'>
                <Link className='hover:bg-slate-400 py-2 px-4 rounded-full transition' href='/'>Home</Link>
                {isLogedIn().then(logedIn => logedIn ? <> <form><button className='hover:bg-slate-400 py-2 px-4 rounded-full transition' formAction={logout}>Log out</button></form><Link className='hover:bg-slate-400 py-2 px-4 rounded-full transition' href='/dashboard'>Dashboard</Link></> :
                    <Link className='hover:bg-slate-400 py-2 px-4 rounded-full transition' href='/auth'>Login / Signup</Link>
                )}
            </nav>
        </header>
    )
}

export default Header

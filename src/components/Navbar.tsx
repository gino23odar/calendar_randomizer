"use client"

import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {

  const { data: session } = useSession()

  return (
    <nav className='bg-slate-500 flex items-center py-3 justify-between px-20'>
        <Link href='/'>
          <h1>Calendar Randomizer</h1>
        </Link>

        {session?.user ? (
          <div className='flex gap-x-4 items-center'>
            <Link href='/calendarview'>
              CalendarView
            </Link>
            <p>{session.user.name}</p>
            <img src={session.user.image!} className='rounded-full w-10 h-10 cursor-pointer' />
            <button className='px-3 py-2 rounded bg-red-400' onClick= {async() => {
                await signOut({ 
                  callbackUrl:'/',
                })
              }}
            >
              Sign Out
            </button>
          </div>
        ): (
          <button onClick={() => signIn()} className='px-3 py-2 rounded bg-blue-400'>
            Sign In
          </button>
        )}
    </nav>
  )
}

export default Navbar
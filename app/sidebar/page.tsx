import { CircleUserRound, SquarePen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Sidebarpage() {
  return ( 
    <div className='bg-[#543310] min-h-screen text-white text-sm fixed top-0 z-50 pt-14 rounded-br-4xl rounded-tr-4xl   '>
      <div className=' flex flex-col gap-16 justify-center text-center items-center text-[#F2EAD3]  ' >
      <Link href="/edit">
          <SquarePen size={20} />
      </Link>
      <div className=' flex flex-col gap-24 pt-10   '>
        <Link href="#" className='rotate-270'>HOME</Link>
        <Link href="/thoughts " className='rotate-270'>THOUGHTS</Link>
        <Link href="" className='rotate-270'>CALENDER</Link>
        {/* <Link href="" className='rotate-270'>Work</Link>
        <Link href="" className='rotate-270'>Social</Link> */}
      </div>
      <Link href="/profile" className=' ' ><CircleUserRound size={20} /></Link>
      </div>
    </div>
  )
}

export default Sidebarpage

import { CircleUserRound, SquarePen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Sidebarpage() {
  return ( 
    <div className='bg-[#543310] min-h-screen text-white text-sm fixed top-0 z-50 pt-14 rounded-br-4xl rounded-tr-4xl   '>
      <div className=' flex flex-col gap-12 justify-center text-center items-center text-[#F2EAD3]  ' >
      <Link href="">
          <SquarePen size={20} />
      </Link>
      <div className=' flex flex-col gap-15 pt-10 capitalize   '>
        <Link href="" className='rotate-270'>Dashboard</Link>
        <Link href="" className='rotate-270'>Urgent</Link>
        <Link href="" className='rotate-270'>Chores</Link>
        <Link href="" className='rotate-270'>Work</Link>
        <Link href="" className='rotate-270'>Social</Link>
      </div>
      <Link href="" className=' ' ><CircleUserRound size={20} /></Link>
      </div>
    </div>
  )
}

export default Sidebarpage

import { Undo2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
        <header className='border m-3 p-3 rounded-2xl flex justify-between'>
            <Link href={'/'}><Undo2/></Link>
            <div>Notifications</div>
            <div></div>
        </header>
        
    </div>
  )
}

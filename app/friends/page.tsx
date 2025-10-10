import FriendList from '@/src/widgets/FriendsList/ui/FriendList'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
        <header className='flex justify-between m-3 p-3 border rounded-2xl'>
            <Link href={'/'}><Undo2/></Link>
            <div>Friends</div>
            <div></div>
        </header>
        <FriendList/>
    </div>
  )
}

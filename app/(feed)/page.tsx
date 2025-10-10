import { SidebarTrigger } from '@/src/shared/ui/sidebar'
import PostsList from '@/src/widgets/PostsList/ui/PostsList'
import { Bell, Undo2 } from 'lucide-react'
import React from 'react'

export default function Page() {
  return (
    <div>
      <header className='flex border m-3 p-3 rounded-2xl justify-between'>
        <SidebarTrigger />
        Feed
        <Bell/>
      </header>
      <PostsList/>
    </div>
  )
}

import { Input } from '@/src/shared/ui/input'
import React from 'react'
import { SidebarTrigger } from '@/src/shared/ui/sidebar';
export default function ChatHeader() {
  return (
    <header className='flex items-center gap-x-5 p-3 mx-3 border rounded-2xl '>
        <SidebarTrigger />
        <Input placeholder='Search'/>
    </header>
  )
}

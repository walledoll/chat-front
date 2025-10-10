import { SidebarTrigger } from '@/src/shared/ui/sidebar';
import { Undo2 } from 'lucide-react'
import React from 'react'

const items = [
    'profile',
    'notifications',
    'chats',
    'connections'
];


export default function Settings() {
  return (
    <div>
        <header className='border m-3 p-3 rounded-2xl flex justify-between'>
            <SidebarTrigger />
            <div className=''>Settings</div>
            {/* костыль */}
            <div></div>
        </header>
        <main className='flex flex-col justify-center items-center m-3 p-3 gap-5 border rounded-2xl'>
            {items.map((item, index) => 
                <div key={index} className='border w-full p-3 rounded-2xl'>{item}</div>
            )}
        </main>
    </div>
  )
}

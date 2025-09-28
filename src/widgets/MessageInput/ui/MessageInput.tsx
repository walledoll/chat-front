import { Mic, Paperclip, Smile } from 'lucide-react'
import React from 'react'


export default function MessageInput() {
  return (
    <div className='flex gap-3 w-full rounded-2xl border p-3'>
        <Paperclip/>
        <input className='w-full h-full rounded-sm' type="text" placeholder='Write your message...'/>
        <Smile/>
        <Mic/>
    </div>
  )
}

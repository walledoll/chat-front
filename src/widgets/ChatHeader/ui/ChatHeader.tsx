import { Input } from '@/src/shared/ui/input'
import React from 'react'
import { TextAlignJustify } from 'lucide-react';
import { Button } from '@/src/shared/ui/button';
export default function ChatHeader() {
  return (
    <header className='flex gap-x-5 p-3 mx-3 border rounded-2xl '>
        <Button><TextAlignJustify/></Button>
        <Input placeholder='Search'/>
    </header>
  )
}

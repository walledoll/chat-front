import MessageHeader from '@/src/widgets/MessageHeader/ui/MessageHeader'
import MessageInput from '@/src/widgets/MessageInput/ui/MessageInput'
import React from 'react'

export default function Page() {
  return (
    <div className='w-full'>
        <MessageHeader name='Danil Group' membersCount={3} onlineMembersCount={1}/>
        <MessageInput/>
    </div>
  )
}

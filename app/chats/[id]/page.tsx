import MessageHeader from '@/src/widgets/MessageHeader/ui/MessageHeader'
import MessageInput from '@/src/widgets/MessageInput/ui/MessageInput'
import MessageList from '@/src/widgets/MessageList/ui/MessageList'
import React from 'react'

export default function Page() {
  return (
    <div className='w-full h-screen flex flex-col'>
        <MessageHeader avatarUrl='https://i.pravatar.cc/150?img=1' name='Danil Group' membersCount={3} onlineMembersCount={1}/>
        <div className='overflow-y-auto thin-scrollbar'>
          <MessageList />
        </div>
        <MessageInput/>
    </div>
  )
}

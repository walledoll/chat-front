import Message from '@/src/entities/message/ui/Message'
import React from 'react'
import { mockMessages } from '../api/messages'

export default function MessageList() {
  return (
    <div >
        {
            mockMessages.map((mes) => <Message {...mes}/>)
        }
    </div>
  )
}

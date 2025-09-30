import Message from '@/src/entities/message/ui/Message'
import React from 'react'
import { mockMessages } from '../api/messages'
import { randomUUID } from 'crypto'

export default function MessageList() {
  return (
    <div >
        {
            mockMessages.map((mes) => <Message key={randomUUID()} {...mes}/>)
        }
    </div>
  )
}

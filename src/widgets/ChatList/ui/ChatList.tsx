import React from 'react'
import { mockChatList } from '../api/chat'
import ChatItem from '@/src/entities/chat/ui/ChatItem'

export default function ChatList() {
    return (
        <div>
            {mockChatList.map(chat => <ChatItem key={chat.name} {...chat}/>)}
        </div>
    )
}

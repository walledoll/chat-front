import React from 'react'
import { mockChatList } from '../api/chat'
import ChatItem from '@/src/entities/chat/ui/ChatItem'

export default function ChatList() {
    const sortedChats = [...mockChatList].sort((a, b) =>
    new Date(b.lastSenderMessageTime).getTime() - new Date(a.lastSenderMessageTime).getTime()
    );
    return (
        <div>
            {sortedChats.map(chat => <ChatItem key={chat.name} {...chat}/>)}
        </div>
    )
}

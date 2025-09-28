import { Avatar, AvatarImage } from '@/src/shared/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import Image from 'next/image';
import React from 'react'

interface ChatItemProps{
    avatarUrl: string;
    name: string;
    lastSenderUsername: string;
    lastSenderMessage: string;
    lastSenderMessageTime: string;
    newMessagesCount?: string | number;
}

export default function ChatItem({
    avatarUrl,
    name,
    lastSenderMessage,
    lastSenderMessageTime,
    lastSenderUsername,
    newMessagesCount
}: ChatItemProps) {
  return (
    <div className='flex m-3 p-3 border rounded-2xl items-center gap-3'>
        <Avatar >
            <AvatarImage src={avatarUrl}/>
            <AvatarFallback/>
        </Avatar>
        <div className='w-full'>
            <div className='flex justify-between items-end'>
                <h1 className='font-bold'>{name}</h1>
                <span className='text-[14px]'>{lastSenderMessageTime}</span>
            </div>
            <div className='flex justify-between items-end'>
                <h2 className='text-[14px]'>{lastSenderUsername}: {lastSenderMessage}</h2>
                {newMessagesCount && 
                    <span className='bg-rose-700 text-[12px] w-7 text-center text-white p-1 rounded-lg'>{newMessagesCount}</span> 
                }
            </div>
        </div>
    </div>
  )
}

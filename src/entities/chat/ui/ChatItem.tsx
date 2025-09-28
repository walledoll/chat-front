import { Avatar, AvatarImage } from '@/src/shared/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ChatItemProps{
    avatarUrl: string;
    name: string;
    lastSenderUsername: string;
    lastSenderMessage: string;
    lastSenderMessageTime: string;
    newMessagesCount?: string | number;
}

export const formatTimeAgo = (isoString: string): string => {
  const msgDate = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - msgDate.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  const today = new Date().toDateString();
  const msgDay = msgDate.toDateString();

  if (msgDay === today) {
    return msgDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }); // "14:22"
  } else if (diffDays < 2) {
    return 'Вчера';
  } else if (diffDays < 7) {
    return msgDate.toLocaleDateString('ru-RU', { weekday: 'short' }); // "Пн", "Вт"
  } else {
    return msgDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }); // "10 мая"
  }
};

export default function ChatItem({
    avatarUrl,
    name,
    lastSenderMessage,
    lastSenderMessageTime,
    lastSenderUsername,
    newMessagesCount
}: ChatItemProps) {
    return (
        <Link href={`chats/${name}`} className='flex m-3 p-3 border rounded-2xl items-center gap-3'>
            <Avatar >
                <AvatarImage src={avatarUrl}/>
                <AvatarFallback/>
            </Avatar>
            <div className='w-full'>
                <div className='flex justify-between items-end'>
                    <h1 className='font-bold'>{name}</h1>
                    <span className='text-[14px]'>{formatTimeAgo(lastSenderMessageTime)}</span>
                </div>
                <div className='flex justify-between items-end'>
                    <h2 className='text-[14px]'>{lastSenderUsername}: {lastSenderMessage}</h2>
                    {newMessagesCount && 
                        <span className='bg-rose-700 text-[12px] w-7 text-center text-white p-1 rounded-lg'>{newMessagesCount}</span> 
                    }
                </div>
            </div>
        </Link>
    )
}

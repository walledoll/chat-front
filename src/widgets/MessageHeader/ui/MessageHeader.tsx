import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { EllipsisVertical, Phone, Search, Undo } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

interface MessageHeaderProps{
    name: string;
    membersCount: number;
    onlineMembersCount: number;
    avatarUrl: string;
}

export default function MessageHeader({
    name,
    membersCount,
    onlineMembersCount,
    avatarUrl
}:MessageHeaderProps) {
    return (
        <header className='flex justify-between items-center p-3 border rounded-xl mb-3'>
            <Link href={'/'}><Undo/></Link>
            <div className='flex gap-3'>
                <img className='size-10 rounded-3xl' src={avatarUrl}/>
                <div>
                    <h1>{name}</h1>
                    <h1 className='text-[12px]'>{membersCount} members, {onlineMembersCount} online</h1>
                </div>
            </div>
            <div className='flex justify-between gap-3'>
                <Search/>
                <Phone/>
                <EllipsisVertical/>
            </div>
        </header>
    )
}

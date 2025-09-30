import { Avatar, AvatarImage } from '@/src/shared/ui/avatar';
import { Label } from '@/src/shared/ui/label';
import {Edit, Info, Undo2 } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

interface PageProps{
    avatarUrl: string;
    fullname: string;
    lastSeen: null | string;
    phone: string;
    username: string;
    birthDate: string;
}

export default function Profile(props: PageProps) {
  return (
    <div className='w-full'>
        <header className='flex p-3 justify-between border m-3 rounded-2xl' >
            <Link href='/'><Undo2/></Link>
            <h1>My Profile</h1>
            <Edit/>
        </header>

        <main className='w-full'>
            <section className='flex flex-row justify-around items-center border m-3 p-5 rounded-2xl'>
                <Avatar  className=''>
                    <AvatarImage src={props.avatarUrl}/>
                </Avatar>
                <div className=' flex flex-col justify-center items-start p-3'>
                    <h1>{props.fullname}</h1>
                    {props.lastSeen ? 
                        <p>last seen today at {props.lastSeen}</p>
                        :
                        <p>Online</p>
                    }
                </div>
            </section>
            <section className='flex flex-row border justify-around rounded-2xl m-3 p-5'>
                <Info className=''/>
                <div className='flex flex-col gap-3'>
                    <div>
                        <p>{props.phone}</p>
                        <Label>Mobile</Label>
                    </div>
                    <div>
                        <p>{props.username}</p>
                        <Label>Username</Label>
                    </div>
                    <div>
                        <p>{props.birthDate}</p>
                        <Label>Date of Birth</Label>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

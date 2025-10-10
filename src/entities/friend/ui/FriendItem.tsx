import { Avatar } from '@/src/shared/ui/avatar'
import { Card, CardContent, CardHeader } from '@/src/shared/ui/card'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import { Friend } from '../model/types'

export default function FriendItem(props: Friend) {
  return (
    <Card className='p-3 m-3'>
        <CardHeader>
            <Avatar>
                <AvatarImage src={props.avatarUrl}/>
                <AvatarFallback>
                    <div className='bg-gray-600 text-white flex justify-center items-center'>
                        {props.fullname.charAt(0)}
                    </div>
                </AvatarFallback>
            </Avatar>
        </CardHeader>
        <CardContent>
            <div>fullname: {props.fullname}</div>
            <div>last seen {props.lastSeen}</div>
            <div>friends: {props.friendsCount}</div>
            <div>following: {props.followingCount}</div>
        </CardContent>
    </Card>
  )
}

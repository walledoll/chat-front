import React from 'react'
import { friendList } from '../api/friends'
import FriendItem from '@/src/entities/friend/ui/FriendItem'
import { Friend } from '@/src/entities/friend/model/types'

export default function FriendList() {
  return (
    <div>
        {friendList.map(((friend: Friend) => <FriendItem {...friend}/>))}
    </div>
  )
}

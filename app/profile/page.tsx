import Profile from '@/src/widgets/Profile/ui/Profile'
import React from 'react'

const profile ={
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    fullname: 'Danil Valiahmetov',
    lastSeen: '15:44',
    phone: '89003003030',
    username: 'walle',
    birthDate: '20.12.2006'
}

export default function Page() {
  return (
    <div>
        <Profile {...profile}/>
    </div>
  )
}



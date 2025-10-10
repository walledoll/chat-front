import React from 'react'
import type { Notification } from '../model/types'

export default function Notification(props: Notification) {
  return (
    <div className='m-3 p-3 border rounded-2xl flex '>
        {props.type.LIKE &&
            <div>{props.author} liked your post</div>
        }
        {props.type.COMMENT &&
            <div>{props.author} left comment</div> 
        }
        {props.type.NEW_FRIEND &&
            <div>{props.author} is your new friend</div>
        }
        <div>{props.time}</div>
    </div>
  )
}

import React from 'react'
import { mockPosts } from '../api/posts'
import Post from '@/src/entities/post/ui/Post'

export default function PostsList() {
  return (
    <div>
        {mockPosts.map((post, index) => 
            <Post {...post} key={index}/>
        )}
    </div>
  )
}

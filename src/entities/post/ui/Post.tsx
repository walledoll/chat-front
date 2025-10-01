import { Card, CardContent, CardFooter, CardHeader } from '@/src/shared/ui/card';
import { MessageCircle, ThumbsUp } from 'lucide-react';
import React from 'react'

interface PostProps{
    author: string;
    content: string;
    videoUrl: string;
    photoUrls: string[];
    likes: number;
    comments: number;
    date: string;
}

export default function Post(props: PostProps) {
  const photos = props.photoUrls.slice(0, 10);
  return (
    <Card className='m-5 p-5'>
        <CardHeader className='flex justify-between'>
            {props.author}
            {props.date}
        </CardHeader>
        <CardContent>
          {props.videoUrl &&
            <video
              src={props.videoUrl}
              controls
              preload='metadata'
            >
              Video is not supported
            </video>
          }
          {photos &&
            <div>
              {photos.map((photo, index) => 
                  <img 
                    src={photo}
                    key={index}
                  />
              )
              }
            </div>
          }
          <div>
            {props.content}
          </div>
            
        </CardContent>
        <CardFooter className='flex flex-row gap-5'>
          <div>
            <ThumbsUp/>
            {props.likes}
          </div>
          <div>
            <MessageCircle/>
            {props.comments}
          </div>
        </CardFooter>
    </Card>
  )
}

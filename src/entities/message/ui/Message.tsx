import { Avatar, AvatarFallback, AvatarImage } from '@/src/shared/ui/avatar';
import React from 'react';

interface MessageProps {
  sender: string;
  content: string;
  senderAvatarUrl?: string;
  sendTime: string;
  isUserSended: boolean;
  isGroup: boolean;
}

export default function Message(props: MessageProps) {
  const showAvatar = props.isGroup && !props.isUserSended;

  return (
    <div className="flex items-end gap-2 mb-2">
      {showAvatar && (
        <Avatar className="w-8 h-8 flex-shrink-0">
          <AvatarImage
            src={props.senderAvatarUrl}
            alt={props.sender}
          />
          <AvatarFallback className="bg-gray-300 text-xs rounded-full font-medium">
            {props.sender.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      )}

      <div className={`flex flex-col w-full gap-3 ${props.isUserSended ? ' items-end' : 'items-start'}`}>
        <div
          className={`px-3 py-2 rounded-lg max-w-xs ${
            props.isUserSended
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
            {showAvatar && (
            <span className="text-xs text-gray-500 mb-0.5">{props.sender}</span>
            )}
          <p className="text-sm">{props.content}</p>
          <span className={`text-xs text-gray-500 mt-1 ${props.isUserSended ? 'self-end text-white' : 'self-start'}`}>
            {props.sendTime}
          </span>
        </div>
      </div>
    </div>
  );
}
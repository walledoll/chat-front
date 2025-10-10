export interface Chat{
    avatarUrl: string;
    name: string;
    lastSenderUsername: string;
    lastSenderMessage: string;
    lastSenderMessageTime: string;
    newMessagesCount?: number;
}
export type TYPE = {
    LIKE: 'LIKE',
    COMMENT: 'COMMENT',
    NEW_FRIEND: 'NEW_FRIEND'
}

export interface Notification{
    type: TYPE;
    time: string;
    author: string;
}
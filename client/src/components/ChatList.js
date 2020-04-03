import React from 'react';
import ChatItem from './ChatItem';

export default function ChatList(props) {
    const listItems = props.data.map((item, index) =>
        <ChatItem key={index} chat={item} deleteChat = { () => props.deleteChat(item.id)} />
    );

    return (
        
        <ol>
            {listItems}
        </ol>
    )
}
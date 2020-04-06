import React from 'react';
import ChatItem from './ChatItem';

export default function ChatList(props) {
    console.log(props.data, 'aaaaaaaaa')
    const listItems = props.data.map((item, index) =>
        <ChatItem key={index} chat={item} remove={() => props.deleteChat(item.id)}  resend={() => props.resendChat(item)} />
    );

    return (
        
        <ol>
            {listItems}
        </ol>
    )
}
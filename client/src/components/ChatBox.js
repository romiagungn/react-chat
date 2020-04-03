import React, { Component } from 'react';
import ChatForm from './ChatForm';
// import ChatList from './ChatList';
import ChatItem from './ChatItem';
import '../css/style.css';

export default class ChatBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.addChat = this.addChat.bind(this)
        this.deleteChat = this.deleteChat.bind(this)
    }

    addChat(chat) {
        this.setState((state) => ({
            data: [...state.data, chat]
        }))
    }

    deleteChat(id) {
        this.setState((state) => ({
            data: state.data.filter(item => item.id !== id)
        }))
    }

    // Always make sure the window is scrolled down to the last message.
    scrollToBottom() {
        const chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight;
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h2 className="card-header text-center">React Chat App</h2>
                </div>
                    <div className="column">
                        <div className="card-edit">
                            <div className="scrollable" style={{ maxHeight: '67vh', overflowY: 'auto' }}>
                                {this.state.data.map((item, index) => (
                                    <ChatItem key={index}
                                        chat={item}
                                        deleteChat={() => this.deleteChat(item.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                <ChatForm addChat={this.addChat} style={{ overflowY: 'auto' }} />
            </div >
        );
    }
};
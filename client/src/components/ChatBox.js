import React, { Component } from 'react';
import ChatForm from './ChatForm';
import ChatList from './ChatList';
// import ChatItem from './ChatItem';
import '../css/style.css';
import axios from 'axios';
// import ChatList from './ChatList';

const request = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default class ChatBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            color: [192, 132, 153]
        };

        this.addChat = this.addChat.bind(this)
        this.deleteChat = this.deleteChat.bind(this)
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentDidMount() {
        request.get('chats')
            .then((response) => {
                console.log(response)
                this.setState({ data: response.data })
            })
            .catch((err) => {
                alert(err)
            })
    }

    addChat(chatData) {
        this.setState((state) => ({
            data: [...state.data, chatData]
        }));
        request.post(`chats`, chatData)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                this.setState((state) => ({
                    data: state.data.map(item => {
                        if (item.id === chatData.id) {
                            item.sent = false;
                        }
                        return item;
                    })
                }));
            })
    }

    deleteChat(id) {
        this.setState((state) => ({
            data: state.data.filter(item => item.id !== id)
        }));
        request.delete(`chats/${id}`)
            .then((response) => {
                console.log('Data Berhasil Dihapus')
            })
            .catch((err) => {
                alert(err)
            })
    }

    // Always make sure the window is scrolled down to the last message.
    scrollToBottom() {
        const chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight;
    }

    render() {


        return (
            <div className="py-5">
                <div className="card">
                    <h2 className="card-header text-center">React Chat App</h2>
                </div>
                <div className="column">
                    <div className="card-edit">
                        <div className="scrollable" style={{ maxHeight: '67vh', overflowY: 'auto' }}>
                            <ChatList data={this.state.data} deleteChat={this.deleteChat} />
                            <div style={{ float: "left", clear: "both" }}
                                ref={(el) => { this.messagesEnd = el; }}>
                            </div>
                        </div>
                    </div>
                </div>
                <ChatForm addChat={this.addChat} style={{ overflowY: 'auto' }} />
            </div >
        );
    }
};
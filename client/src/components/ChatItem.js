import React from 'react';
import '../css/style.css'
import ReactMarkdown from 'react-markdown';

export default function ChatItem(props) {
    return (
        <div className="col-xl">
            <div className=" py-2">
                <div className="media w-100 mb-3"><img src="https://freesvg.org/download/49762" alt="user" width="100" className="rounded-circle" />
                    <div className="media-body ml-5 bg-blue">
                        <div className="bg-light py-2 px-3 mb-2">
                            <div className="d-flex justify-content-end btn text-muted d-flex"
                                onClick={() => props.deleteChat(props.id)}>
                                delete
                        </div>
                            <div className="d-flex justify-content-start name">
                                <h5>{props.chat.name}</h5>
                            </div>
                            <div className="d-flex justify-content-between chat">
                                <ReactMarkdown source={props.chat.chat} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
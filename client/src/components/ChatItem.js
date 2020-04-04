import React from 'react';
import '../css/style.css'
import ReactMarkdown from 'react-markdown';

export default function ChatItem(props) {
    return (
        <div className="">
            <div className="py-2">
                <div className="media w-100 mb-2">
                    <button className="btn-circle2 btn-lg with-border "><i className="fas fa-user fa-2x"></i></button>
                    <div className="media-body ml-5 bg-blue">
                        <div className="arrow_box py-2 px-3">
                            <div className="d-flex justify-content-between name d-flex " onClick={() => props.remove(props.id)}>
                                <h5>{props.chat.nama}</h5> 
                                delete
                            </div>
                            <div className="d-flex justify-content-between chat ">
                                <ReactMarkdown source={props.chat.chat} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
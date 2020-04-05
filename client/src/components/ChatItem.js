import React from 'react';
import '../css/style.css'
import ReactMarkdown from 'react-markdown';
import { randomColor, complementaryColor } from './helpers';

export default function ChatItem(props) {
    const backgroundColor = randomColor();
    const color = complementaryColor(backgroundColor);
    const style = {
        backgroundColor,
        color,
        padding: '10px 16px',
        textAlign: 'center',
        fontSize: '24px',
    }
    return (
        <div className="">
            <div className="py-2">
                <div className="media w-100 mb-2">
                    <button className="btn-circle2 btn-lg with-border" style={style}><i className="fas fa-user fa-2x"></i></button>
                    <div className="media-body ml-5 bg-blue">
                        <div className="arrow_box py-2 px-3">
                            <div className="d-flex justify-content-between name d-flex " onClick={() => props.remove(props.id)}>
                                <h5>{props.chat.nama}</h5>
                                <i className="fas fa-trash fa-lg"></i>
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
import React, { Component } from 'react';
import '../css/style.css'

export default class ChatFrom extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', chat: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const id = Date.now()
        this.props.addChat({ id, name: this.state.name, chat: this.state.chat })
        this.setState({ name: '', chat: '' })
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="" onSubmit={this.handleSubmit}>
                <div className="card" >
                    <li className="list-group-item borderless d-flex  align-items-center">
                        <div className="speech-bubble col-3">
                            <div className="form-label-group mb-0">
                                <input type="text" name="name" className="form-control border-2 py-4 bg-light " placeholder="Name" required={true}
                                    onChange={this.handleChange} value={this.state.name} />
                            </div>
                        </div>
                        <div className="speech-bubble col-8">
                            <div className="input-group">
                                <input name="chat" type="text" placeholder="Type a message" aria-describedby="button-addon2" required={true}
                                    className="form-control border-2 py-4 bg-light" 
                                    onChange={this.handleChange} value={this.state.chat}/>
                            </div>
                        </div>
                        <button type="submit" id="submitBtn" className="btn btn-primary btn-circle btn-lg"><i className="fas fa-comment fa-2x"></i></button>
                    </li>
                </div>
            </form>

        );
    }
}
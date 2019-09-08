import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
	
	let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

	let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );

	return (
		<div className="container">
			<div className="grid col-5-7 ui-block">
				<ul className="notification-list chat-message">
					{dialogsElements}
				</ul>
				
				<div className="chat-field">
					<ul className="notification-list chat-message chat-message-field">
						{messagesElements}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;
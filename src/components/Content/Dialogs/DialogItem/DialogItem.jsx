import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<li>
			<NavLink to={path}>
				<div className="h6 notification-friend">{props.name}</div>
			</NavLink>
		</li>
	)
}


export default DialogItem;
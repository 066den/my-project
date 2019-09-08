import React from 'react';
//import s from './Content.css';
import Profile from './Profile/Profile';
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";

const Content = (props) => { 
	return (
		<div className="wrapper-content">
			<Route 	path='/profile' 
							render={ () => <Profile 
								profilePage={props.state.profilePage} 
								dispatch={props.dispatch} /> } />
			<Route 	path='/dialogs' 
							render={ () => <Dialogs state={props.state.dialogsPage} /> } />
		</div>	
	)
}

export default Content;
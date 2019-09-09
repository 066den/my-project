import React from 'react';
import Profile from './Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const Content = (props) => { 
	return (
		<div className="wrapper-content">
			<Route 	path='/profile'	render={ () => <Profile  /> } />
			<Route 	path='/dialogs' render={ () => <DialogsContainer /> } />
		</div>	
	)
}

export default Content;
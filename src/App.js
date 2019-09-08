import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Sidebar />		
				<Content 
					state={props.state} 
					dispatch={props.dispatch} />
			</div>
		</BrowserRouter>
	)
}

export default App;
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';


const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Sidebar />		
			<Content />
		</div>
	)
}

export default App;
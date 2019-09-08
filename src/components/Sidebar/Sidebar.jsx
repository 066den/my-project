import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="fixed-sidebar">
			<nav className={s.nav}>
				<div className={s.item}>
					<NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink>
				</div>
				<div className={s.item}>
					<a>News</a>
				</div>
				<div className={s.item}>
					<a>Music</a>
				</div>
				<div className={s.item}>
					<a>Settings</a>
				</div>
			</nav>
		</div>
		
	)
}

export default Sidebar;
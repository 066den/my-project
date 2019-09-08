import React from 'react';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className="header">
			<div className={s.title}><h6>Страница профиля</h6></div>
		</header>
	)
}

export default Header;
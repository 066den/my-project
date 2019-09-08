import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
	return (
		<div className="ui-block">
			<div className="top-header">
				<div className="top-header-thumb">
					<img src="http://profden.ru/assets/img/top-header1.jpg" alt=""/>
				</div>

		</div>
		<div className={s.descriptionBlock}>
		ava + description
		</div>
		</div>
		)
}

export default ProfileInfo;
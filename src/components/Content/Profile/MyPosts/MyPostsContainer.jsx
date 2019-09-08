import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer';

const MyPostsContainer = (props) => {

	let addPost = () => {
		//props.addPost();
		props.state.dispatch(addPostActionCreator());
	}

	let onPostChange = (text) => {
		let action = updateNewPostTextActionCreator(text);
		//props.updateNewPostText(text);
		props.state.dispatch(action);
	}

	return (
		<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={props.posts}/>
	)
}

export default MyPostsContainer;
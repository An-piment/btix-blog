import Axios from 'axios';
import PostInfos from '../postinfos/PostInfos';
import PostUserInfo from '../postuserinfo/PostUserInfo';
import { useEffect, useState } from 'react';
import styles from './Posts.module.css'

const Posts = () => {
	const [ posts, setPosts ] = useState([]);
	const [ users, setUsers ] = useState([]);

	useEffect (() => {
		const fetchPosts = () => {
			const API_URL = "https://jsonplaceholder.typicode.com/posts";
			Axios
				.get(API_URL)
				.then((result) => setPosts(result.data));	
		}

		const fetchUsers = () => {
			const API_URL = 'https://jsonplaceholder.typicode.com/users/';
			Axios
				.get(API_URL)
				.then((result) => setUsers(result.data));		
		}

		fetchUsers();
		fetchPosts();
	})

	return (
		<div className ={styles.postMainBox}>
			{posts.map(({ id, title, body, userId }) => (
				<section key={`post${id}`} className={styles.postBox}>
					<PostUserInfo userName={users[userId - 1].name} />
					<PostInfos title={title} message={body} />
				</section>
				))}
		</div>
	)
}

export default Posts;
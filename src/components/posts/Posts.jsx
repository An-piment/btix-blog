import Axios from 'axios';
import PostInfos from '../postinfos/PostInfos'
import { useEffect, useState } from 'react';
import styles from './Posts.module.css'
import userIcon from './user-icon.svg';

function Posts() {
	const [ posts, setPosts ] = useState([]);
//	const [ username, setUserName ] = useState({})

	useEffect (() => {
		Axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((result) => setPosts(result.data));
	})

	return (
		<div className ={styles.postMainBox}>
			{posts.map(({ id, title, body }) => (
				<section key={`post${id}`} className={styles.postBox}>
					<img className={styles.userIcon} src={userIcon} alt="User Profile" />
					<PostInfos />
				</section>
				))}
		</div>
	)
}

export default Posts;
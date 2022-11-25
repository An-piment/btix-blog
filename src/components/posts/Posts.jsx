import Axios from 'axios';
import PostInfos from '../postinfos/PostInfos';
import PostUserInfo from '../postuserinfo/PostUserInfo';
import ButtonComments from '../buttoncomments/ButtonComments';
import { useEffect, useState } from 'react';
import styles from './Posts.module.css';

const Posts = () => {

	const [ posts, setPosts ] = useState([]);
	const [ users, setUsers ] = useState([]);
	const [ isLoading, setLoading ] = useState(true);

	useEffect (() => {
		const fetchPosts = async () => {
			const API_URL = "https://jsonplaceholder.typicode.com/posts";
			await Axios
				.get(API_URL)
				.then((result) => setPosts(result.data));	
		}

		const fetchUsers = async () => {
			const API_URL = 'https://jsonplaceholder.typicode.com/users/';
			await Axios
				.get(API_URL)
				.then((result) => setUsers(result.data));		
		}

		fetchUsers();
		fetchPosts();
		setLoading(false);
	}, [])

	return (
		<div className ={styles.postMainBox}>
			{isLoading ? (
				<p>Loading Posts</p>
			) : (
				posts.map(({ id, title, body, userId }) => (
					<section key={`post${id}`} className={styles.postBox}>
						<PostUserInfo userName={users[userId - 1].name} />
						<PostInfos title={title} message={body} />
						<ButtonComments postId={id}/>
					</section>
					))
				)}
		</div>
	)
}

export default Posts;
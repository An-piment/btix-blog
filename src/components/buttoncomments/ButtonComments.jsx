import { useState } from 'react';
import Axios from 'axios';
import Comments from '../comments/Comments';
import styles from './ButtonComments.module.css';

function ButtonComments({ postId }) {

	const [allComments, setAllComments] = useState([]);
	const [isToHide, setIsToHide] = useState(false);
	const [commentsText, setCommentsText] = useState('Show Comments');

	const fetchComments = async (postId) => {
		const COMMENTS_URL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
		await Axios.get(COMMENTS_URL)
			.then((result) => setAllComments(result.data));
			if (!isToHide) setCommentsText('Hide Comments');
			else setCommentsText('Show Comments');
			setIsToHide(!isToHide);	
	}

	return (
		<div className={styles.comments}>
			<button 
				type="button" 
				className="btn btn-primary"
				onClick={() => fetchComments(postId)}
			>
				{commentsText}
			</button>
			{(!isToHide) ? [] :
				allComments.map(({ name, body, id }) => (
					<Comments 
					key={`${postId}-${id}`}
					userName ={name}
					userComment ={body}
					/>					
				))
			} 
		</div>
	)
}

export default ButtonComments;
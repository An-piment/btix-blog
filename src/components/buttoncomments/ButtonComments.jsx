import { useState } from 'react';
import Axios from 'axios';
import styles from './ButtonComments.module.css'

function ButtonComments({ postId }) {

	const [allComments, setAllComments] = useState([]);
	const [isLoading, setLoadingState] = useState(true);

		const fetchComments = async (postId) => {
			const COMMENTS_URL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
			Axios.get(COMMENTS_URL)
				.then((result) => setAllComments(result.data));
			setLoadingState(false);
		}

	return (
		<div className={styles.comments}>
			<button 
				type="button" 
				className="btn btn-primary"
				onClick={async () => await fetchComments(postId)}
			>
				{`Comments (${allComments.length})`}
			</button>
			{isLoading ? 
				<p></p> 
				: 
				<p>carrega</p>} 
		</div>
	)
}

export default ButtonComments;
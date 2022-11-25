import styles from './PostInfos.module.css';

const PostInfos = ({ title, message }) => {
		return (
			<div className={styles.mainMessageBox}>
				<h4 className={styles.postTitle}><span>Title:</span> {title}</h4>
				<hr></hr>
				<p className={styles.postMessage}>{message}</p>
			</div>
		)
	}

export default PostInfos;
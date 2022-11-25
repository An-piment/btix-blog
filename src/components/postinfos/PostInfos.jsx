import styles from './PostInfos.module.css';

const PostInfos = ({ title, message }) => {
		return (
			<div className={styles.mainMessageBox}>
				<h4><span>Title:</span> {title}</h4>
				<hr></hr>
				<p>{message}</p>
			</div>
		)
	}

export default PostInfos;
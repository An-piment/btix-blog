import styles from './PostUserInfo.module.css';
import userIcon from '../images/user-icon.svg';

const PostUserInfo = ({ userName }) => {
		return (
			<p className={styles.postHeaderParagraph}>
				<img className={styles.userIcon} src={userIcon} alt="User Profile" />
				<span className={styles.userName}>{userName}</span>
			</p>
		)
	}

export default PostUserInfo;
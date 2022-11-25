import styles from '../comments/Comments.module.css';
import logo from '../images/user-icon.svg';
import './Comments.module.css';

const Comments = ({ userName, userComment }) => {
		return (
      <div className={styles.commentBox}>
        <p className={styles.userInfos}>
          <img className={styles.userLogo} src={logo} alt="" /> {userName}
        </p>
        <hr></hr>
        <p className={styles.userComments}>{userComment}</p>
      </div>
    );
	}

export default Comments;